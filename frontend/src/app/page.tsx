"use client";

import { useMemo, useState } from "react";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";

const services = [
  { id: "hotel", icon: "🏨", title: "Hotel Booking", subtitle: "Find a place to stay" },
  { id: "car-book", icon: "🚗", title: "Car Booking", subtitle: "Explore tawang" },
  { id: "bike-rent", icon: "🏍️", title: "Bike Rent", subtitle: "Rent a bike" },
  { id: "bike-ride", icon: "🛵", title: "Ride", subtitle: "Quick city rides" },
];

const destinations = [
  { name: "Tawang", state: "Arunachal Pradesh", rating: "4.8", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80" },
  { name: "Dirang", state: "Arunachal Pradesh", rating: "4.6", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80" },
  { name: "Bomdila", state: "Arunachal Pradesh", rating: "4.5", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
  { name: "Ziro Valley", state: "Arunachal Pradesh", rating: "4.7", image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=80" },
];

const picks = [
  { type: "Hotel", name: "Mountain View Resort", meta: "Tawang", price: "₹2,499", suffix: "/ night", rating: "4.7", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80" },
  { type: "Bike Rent", name: "Royal Enfield Classic 350", meta: "Tawang", price: "₹900", suffix: "/ day", rating: "4.6", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80" },
  { type: "Car Rent", name: "Toyota Innova Crysta", meta: "Tawang", price: "₹2,800", suffix: "/ day", rating: "4.7", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80" },
  { type: "Bike Ride", name: "Bike Ride", meta: "Nearby", price: "₹25", suffix: "/ km", rating: "4.8", image: "https://images.unsplash.com/photo-1558980394-0c7b5f6c7c2d?auto=format&fit=crop&w=900&q=80" },
  { type: "Car Ride", name: "Comfort Car Ride", meta: "Nearby", price: "₹12", suffix: "/ km", rating: "4.8", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80" },
];

export default function Home() {
  const [service, setService] = useState("hotel");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");

  const serviceLabel = useMemo(
    () => services.find((item) => item.id === service)?.title ?? "Hotel Booking",
    [service],
  );

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const place = destination.trim() || "your destination";
    setMessage(`${serviceLabel} search ready for ${place}.`);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#172033]">
      <NavBar />

      <section className="relative overflow-hidden bg-[#0e4d9f]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero_image.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031f46]/55 via-[#073f80]/50 to-[#073f80]/10" />
        <div className="relative mx-auto max-w-[1240px] px-5 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="max-w-[620px]">
            <p className="mb-3 whitespace-nowrap text-xs font-bold uppercase tracking-[0.12em] text-white/75 sm:text-sm sm:tracking-[0.18em]">One platform for every journey</p>
            <h1 className="mt-5 max-w-[650px] text-6xl font-black leading-[0.95] tracking-[-0.04em] text-white lg:text-[72px]">
              Explore more.
              <br />
              <span className="text-[#ffc928]">Travel better.</span>
            </h1>
            <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/90">
              Hotels, rentals and everyday rides — all in one simple travel experience.
            </p>
          </div>

          <div className="mt-7 flex w-full justify-start">
            <button className="flex h-[72px] w-[220px] lg:h-[100px] lg:w-[284px] flex-col items-center justify-center rounded-2xl border border-white/25 bg-white/[0.10] shadow-[0_15px_40px_rgba(0,0,0,0.18)] backdrop-blur-md hover hover:bg-white/20 hover:text-black">
              <span className="text-[20px] lg:text-[25px] font-bold tracking-wide text-white">
                Explore Tawang
              </span>
            </button>
          </div> 
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-[1180px] px-5 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <button
              key={item.id}
              onClick={() => setService(item.id)}
              className={`flex min-h-[112px] items-center gap-4 border-b border-slate-100 px-5 py-4 text-left transition lg:border-b-0 lg:border-r last:border-r-0 ${service === item.id ? "bg-blue-50" : "hover:bg-slate-50"}`}
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white text-3xl shadow-sm">{item.icon}</span>
              <span>
                <span className="block text-sm font-extrabold">{item.title}</span>
                <span className="mt-1 block text-xs text-slate-500">{item.subtitle}</span>
              </span>
              <span className="ml-auto text-lg text-slate-400">→</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-14 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-[#1769e0]">Discover somewhere new</p>
            <h2 className="mt-1 text-3xl font-black tracking-tight">Popular destinations</h2>
          </div>
          <a href="#explore" className="hidden text-sm font-extrabold text-[#1769e0] sm:block">View all →</a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((place) => (
            <a key={place.name} href="#explore" className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img src={place.image} alt={place.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-extrabold text-[#1769e0]">Popular</span>
                <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-lg">♡</span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-extrabold">{place.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{place.state}</p>
                </div>
                <span className="text-sm font-bold">★ {place.rating}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 pb-16 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-[#1769e0]">Handpicked for you</p>
            <h2 className="mt-1 text-3xl font-black tracking-tight">Top picks for your trip</h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white">←</button>
            <button className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white">→</button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {picks.map((item) => (
            <article key={item.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-40">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2 py-1 text-[10px] font-black text-[#1769e0]">{item.type}</span>
                <button aria-label={`Save ${item.name}`} className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/90">♡</button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-extrabold leading-5">{item.name}</h3>
                  <span className="shrink-0 text-xs font-bold">★ {item.rating}</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">⌖ {item.meta}</p>
                <p className="mt-4 text-sm font-black">{item.price}<span className="font-medium text-slate-500">{item.suffix}</span></p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            ["🔒", "Secure Payments", "Safe and trusted checkout"],
            ["◷", "Free Cancellation", "Flexible cancellation options"],
            ["◇", "No Hidden Charges", "What you see is what you pay"],
            ["↻", "Quick Refunds", "Simple refund process"],
          ].map(([icon, title, text]) => (
            <div key={title} className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-slate-100 text-lg">{icon}</span>
              <div>
                <p className="text-sm font-extrabold">{title}</p>
                <p className="mt-1 text-xs text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4">
          {[
            ["⌂", "Home", "#"],
            ["▣", "Bookings", "#bookings"],
            ["⌁", "Trips", "#trips"],
            ["♙", "Profile", "#profile"],
          ].map(([icon, label, href], index) => (
            <a key={label} href={href} className={`flex flex-col items-center gap-1 py-2 text-[11px] font-bold ${index === 0 ? "text-[#1769e0]" : "text-slate-500"}`}>
              <span className="text-lg">{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <Footer />
    </main>
  );
}
