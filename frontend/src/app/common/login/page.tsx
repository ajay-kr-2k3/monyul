"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const router = useRouter();

    const [role, setRole] = useState("Admin");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const roles = ["Admin", "Hotel", "Car Rent", "Bike Rent"];

    const handleLogin = () => {
        if (role !== "Admin") {
          setError("This login is currently available for Admin only.");
          return;
        }
      
        if (username === "Admin" && password === "Monyul2026") {
          setError("");
      
          router.push("/admin/dashboard");
          return;
        }
      
        setError("Invalid username or password.");
    };

    return (
        <main className="min-h-screen bg-[#080706] px-6 py-10"> 
            <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center"> 
                {/* Main Outer Container */}
                <div className="relative flex min-h-[580px] w-full max-w-[1100px] items-center overflow-hidden rounded-[48px] border border-[#D6B56C]/25 bg-[#0F0E0C] shadow-[0_30px_100px_rgba(0,0,0,0.65)]">  
                      {/* Ambient Gold Glow */}
                <div className="pointer-events-none absolute -left-32 top-1/2 size-72 -translate-y-1/2 rounded-full bg-[#D6B56C]/[0.045] blur-3xl"/> 
                <div className="pointer-events-none absolute -right-32 top-1/2 size-72 -translate-y-1/2 rounded-full bg-[#D6B56C]/[0.035] blur-3xl"/> 

                {/* ================= LEFT SIDE ================= */}   
                <div className="relative flex w-1/2 items-center justify-center px-12"> 
                    <div className="w-full max-w-[300px]">  
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B56C]/70">Access Portal</p>    
                        <h1 className="text-3xl font-bold tracking-wide text-[#F5F0E6]">Welcome</h1>    
                        <p className="mt-2 text-sm leading-6 text-[#A8A093]">Select the portal you want to access.</p>  
            
                        {/* Role Selection */}
                        <div className="mt-8">  
                            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#A8A093]">Select Portal</label>   
                            <div className="relative">  
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="h-14 w-full appearance-none rounded-2xl border border-[#D6B56C]/30 bg-[#171510] px-5 pr-12 text-sm font-semibold text-[#F5F0E6] outline-none transition focus:border-[#D6B56C]/70 focus:shadow-[0_0_25px_rgba(214,181,108,0.08)]">
                                    {roles.map((item) => (
                                      <option
                                        key={item}
                                        value={item}
                                        className="bg-[#11100D] text-[#F5F0E6]"
                                      >
                                        {item}
                                      </option>
                                    ))}
                                </select>   
                                {/* Custom Arrow */}
                                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#D6B56C]">↓</span> 
                            </div>  
                        </div>  
                    </div>  
                </div>  
                {/* Vertical Divider */}
                <div className="absolute left-1/2 top-16 bottom-16 w-px bg-gradient-to-b from-transparent via-[#D6B56C]/20 to-transparent" />    

                    {/* ================= RIGHT LOGIN CARD ================= */}    
                    <div className="relative flex w-1/2 justify-center px-12">  
                        <div className="w-full max-w-[430px] rounded-[28px] border border-[#D6B56C]/20 bg-[#15130F]/90 p-9 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">  
                            {/* Login Heading */}
                            <div className="mb-8">  
                                <div className="mb-5 grid size-11 place-items-center rounded-xl border border-[#D6B56C]/35 bg-[#D6B56C]/[0.07] text-lg text-[#E8CC8B]">✦</div>  
                                <h2 className="text-2xl font-bold text-[#F5F0E6]">
                                    {role} Login
                                </h2>   
                                <p className="mt-2 text-sm text-[#A8A093]">
                                    Sign in to continue to your portal.
                                </p>    
                            </div>  
                            {/* Username */}
                            <div className="mb-5">  
                                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#A8A093]">
                                    Username
                                </label>    
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value); setError(""); }}
                                    placeholder="Enter username"
                                    className="h-14 w-full rounded-2xl border border-[#D6B56C]/20 bg-[#0D0C0A] px-5 text-sm text-[#F5F0E6] outline-none placeholder:text-[#6F695F] transition focus:border-[#D6B56C]/60 focus:bg-[#12100D]"
                                />
                            </div>  
                            {/* Password */}
                            <div className="mb-7">  
                                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#A8A093]">
                                    Password
                                </label>    
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                                    placeholder="Enter password"
                                    className="h-14 w-full rounded-2xl border border-[#D6B56C]/20 bg-[#0D0C0A] px-5 text-sm text-[#F5F0E6] outline-none placeholder:text-[#6F695F] transition focus:border-[#D6B56C]/60 focus:bg-[#12100D]"
                                />
                            </div>  
                            {/* Login Button */}
                            <button
                              type="button"
                              onClick={handleLogin}
                              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-[#E8CC8B]/50 bg-[#D6B56C] text-sm font-bold tracking-wide text-[#080706] shadow-[0_10px_30px_rgba(214,181,108,0.12)] transition-all duration-200 hover:bg-[#E8CC8B] hover:shadow-[0_12px_35px_rgba(214,181,108,0.22)] active:scale-[0.98]"
                            >Login</button> 
                        </div>  
                    </div>  
                </div>  
            </section>
        </main>
    );  
}   