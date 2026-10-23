"use client";

import { useEffect, useState } from "react";
import { Bell, Heart, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navLinkEffect = `group relative rounded-xl px-4 py-2.5 text-[14px] font-semibold transition-colors after:absolute after:bottom-1 after:left-4 after:h-[1px] after:w-[calc(100%-2rem)] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 ${scrolled ? "text-[#1769e0] hover:text-[#125bc4] after:bg-[#1769e0]" : "text-white/90 hover:text-white after:bg-white"}`;
  const navButton = `transition-colors ${scrolled ? "border-white/25 bg-[#1769e0]/10 text-[#000000] hover:bg-[#1769e0]/20" : "border-white/25 bg-white/10 text-white hover:bg-white/20"}`;

  useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkAuth = () => {
        setIsLoggedIn(!!localStorage.getItem("access_token"));
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);

    return () => {
        window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return (
    <header className="pointer-events-none absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1440px] px-6 pt-10 lg:px-10">
        <div className="flex shrink-0 items-center gap-3">
          <a href="/admin/verification" className="pointer-events-auto block"aria-label="Open access">
              <span className="grid size-12 place-items-center rounded-2xl border border-white/30 bg-[#1769e0] text-xl text-white shadow-lg">✦</span>
          </a>
          <span className="text-[23px] font-extrabold tracking-tight text-[#1769e0]">Travelora</span>
        </div>
        <div className="pointer-events-auto fixed top-8 right-6 z-50 flex items-center gap-2 rounded-2xl border border-white/25 bg-white/[0.08] px-3 py-2 shadow-lg shadow-black/10 backdrop-blur-md lg:right-10">
          <nav className="hidden items-center gap-1 lg:flex">
            {["Home", "History", "Offers", "Contact"].map((item, index) => (
              <a
                key={item}
                href={item === "Home" ? (isLoggedIn ? "/user/dashboard" : "/") : item === "History" ? "/history" : item === "Offers" ? "/offers" : "/contact"}
                className={navLinkEffect}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="mx-2 hidden h-7 w-px bg-white/50 lg:block" />

          <button aria-label="Wishlist" className={`grid size-10 place-items-center rounded-xl border text-lg ${navButton}`}><Heart size={20} strokeWidth={2} /></button>
          <button aria-label="Notifications" className={`grid size-10 place-items-center rounded-xl border text-lg ${navButton}`}><Bell size={20} strokeWidth={2} /></button>
          {isLoggedIn ? (
            <div className="relative hidden sm:block">
              <button
                  type="button"
                  onClick={() => setProfileMenuOpen((open) => !open)}
                  aria-label="Profile"
                  aria-expanded={profileMenuOpen}
                  className="flex size-10 items-center justify-center rounded-xl border border-white/25 bg-[#1769e0] text-white transition hover:bg-white hover:text-[#1769e0]"
              >
                  <UserRound size={20} strokeWidth={2} />
              </button>
            
              {profileMenuOpen && (
                  <div className="absolute right-0 top-12 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                      <button
                          type="button"
                          onClick={() => {
                              setProfileMenuOpen(false);
                              router.push("/user/profile");
                          }}
                          className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-[#f5f9ff] hover:text-[#1769e0]"
                      >
                          My Profile
                      </button>
                        
                      <button
                          type="button"
                          onClick={() => {
                              setProfileMenuOpen(false);
                              router.push("/user/trip-history");
                          }}
                          className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-[#f5f9ff] hover:text-[#1769e0]"
                      >
                          My Trips
                      </button>
                        
                      <div className="my-1 h-px bg-slate-100" />
                        
                      <button
                          type="button"
                          onClick={() => {
                              localStorage.removeItem("access_token");
                              setProfileMenuOpen(false);
                              setIsLoggedIn(false);
                              router.push("/");
                          }}
                          className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
                      >
                          Logout
                      </button>
                  </div>
              )}
            </div>
          ) : (
            <button type="button" onClick={() => router.push("/user/auth")} className="hidden h-10 rounded-xl bg-[#1769e0] px-4 text-sm font-bold text-white shadow-sm hover:bg-white hover:text-[#1769e0] sm:block">
              Login / Sign Up
            </button>
          )}
          
          <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="grid size-10 place-items-center rounded-xl border border-slate-200 lg:hidden" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}>☰</button>
        </div>
          
        {mobileMenuOpen && (
          <div className="pointer-events-auto fixed top-[88px] right-6 z-50 w-40 rounded-2xl border border-white/25 bg-[#0b1f3a]/[0.08] p-2 shadow-2xl backdrop-blur-xl lg:hidden">
            {["Home", "History", "Offers", "Contact"].map((item) => (
              <a key={item} href={item === "Home" ? (isLoggedIn ? "/user/dashboard" : "/") : item === "History" ? "/history" : item === "Offers" ? "/offers" : "/contact"} onClick={() => setMobileMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white">
                {item}
              </a>
            ))}
            <div className="my-1 h-px bg-white/10" />
            {isLoggedIn ? (
              <div className="mt-2 space-y-2">
                <button
                    type="button"
                    onClick={() => {
                        setMobileMenuOpen(false);
                        router.push("/user/profile");
                    }}
                    className="flex h-11 w-full items-center justify-center rounded-xl bg-[#1769e0] px-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#125bc4] active:scale-[0.98]"
                >
                    My Profile
                </button>
                  
                <button
                    type="button"
                    onClick={() => {
                        setMobileMenuOpen(false);
                        router.push("/user/trips");
                    }}
                    className="flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                >
                    My Trips
                </button>
                  
                <button
                    type="button"
                    onClick={() => {
                        localStorage.removeItem("access_token");
                        setMobileMenuOpen(false);
                        setIsLoggedIn(false);
                        router.push("/");
                    }}
                    className="flex h-11 w-full items-center justify-center rounded-xl border border-red-100 bg-red-50 px-4 text-sm font-bold text-red-600 transition hover:bg-red-100"
                >
                    Logout
                </button>
              </div>
            ) : (
              <button type="button" onClick={() => { setMobileMenuOpen(false); router.push("/user/auth"); }} className="mt-2 flex h-11 w-full items-center justify-center rounded-xl bg-[#1769e0] px-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#125bc4] active:scale-[0.98] sm:hidden">
                Login
              </button>
            )}
            
          </div>
        )}
      </div>
    </header>
  );
}
