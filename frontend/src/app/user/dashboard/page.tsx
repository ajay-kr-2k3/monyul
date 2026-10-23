"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";

const services = [
    {
        id: "hotel",
        icon: "🏨",
        title: "Hotel Booking",
        subtitle: "Find a place to stay",
        route: "/user/hotels",
    },
    {
        id: "car",
        icon: "🚗",
        title: "Car Booking",
        subtitle: "Book a car for your journey",
        route: "/user/cars",
    },
    {
        id: "bike",
        icon: "🏍️",
        title: "Bike Rent",
        subtitle: "Rent a bike",
        route: "/user/bike-rent",
    },
    {
        id: "ride",
        icon: "🛵",
        title: "Bike/Car Ride",
        subtitle: "Quick city rides",
        route: "/user/rides",
    },
];

const trips = [
    {
        title: "No upcoming trips",
        subtitle: "Your upcoming bookings will appear here.",
    },
];

export default function UserDashboardPage() {
    const router = useRouter();
    const [showSetup, setShowSetup] = useState(false);
    const [setupSkipped, setSetupSkipped] = useState(false);
    const [profile, setProfile] = useState({
        name: "",
        phone: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        address: "",
        emergContact: "",
    });
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const loadProfile = async () => {
            const token = localStorage.getItem("access_token");
    
            if (!token) {
                router.push("/user/auth");
                return;
            }
    
            try {
                const response = await fetch("http://localhost:3001/auth/me", {
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
                console.error("Profile load failed:", error);
            }
        };
    
        loadProfile();
    
        const timer = setTimeout(() => {
            const skipped = sessionStorage.getItem("travelora_setup_skipped");
    
            if (!skipped) {
                setShowSetup(true);
            }
        }, 2500);
    
        return () => clearTimeout(timer);
    }, [router]);

    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();
    
            if (hour < 12) {
                setGreeting("Good morning");
            } else if (hour < 17) {
                setGreeting("Good afternoon");
            } else {
                setGreeting("Good evening");
            }
        };
    
        updateGreeting();
    
        const interval = setInterval(updateGreeting, 60000);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen bg-[#f7f9fc] text-[#172033]">
            {showSetup && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-[560px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:p-8">
                        
                        <button
                            type="button"
                            onClick={() => {
                                sessionStorage.setItem("travelora_setup_skipped", "true");
                                setShowSetup(false);
                                setSetupSkipped(true);
                            }}
                            className="absolute right-5 top-5 text-sm font-semibold text-slate-400 transition hover:text-slate-700"
                        >
                            Skip for now
                        </button>
                        
                        <div className="pr-12">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1769e0]">
                                Account setup
                            </p>
                        
                            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#172033] sm:text-3xl">
                                Complete your profile
                            </h2>
                        
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Add a few details to make your Travelora experience more personal.
                            </p>
                        </div>
                        
                        <div className="mt-7 flex items-center gap-4">
                            <div className="grid size-16 shrink-0 place-items-center rounded-full bg-[#eef5ff] text-2xl">
                                👤
                            </div>
                        
                            <button type="button" className="text-left">
                                <p className="text-sm font-bold text-[#172033]">Add profile photo</p>
                                <p className="mt-1 text-xs text-slate-500">Optional</p>
                            </button>
                        </div>
                        
                        <div className="mt-7 grid gap-4 sm:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-600">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={profile.name}
                                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                />
                            </div>
                        
                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-600">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    value={profile.phone}
                                    disabled
                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 text-sm text-slate-500 outline-none"
                                />
                            </div>
                        
                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={profile.email}
                                    onChange={(e) => setProfile({ ...profile, email:e.target.value })}
                                    placeholder="Enter your email"
                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-600">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    value={profile.dateOfBirth}
                                    onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })}
                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-600">
                                    Gender
                                </label>
                                <select
                                    value={profile.gender}
                                    onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                    <option value="prefer-not">Prefer not to say</option>
                                </select>
                            </div>
                        
                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-600">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    value={profile.address}
                                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                                    placeholder="Enter your address"
                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#1769e0] focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-600">
                                    Emergency Contact
                                </label>
                                <input
                                    type="tel"
                                    value={profile.emergContact}
                                    onChange={(e) => setProfile({ ...profile, emergContact: e.target.value })}
                                    placeholder="Emergency contact number"
                                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 text-sm text-slate-500 outline-none"
                                />
                            </div>
                        
                        </div>
                        
                        <button
                            type="button"
                            onClick={async () => {
                                const token = localStorage.getItem("access_token");
                            
                                if (!token) {
                                    router.push("/user/auth");
                                    return;
                                }
                            
                                try {
                                    const response = await fetch("http://localhost:3001/auth/profile", {
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
                                
                                    sessionStorage.setItem("travelora_setup_skipped", "true");
                                    setShowSetup(false);
                                } catch (error) {
                                    console.error("Profile update failed:", error);
                                }
                            }}
                            className="mt-7 h-12 w-full rounded-xl bg-[#1769e0] text-sm font-bold text-white shadow-lg transition hover:bg-[#125bc4]"
                        >
                            Save & Continue
                        </button>
                        
                        <p className="mt-3 text-center text-xs text-slate-400">
                            You can update these details anytime from your profile.
                        </p>
                    </div>
                </div>
            )}
            <NavBar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0e4d9f]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero_image.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#031f46]/60 via-[#073f80]/50 to-[#073f80]/10" />

                <div className="relative mx-auto max-w-[1240px] px-5 pb-20 pt-32 lg:px-8 lg:pb-28">
                    <div className="max-w-[700px]">
                        <p className="mb-4 text-base font-semibold uppercase tracking-wide text-white/80 sm:text-lg">
                            {greeting}, <span className="font-extrabold text-white">{profile.name} </span>
                        </p>

                        <h1 className="mt-5 max-w-[700px] text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-[72px]">
                            Explore more.
                            <br />
                            <span className="text-[#ffc928]">Travel better.</span>
                        </h1>

                        <p className="mt-6 max-w-[620px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                            Hotels, rentals and everyday rides — everything you need for your journey in one place.
                        </p>
                    </div>

                    <button type="button" onClick={() => router.push("/explore-tawang")} className="group mt-8 flex h-[68px] w-[220px] items-center justify-between rounded-2xl border border-white/25 bg-[#0b2d55]/70 px-6 text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ffd21f]/60 hover:bg-[#0b2d55]/90 sm:h-[74px] sm:w-[284px]">
                        <span className="text-lg font-bold tracking-wide sm:text-xl">Explore Tawang</span>
                        <span className="text-xl text-[#ffc928] transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>

                    <div className="mt-7 flex w-full max-w-[780px] items-center justify-between rounded-2xl border border-white/20 bg-[#0b315b]/75 px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-6">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">Planning Arunachal?</p>
                            <p className="mt-1 text-sm font-bold text-white sm:text-base">Get your Tourist eILP before travelling</p>
                        </div>

                        <a href="https://eilp.arunachal.gov.in/" target="_blank" rel="noreferrer" className="ml-4 shrink-0 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#1769e0] transition hover:bg-[#f0f5ff] sm:px-5">
                            Apply for ILP ↗
                        </a>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="relative z-10 mx-auto -mt-8 max-w-[1180px] px-5 lg:px-8">
                <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <button type="button" key={service.id} onClick={() => router.push(service.route)} className="group flex min-h-[120px] items-center gap-4 border-b border-slate-100 px-5 py-5 text-left transition-all duration-300 hover:bg-[#f5f9ff] sm:border-r lg:border-b-0">
                            <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-slate-100 bg-white text-2xl shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                                {service.icon}
                            </div>

                            <div className="min-w-0 flex-1">
                                <h2 className="text-base font-extrabold text-[#172033]">{service.title}</h2>
                                <p className="mt-1 text-xs leading-5 text-slate-500">{service.subtitle}</p>
                            </div>

                            <span className="text-lg text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#1769e0]">→</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Dashboard content */}
            <section className="mx-auto max-w-[1180px] px-5 py-12 lg:px-8 lg:py-16">
                <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
                    {/* Upcoming */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1769e0]">Your travel</p>
                                <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Upcoming trips</h2>
                            </div>

                            <button type="button" onClick={() => router.push("/user/trips")} className="text-sm font-bold text-[#1769e0] hover:text-[#125bc4]">
                                View all
                            </button>
                        </div>

                        <div className="mt-7 rounded-2xl border border-dashed border-slate-200 bg-[#f8fafc] px-6 py-10 text-center">
                            <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-white text-2xl shadow-sm">
                                ✈️
                            </div>
                            <h3 className="mt-4 text-base font-bold text-[#172033]">{trips[0].title}</h3>
                            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">{trips[0].subtitle}</p>

                            <button type="button" onClick={() => router.push("/")} className="mt-5 rounded-xl bg-[#1769e0] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#125bc4]">
                                Start exploring
                            </button>
                        </div>
                    </div>

                    {/* Quick actions */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1769e0]">Quick access</p>
                        <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Your account</h2>

                        <div className="mt-6 space-y-3">
                            <button type="button" onClick={() => router.push("/user/profile")} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-left transition hover:border-[#1769e0]/30 hover:bg-[#f5f9ff]">
                                <span>
                                    <span className="block text-sm font-bold">Profile</span>
                                    <span className="mt-1 block text-xs text-slate-500">Manage your account</span>
                                </span>
                                <span className="text-slate-400">→</span>
                            </button>

                            <button type="button" onClick={() => router.push("/user/trips")} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-left transition hover:border-[#1769e0]/30 hover:bg-[#f5f9ff]">
                                <span>
                                    <span className="block text-sm font-bold">My trips</span>
                                    <span className="mt-1 block text-xs text-slate-500">Bookings and ride history</span>
                                </span>
                                <span className="text-slate-400">→</span>
                            </button>

                            <button type="button" onClick={() => router.push("/user/trips")} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-left transition hover:border-[#1769e0]/30 hover:bg-[#f5f9ff]">
                                <span>
                                    <span className="block text-sm font-bold">Wishlist</span>
                                    <span className="mt-1 block text-xs text-slate-500">Saved stays and vehicles</span>
                                </span>
                                <span className="text-slate-400">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}