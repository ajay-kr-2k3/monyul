import { Body, Controller, Get, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { JwtAuthGuard } from "./jwt-auth.guard.js";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signup")
    async signup(
        @Body()
        body: {
            name: string;
            phone: string;
            email?: string;
            password: string;
        },
    ) {
        return this.authService.signup(
            body.name,
            body.phone,
            body.email,
            body.password,
        );
    }

    @Post("login")
    async login(
        @Body()
        body: {
            phone: string;
            password: string;
        },
    ) {
        return this.authService.login(body.phone, body.password);
    }

    @Get("me")
    @UseGuards(JwtAuthGuard)
    async me(@Req() req: any) {
        return this.authService.getMe(req.user.sub);
    }

    @Patch("profile")
    @UseGuards(JwtAuthGuard)
    async updateProfile(
        @Req() req: any,
        @Body()
        body: {
            name?: string;
            email?: string;
            dateOfBirth?: string;
            gender?: string;
            address?: string;
            emergContact?: string;
        },
    ) {
        return this.authService.updateProfile(req.user.sub, body);
    }

    @Patch("change-password")
    @UseGuards(JwtAuthGuard)
    async changePassword(
        @Req() req: any,
        @Body()
        body: {
            currentPassword: string;
            newPassword: string;
        },
    ) {
        return this.authService.changePassword(
            req.user.sub,
            body.currentPassword,
            body.newPassword,
        );
    }
}