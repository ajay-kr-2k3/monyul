"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, Mail, MapPin, Phone, UserRound, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";

type Profile = {
    name: string;
    phone: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    emergContact: string;
};

export default function ProfilePage() {
    const router = useRouter();

    const [profile, setProfile] = useState<Profile>({
        name: "",
        phone: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        address: "",
        emergContact: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [activeSection, setActiveSection] = useState<"profile" | "password">("profile");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordSaving, setPasswordSaving] = useState(false);

    useEffect(() => {
        const loadProfile = async () => {
            const token = localStorage.getItem("access_token");

            if (!token) {
                router.push("/user/auth");
                return;
            }

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to load profile");
                }

                const data = await response.json();

                setProfile({
                    name: data.name || "",
                    phone: data.phone || "",
                    email: data.email || "",
                    dateOfBirth: data.dateOfBirth ? data.dateOfBirth.slice(0, 10) : "",
                    gender: data.gender || "",
                    address: data.address || "",
                    emergContact: data.emergContact || "",
                });
            } catch (error) {
                console.error("Profile loading failed:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProfile();
    }, [router]);

    const updateField = (field: keyof Profile, value: string) => {
        setProfile((current) => ({
            ...current,
            [field]: value,
        }));
    };

    const handleSave = async () => {
        const token = localStorage.getItem("access_token");

        if (!token) {
            router.push("/user/auth");
            return;
        }

        setSaving(true);
        setMessage("");

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(profile),
            });

            if (!response.ok) {
                throw new Error("Profile update failed");
            }

            const data = await response.json();

            setProfile({
                name: data.name || "",
                phone: data.phone || "",
                email: data.email || "",
                dateOfBirth: data.dateOfBirth ? data.dateOfBirth.slice(0, 10) : "",
                gender: data.gender || "",
                address: data.address || "",
                emergContact: data.emergContact || "",
            });

            setMessage("Profile updated successfully.");
        } catch (error) {
            console.error("Profile update failed:", error);
            setMessage("Unable to update profile. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        router.push("/");
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-[#f7f9fc]">
                <NavBar />
                <div className="flex min-h-screen items-center justify-center">
                    <p className="text-sm font-semibold text-slate-500">Loading profile...</p>
                </div>
            </main>
        );
    }

    const handleChangePassword = async () => {
        const token = localStorage.getItem("access_token");
    
        if (!token) {
            router.push("/user/auth");
            return;
        }
    
        setPasswordMessage("");
    
        if (!currentPassword || !newPassword || !confirmPassword) {
            setPasswordMessage("Please fill all password fields.");
            return;
        }
    
        if (newPassword !== confirmPassword) {
            setPasswordMessage("New password and confirm password do not match.");
            return;
        }
    
        if (newPassword.length < 8) {
            setPasswordMessage("New password must be at least 8 characters.");
            return;
        }
    
        setPasswordSaving(true);
    
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/change-password`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    currentPassword,
                    newPassword,
                }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.message || "Password change failed");
            }
    
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setPasswordMessage("Password changed successfully.");
        } catch (error) {
            console.error("Password change failed:", error);
    
            setPasswordMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to change password.",
            );
        } finally {
            setPasswordSaving(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#f7f9fc] text-[#172033]">
            <NavBar />

            <section className="pt-28">
                <div className="mx-auto max-w-[1100px] px-5 pb-16 lg:px-8">
                    <button type="button" onClick={() => router.back()} className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-[#1769e0]">
                        <ArrowLeft size={17} />
                        Back
                    </button>

                    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
                        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex flex-col items-center text-center">
                                <div className="grid size-24 place-items-center rounded-full bg-[#1769e0] text-3xl font-black text-white shadow-lg">
                                    {profile.name ? profile.name.charAt(0).toUpperCase() : <UserRound size={34} />}
                                </div>

                                <h1 className="mt-5 text-xl font-extrabold text-[#172033]">
                                    {profile.name || "Travelora User"}
                                </h1>

                                <p className="mt-1 text-sm text-slate-500">
                                    {profile.phone}
                                </p>

                                <div className="mt-6 w-full border-t border-slate-100 pt-5">
                                    <button type="button" onClick={() => setActiveSection("profile")} className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${activeSection === "profile" ? "bg-[#f5f9ff] text-[#1769e0]" : "text-[#172033] hover:bg-[#f5f9ff] hover:text-[#1769e0]"}`}>
                                        Personal Information
                                    </button>

                                    <button type="button" onClick={() => setActiveSection("password")} className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${activeSection === "password" ? "bg-[#f5f9ff] text-[#1769e0]" : "text-[#172033] hover:bg-[#f5f9ff] hover:text-[#1769e0]"}`}>
                                        Change Password
                                    </button>

                                    <button type="button" onClick={handleLogout} className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50">
                                        <LogOut size={17} />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </aside>

                        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            {activeSection === "profile" ? (
                                <>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1769e0]">
                                            Account
                                        </p>

                                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                                            My Profile
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            Manage your personal information and travel details.
                                        </p>
                                    </div>

                                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-xs font-bold text-slate-600">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                                                <input
                                                    type="text"
                                                    value={profile.name}
                                                    onChange={(e) => updateField("name", e.target.value)}
                                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-xs font-bold text-slate-600">
                                                Mobile Number
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                                                <input
                                                    type="tel"
                                                    value={profile.phone}
                                                    disabled
                                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-100 pl-11 pr-4 text-sm text-slate-500 outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-xs font-bold text-slate-600">
                                                Email
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                                                <input
                                                    type="email"
                                                    value={profile.email}
                                                    onChange={(e) => updateField("email", e.target.value)}
                                                    placeholder="Enter your email"
                                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-xs font-bold text-slate-600">
                                                Date of Birth
                                            </label>
                                            <div className="relative">
                                                <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                                                <input
                                                    type="date"
                                                    value={profile.dateOfBirth}
                                                    onChange={(e) => updateField("dateOfBirth", e.target.value)}
                                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-xs font-bold text-slate-600">
                                                Gender
                                            </label>
                                            <select
                                                value={profile.gender}
                                                onChange={(e) => updateField("gender", e.target.value)}
                                                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                            >
                                                <option value="">Select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                                <option value="prefer-not">Prefer not to say</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-xs font-bold text-slate-600">
                                                Emergency Contact
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                                                <input
                                                    type="tel"
                                                    value={profile.emergContact}
                                                    onChange={(e) => updateField("emergContact", e.target.value)}
                                                    placeholder="Emergency contact number"
                                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label className="mb-2 block text-xs font-bold text-slate-600">
                                                Address
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                                                <input
                                                    type="text"
                                                    value={profile.address}
                                                    onChange={(e) => updateField("address", e.target.value)}
                                                    placeholder="Enter your address"
                                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {message && (
                                        <p className={`mt-5 text-sm font-semibold ${message.includes("successfully") ? "text-emerald-600" : "text-red-600"}`}>
                                            {message}
                                        </p>
                                    )}
                                
                                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
                                        <button type="button" onClick={() => router.push("/user/dashboard")} className="h-12 rounded-xl border border-slate-200 px-6 text-sm font-bold text-slate-600 transition hover:bg-slate-50">
                                            Cancel
                                        </button>
                                
                                        <button type="button" onClick={handleSave} disabled={saving} className="h-12 rounded-xl bg-[#1769e0] px-7 text-sm font-bold text-white shadow-lg transition hover:bg-[#125bc4] disabled:cursor-not-allowed disabled:opacity-60">
                                            {saving ? "Saving..." : "Save Changes"}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1769e0]">
                                            Security
                                        </p>

                                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                                            Change Password
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            Update your password to keep your Travelora account secure.
                                        </p>
                                    </div>

                                    <div className="mt-8 max-w-[620px] space-y-5">
                                        <div>
                                            <label className="mb-2 block text-xs font-bold text-slate-600">
                                                Current Password
                                            </label>
                                            <input
                                                type="password"
                                                value={currentPassword}
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                placeholder="Enter current password"
                                                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-xs font-bold text-slate-600">
                                                New Password
                                            </label>
                                            <input
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                placeholder="Enter new password"
                                                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-xs font-bold text-slate-600">
                                                Confirm New Password
                                            </label>
                                            <input
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="Confirm new password"
                                                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-7 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={handleChangePassword}
                                            disabled={passwordSaving}
                                            className="h-12 rounded-xl bg-[#1769e0] px-7 text-sm font-bold text-white shadow-lg transition hover:bg-[#125bc4]"
                                        >
                                            {passwordSaving ? "Updating..." : "Update Password"}
                                        </button>
                                    </div>
                                    {passwordMessage && (
                                        <p className={`mt-5 text-sm font-semibold ${passwordMessage.includes("successfully") ? "text-emerald-600" : "text-red-600"}`}>
                                            {passwordMessage}
                                        </p>
                                    )}
                                </>
                            )}
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}