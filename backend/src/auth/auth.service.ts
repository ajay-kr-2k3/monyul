import { Injectable, ConflictException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
    ) {}

    async signup(name: string, phone: string, email: string | undefined, password: string) {
        const existingUser = await this.prisma.user.findUnique({
            where: { phone },
        });

        if (existingUser) {
            throw new ConflictException("Mobile number already registered");
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await this.prisma.user.create({
            data: {
                name,
                phone,
                email: email || null,
                passwordHash,
            },
        });

        const access_token = await this.jwtService.signAsync({
            sub: user.id,
            phone: user.phone,
            role: user.role,
        });

        return {
            message: "Account created successfully",
            access_token,
            user: {
                id: user.id,
                name: user.name,
                phone: user.phone,
                email: user.email,
                role: user.role,
            },
        };
    }

    async login(phone: string, password: string) {
        const user = await this.prisma.user.findUnique({
            where: { phone },
        });

        if (!user) {
            throw new UnauthorizedException("Invalid mobile number or password");
        }

        const passwordMatch = await bcrypt.compare(password, user.passwordHash);

        if (!passwordMatch) {
            throw new UnauthorizedException("Invalid mobile number or password");
        }

        const access_token = await this.jwtService.signAsync({
            sub: user.id,
            phone: user.phone,
            role: user.role,
        });

        return {
            message: "Login successful",
            access_token,
            user: {
                id: user.id,
                name: user.name,
                phone: user.phone,
                email: user.email,
                role: user.role,
            },
        };
    }

    async getMe(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                phone: true,
                email: true,
                role: true,
                dateOfBirth: true,
                gender: true,
                address: true,
                emergContact: true,
            },
        });
    
        if (!user) {
            throw new UnauthorizedException("User not found");
        }
    
        return user;
    }

    async updateProfile(
        userId: string,
        data: {
            name?: string;
            email?: string;
            dateOfBirth?: string;
            gender?: string;
            address?: string;
            emergContact?: string;
        },
    ) {
        const user = await this.prisma.user.update({
            where: { id: userId },
            data: {
                name: data.name,
                email: data.email || null,
                dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
                gender: data.gender || null,
                address: data.address || null,
                emergContact: data.emergContact || null,
            },
            select: {
                id: true,
                name: true,
                phone: true,
                email: true,
                role: true,
                dateOfBirth: true,
                gender: true,
                address: true,
                emergContact: true,
            },
        });
    
        return user;
    }

    async changePassword(
        userId: string,
        currentPassword: string,
        newPassword: string,
    ) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
    
        if (!user) {
            throw new UnauthorizedException("User not found");
        }
    
        const passwordMatch = await bcrypt.compare(
            currentPassword,
            user.passwordHash,
        );
    
        if (!passwordMatch) {
            throw new UnauthorizedException("Current password is incorrect");
        }
    
        if (currentPassword === newPassword) {
            throw new UnauthorizedException(
                "New password must be different from current password",
            );
        }
    
        const passwordHash = await bcrypt.hash(newPassword, 10);
    
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                passwordHash,
            },
        });
    
        return {
            message: "Password changed successfully",
        };
    }
}