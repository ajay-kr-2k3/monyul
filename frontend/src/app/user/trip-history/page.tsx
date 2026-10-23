"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, ChevronRight, MapPin, Plane, Ticket, XCircle } from "lucide-react";
import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";

type TripTab = "upcoming" | "completed" | "cancelled";

export default function MyTripsPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<TripTab>("upcoming");
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (!token) {
            router.replace("/user/auth");
            return;
        }

        setCheckingAuth(false);
    }, [router]);

    if (checkingAuth) {
        return <div className="min-h-screen bg-[#f7faff]" />;
    }

    const tabContent = {
        upcoming: {
            icon: CalendarDays,
            title: "No upcoming trips",
            description: "Your confirmed bookings and upcoming rides will appear here.",
        },
        completed: {
            icon: Plane,
            title: "No completed trips",
            description: "Your completed hotel stays, rentals and rides will appear here.",
        },
        cancelled: {
            icon: XCircle,
            title: "No cancelled trips",
            description: "Cancelled bookings and rides will appear here.",
        },
    };

    const current = tabContent[activeTab];
    const Icon = current.icon;

    return (
        <main className="min-h-screen bg-[#f7faff]">
            <NavBar />

            <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-32 lg:px-10">
                <div className="mb-10">
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">My Trips</h1>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">Manage your upcoming journeys, completed trips and cancelled bookings in one place.</p>
                </div>

                <div className="mb-8 flex w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
                    {[
                        { key: "upcoming" as TripTab, label: "Upcoming" },
                        { key: "completed" as TripTab, label: "Completed" },
                        { key: "cancelled" as TripTab, label: "Cancelled" },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            type="button"
                            onClick={() => setActiveTab(tab.key)}
                            className={`min-w-[120px] flex-1 rounded-xl px-5 py-3 text-sm font-bold transition ${activeTab === tab.key ? "bg-[#1769e0] text-white shadow-md shadow-blue-200" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
                    <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                        <div className="mb-6 grid size-20 place-items-center rounded-3xl bg-[#1769e0]/10 text-[#1769e0]">
                            <Icon size={34} strokeWidth={1.8} />
                        </div>

                        <h2 className="text-2xl font-black text-slate-900">{current.title}</h2>

                        <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">{current.description}</p>

                        <button
                            type="button"
                            onClick={() => router.push("/")}
                            className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-[#1769e0] px-6 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-[#125bc4]"
                        >
                            Explore Travelora
                            <ChevronRight size={17} />
                        </button>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <Ticket size={20} className="text-[#1769e0]" />
                        <h3 className="mt-4 text-sm font-bold text-slate-900">Bookings</h3>
                        <p className="mt-1 text-xs leading-5 text-slate-500">Hotel and vehicle rental bookings will be tracked here.</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <MapPin size={20} className="text-[#1769e0]" />
                        <h3 className="mt-4 text-sm font-bold text-slate-900">Rides</h3>
                        <p className="mt-1 text-xs leading-5 text-slate-500">Your bike and car ride history will appear here.</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <CalendarDays size={20} className="text-[#1769e0]" />
                        <h3 className="mt-4 text-sm font-bold text-slate-900">Travel history</h3>
                        <p className="mt-1 text-xs leading-5 text-slate-500">All your Travelora journeys in one timeline.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}