"use client";

import { useState } from "react";

export default function UserAuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <main className="relative h-screen overflow-hidden bg-[#08111f] text-white">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover"
        style={{ backgroundImage: "url('/collage_img.png')" }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-[#06101d]/65 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex h-screen items-center justify-center px-4 py-6 sm:px-6">
        <div className="relative h-[650px] w-full max-w-[1000px] overflow-hidden rounded-[30px] border border-white/20 bg-white/[0.10] shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

          {/* Logo */}
          <div className="relative z-20 flex flex-col items-center pt-10">
            <div className="grid size-14 place-items-center rounded-2xl border border-white/30 bg-[#1769e0] text-2xl shadow-lg">
              ✦
            </div>

            <h1 className="mt-4 text-2xl font-extrabold tracking-tight">
              Travelora
            </h1>

            <p className="mt-1 text-sm text-white/65">
              Your journey starts here
            </p>
          </div>

          {/* Login / Signup Switch */}
          <div className="absolute left-1/2 top-[195px] z-30 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-12 w-[150px] rounded-full border border-white/20 bg-black/40 p-1 shadow-xl backdrop-blur-md">
              <div
                className={`absolute top-1 h-10 w-[71px] rounded-full bg-[#1769e0] shadow-lg transition-transform duration-300 ${
                  mode === "signup" ? "translate-x-[73px]" : "translate-x-0"
                }`}
              />

              <button
                type="button"
                onClick={() => setMode("login")}
                className="relative z-10 w-1/2 rounded-full text-sm font-bold text-white"
              >
                L
              </button>

              <button
                type="button"
                onClick={() => setMode("signup")}
                className="relative z-10 w-1/2 rounded-full text-sm font-bold text-white"
              >
                S
              </button>
            </div>
          </div>

          {/* Heading */}
          <div className="absolute inset-x-0 bottom-0 top-[190px] grid grid-cols-2">
            <div
              className={`overflow-y-auto p-8 transition-opacity duration-300 ${
                mode === "login" ? "opacity-100" : "opacity-0"
              }`}
            >           
              <h2 className="text-2xl font-bold">Welcome back</h2>
            
              <p className="mt-2 text-sm leading-6 text-white/60">
                Login to continue your Travelora journey.
              </p>
            
              <form className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-white/75">
                    Mobile Number
                  </label>
            
                  <div className="flex gap-2">
                    <div className="flex h-13 items-center rounded-xl border border-white/15 bg-black/20 px-3 text-sm text-white/75">
                      +91
                    </div>
            
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="h-13 min-w-0 flex-1 rounded-xl border border-white/15 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#4d91ff] focus:bg-black/30"
                    />
                  </div>
                </div>
            
                <button
                  type="submit"
                  className="mt-2 flex h-13 w-full items-center justify-center rounded-xl bg-[#1769e0] text-sm font-bold text-white shadow-[0_10px_30px_rgba(23,105,224,0.25)] transition hover:bg-[#2879ed]"
                >
                  Continue
                </button>

                <p className="mt-3 text-center text-xs text-white/75">New to Travelora? Click <span className="font-bold text-[#6fa8ff]">'S'</span> above and create your Travelora account.</p>
              </form>
            </div>


            <div
              className={`overflow-y-auto p-8 transition-opacity duration-300 ${
                mode === "signup" ? "opacity-100" : "opacity-0"
              }`}
            >           
              <h2 className="text-2xl font-bold">Create your account</h2>
            
              <p className="mt-2 text-sm leading-6 text-white/60">
                Join Travelora and make every journey easier.
              </p>
            
              <form className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-white/75">
                    Full Name
                  </label>
            
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-13 w-full rounded-xl border border-white/15 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#4d91ff] focus:bg-black/30"
                  />
                </div>
            
                <div>
                  <label className="mb-2 block text-xs font-semibold text-white/75">
                    Mobile Number
                  </label>
            
                  <div className="flex gap-2">
                    <div className="flex h-13 items-center rounded-xl border border-white/15 bg-black/20 px-3 text-sm text-white/75">
                      +91
                    </div>
            
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="h-13 min-w-0 flex-1 rounded-xl border border-white/15 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#4d91ff] focus:bg-black/30"
                    />
                  </div>
                </div>
            
                <div>
                  <label className="mb-2 block text-xs font-semibold text-white/75">
                    Email <span className="text-white/35">(Optional)</span>
                  </label>
            
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-13 w-full rounded-xl border border-white/15 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#4d91ff] focus:bg-black/30"
                  />
                </div>
            
                <button
                  type="submit"
                  className="mt-2 flex h-13 w-full items-center justify-center rounded-xl bg-[#1769e0] text-sm font-bold text-white shadow-[0_10px_30px_rgba(23,105,224,0.25)] transition hover:bg-[#2879ed]"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}