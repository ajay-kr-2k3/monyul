"use client";

import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

const offers = [
    {
        title: "Stay More, Pay Less",
        subtitle: "Get up to 30% off on selected hotels",
        code: "STAY30",
        category: "Hotels",
        icon: "🏨",
        badge: "30% OFF",
        note: "Valid on selected stays",
    },
    {
        title: "Ride Into Savings",
        subtitle: "Flat ₹100 off on your first bike ride",
        code: "BIKE100",
        category: "Bike Ride",
        icon: "🏍️",
        badge: "₹100 OFF",
        note: "For new customers",
    },
    {
        title: "Drive Your Way",
        subtitle: "Save up to ₹500 on car rentals",
        code: "CAR500",
        category: "Car Rental",
        icon: "🚗",
        badge: "₹500 OFF",
        note: "On selected rental cars",
    },
    {
        title: "Two Wheels, One Deal",
        subtitle: "Enjoy up to 25% off on bike rentals",
        code: "BIKE25",
        category: "Bike Rental",
        icon: "🛵",
        badge: "25% OFF",
        note: "Limited period offer",
    },
    {
        title: "Weekend Escape",
        subtitle: "Extra savings on weekend getaways",
        code: "WEEKEND",
        category: "Hotels",
        icon: "🌄",
        badge: "20% OFF",
        note: "Friday to Sunday bookings",
    },
    {
        title: "Your First Journey",
        subtitle: "Get ₹150 off your first Travelora booking",
        code: "WELCOME150",
        category: "All Services",
        icon: "✈️",
        badge: "₹150 OFF",
        note: "New users only",
    },
];

export default function OffersPage() {
    return (
        <main className="min-h-screen bg-[#f7f9fc] text-[#172033]">
            <NavBar />

            <section className="relative overflow-hidden bg-[#0e4d9f] px-5 pb-16 pt-32 text-white sm:px-8 sm:pt-36 lg:px-10 lg:pb-20 lg:pt-40">
                <div className="absolute -right-24 -top-24 size-80 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-32 -left-20 size-96 rounded-full bg-[#1769e0]/40 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-[1440px]">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/65">Travelora Offers</p>
                    <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Travel more. Save more.</h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                        Discover exclusive deals on hotels, rentals and rides. Pick an offer and make your next journey even better.
                    </p>
                </div>
            </section>

            <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
                <div className="mx-auto max-w-[1440px]">
                    <div className="flex flex-wrap items-center gap-2">
                        {["All Offers", "Hotels", "Bike Rental", "Car Rental", "Bike Ride", "Car Ride"].map((item, index) => (
                            <button key={item} type="button" className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${index === 0 ? "border-[#1769e0] bg-[#1769e0] text-white" : "border-black/10 bg-white text-black/65 hover:border-[#1769e0]/40 hover:text-[#1769e0]"}`}>
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {offers.map((offer) => (
                            <article key={offer.code} className="group overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="relative bg-gradient-to-br from-[#eaf3ff] to-white p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="grid size-14 place-items-center rounded-2xl bg-white text-3xl shadow-sm">
                                            {offer.icon}
                                        </div>
                                        <span className="rounded-full bg-[#1769e0] px-3 py-1.5 text-xs font-extrabold text-white">
                                            {offer.badge}
                                        </span>
                                    </div>

                                    <p className="mt-7 text-xs font-bold uppercase tracking-wider text-[#1769e0]">{offer.category}</p>
                                    <h2 className="mt-2 text-xl font-extrabold tracking-tight">{offer.title}</h2>
                                    <p className="mt-2 text-sm leading-6 text-black/55">{offer.subtitle}</p>
                                </div>

                                <div className="border-t border-dashed border-black/10 p-5">
                                    <div className="flex items-center justify-between gap-4 rounded-xl border border-black/10 bg-[#f7f9fc] px-4 py-3">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-black/40">Coupon Code</p>
                                            <p className="mt-1 font-mono text-sm font-extrabold tracking-wider text-[#172033]">{offer.code}</p>
                                        </div>
                                        <button type="button" className="rounded-lg bg-[#1769e0] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#125bc4] active:scale-95">
                                            Copy
                                        </button>
                                    </div>

                                    <p className="mt-3 text-xs text-black/45">{offer.note}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 pb-16 sm:px-8 lg:px-10">
                <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-5 rounded-[28px] bg-[#07111f] p-7 text-white sm:p-10 lg:flex-row lg:items-center">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6da8ff]">More journeys, more rewards</p>
                        <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Ready for your next trip?</h2>
                        <p className="mt-2 text-sm text-white/50">Explore Travelora and find the right stay, rental or ride.</p>
                    </div>
                    <a href="/" className="rounded-xl bg-[#1769e0] px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#1769e0]">
                        Explore Travelora
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}