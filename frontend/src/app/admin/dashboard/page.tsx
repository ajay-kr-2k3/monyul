"use client";

import { useState } from "react";

export default function AdminPage() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showAddHotel, setShowAddHotel] = useState(false);

  const menuItems = ["Dashboard", "Users", "Hotels", "Car Rentals", "Bike Rentals", "Bookings", "Rides", "Drivers", "Reviews", "Payments"];

  const stats = [
    {
      title: "Total Users",
      value: "12,480",
      change: "+12.5%",
    },
    {
      title: "Bookings",
      value: "3,842",
      change: "+8.2%",
    },
    {
      title: "Revenue",
      value: "₹18.6L",
      change: "+14.8%",
    },
    {
      title: "Active Partners",
      value: "286",
      change: "+6.4%",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080706] text-[#F5F0E6]">

        <div className="flex min-h-screen">

          {/* ================= SIDEBAR ================= */}

          <aside className="hidden w-[250px] shrink-0 border-r border-[#D6B56C]/15 bg-[#0C0B09] lg:flex lg:flex-col">

            {/* Logo */}
            <div className="flex h-20 items-center gap-3 border-b border-[#D6B56C]/10 px-6">

              <div className="grid size-10 place-items-center rounded-xl border border-[#D6B56C]/40 bg-[#D6B56C]/[0.08] text-lg text-[#E8CC8B]">
                ✦
              </div>

              <div>
                <p className="text-sm font-bold tracking-wide text-[#F5F0E6]">
                  MONYUL
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A8A093]">
                  Admin
                </p>
              </div>

            </div>


            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-3 py-6">

              {menuItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveMenu(item)}
                  className={`group flex h-11 w-full items-center rounded-xl px-4 text-left text-sm font-medium transition-all duration-200 ${ activeMenu === item ? "border border-[#D6B56C]/25 bg-[#D6B56C]/[0.08] text-[#E8CC8B]" : "text-[#A8A093] hover:bg-white/[0.035] hover:text-[#F5F0E6]" }`}
                >
                  <span
                    className={`mr-3 size-1.5 rounded-full ${ activeMenu === item ? "bg-[#D6B56C]" : "bg-[#5D584F] group-hover:bg-[#D6B56C]/60" }`}
                  />

                  {item}
                </button>
              ))}

            </nav>


            {/* Bottom */}
            <div className="border-t border-[#D6B56C]/10 p-4">

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/[0.035]"
              >

                <div className="grid size-9 place-items-center rounded-full border border-[#D6B56C]/25 bg-[#D6B56C]/[0.06] text-xs font-bold text-[#E8CC8B]">
                  A
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#F5F0E6]">
                    Administrator
                  </p>

                  <p className="text-[10px] text-[#777067]">
                    admin
                  </p>
                </div>

              </button>

            </div>

          </aside>


          {/* ================= MAIN ================= */}

          <div className="min-w-0 flex-1">

            {/* Header */}
            <header className="flex h-20 items-center justify-between border-b border-[#D6B56C]/10 bg-[#0A0908]/80 px-5 backdrop-blur-xl sm:px-8">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6B56C]/70">
                  Administration
                </p>

                <h1 className="mt-1 text-xl font-bold text-[#F5F0E6]">
                  {activeMenu}
                </h1>
              </div>


              <div className="flex items-center gap-3">

                {/* Notification */}
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-xl border border-[#D6B56C]/15 bg-white/[0.025] text-[#A8A093] transition hover:border-[#D6B56C]/35 hover:text-[#E8CC8B]"
                >
                  ◇
                </button>

                {/* Profile */}
                <div className="hidden items-center gap-3 border-l border-[#D6B56C]/10 pl-4 sm:flex">

                  <div className="text-right">
                    <p className="text-xs font-semibold text-[#F5F0E6]">
                      Administrator
                    </p>

                    <p className="text-[10px] text-[#777067]">
                      Super Admin
                    </p>
                  </div>

                  <div className="grid size-9 place-items-center rounded-full border border-[#D6B56C]/30 bg-[#D6B56C]/[0.07] text-xs font-bold text-[#E8CC8B]">
                    A
                  </div>

                </div>

              </div>

            </header>


            {/* Content */}
            <section className="p-5 sm:p-8">

              {/* Welcome */}
              <div className="mb-8">

                <h2 className="text-2xl font-bold text-[#F5F0E6]">
                  Good morning, Administrator
                </h2>

                <p className="mt-2 text-sm text-[#A8A093]">
                  Here is what's happening across your platform today.
                </p>

              </div>


              {/* ================= STATS ================= */}

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {stats.map((stat) => (
                  <div
                    key={stat.title}
                    className="rounded-2xl border border-[#D6B56C]/15 bg-[#11100D] p-5 shadow-[0_15px_45px_rgba(0,0,0,0.25)] transition hover:border-[#D6B56C]/30"
                  >

                    <p className="text-xs font-medium text-[#8B8479]">
                      {stat.title}
                    </p>

                    <div className="mt-3 flex items-end justify-between">

                      <p className="text-2xl font-bold tracking-tight text-[#F5F0E6]">
                        {stat.value}
                      </p>

                      <span className="text-xs font-semibold text-[#D6B56C]">
                        {stat.change}
                      </span>

                    </div>

                  </div>
                ))}

              </div>


              {/* ================= LOWER SECTION ================= */}

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">


                {/* Recent Bookings */}
                <div className="overflow-hidden rounded-2xl border border-[#D6B56C]/15 bg-[#11100D]">

                  <div className="flex items-center justify-between border-b border-[#D6B56C]/10 px-5 py-4">

                    <div>
                      <h3 className="text-sm font-bold text-[#F5F0E6]">
                        Recent Bookings
                      </h3>

                      <p className="mt-1 text-xs text-[#777067]">
                        Latest platform activity
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-xs font-semibold text-[#D6B56C] hover:text-[#E8CC8B]"
                    >
                      View all →
                    </button>

                  </div>


                  <div className="divide-y divide-[#D6B56C]/10">

                    {[
                      ["Hotel", "Tawang Mountain Retreat", "₹8,400"],
                      ["Car Rent", "Toyota Innova", "₹4,800"],
                      ["Bike Rent", "Royal Enfield", "₹1,200"],
                      ["Ride", "Tawang → Old Market", "₹280"],
                    ].map(([type, name, amount]) => (

                      <div
                        key={name}
                        className="flex items-center justify-between px-5 py-4"
                      >

                        <div className="flex items-center gap-3">

                          <div className="grid size-9 place-items-center rounded-xl border border-[#D6B56C]/15 bg-[#D6B56C]/[0.05] text-xs text-[#D6B56C]">
                            {type.charAt(0)}
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-[#F5F0E6]">
                              {name}
                            </p>

                            <p className="mt-1 text-[10px] text-[#777067]">
                              {type}
                            </p>
                          </div>

                        </div>

                        <p className="text-xs font-semibold text-[#D6B56C]">
                          {amount}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>


                {/* Platform Overview */}
                <div className="rounded-2xl border border-[#D6B56C]/15 bg-[#11100D] p-5">

                  <h3 className="text-sm font-bold text-[#F5F0E6]">
                    Platform Overview
                  </h3>

                  <p className="mt-1 text-xs text-[#777067]">
                    Current marketplace status
                  </p>


                  <div className="mt-6 space-y-5">

                    {[
                      ["Hotels", "124", "Active"],
                      ["Car Rentals", "86", "Active"],
                      ["Bike Rentals", "156", "Active"],
                      ["Drivers", "412", "Online"],
                    ].map(([name, count, status]) => (

                      <div key={name}>

                        <div className="flex items-center justify-between">

                          <span className="text-xs font-medium text-[#A8A093]">
                            {name}
                          </span>

                          <span className="text-xs font-bold text-[#F5F0E6]">
                            {count}
                          </span>

                        </div>

                        <div className="mt-2 flex items-center gap-2">

                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                            <div className="h-full w-[72%] rounded-full bg-[#D6B56C]/70" />
                          </div>

                          <span className="text-[10px] text-[#D6B56C]">
                            {status}
                          </span>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>


              {/* Quick Actions */}
              <div className="mt-6">

                <h3 className="mb-4 text-sm font-bold text-[#F5F0E6]">
                  Quick Actions
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">

                  {[
                    "Add Hotel",
                    "Add Car",
                    "Add Bike",
                    "View Reports",
                  ].map((action) => (

                    <button key={action} type="button" onClick={() => action === "Add Hotel" && setShowAddHotel(true)} className="rounded-2xl border border-[#D6B56C]/15 bg-[#11100D] px-5 py-4 text-left text-xs font-semibold text-[#A8A093] transition hover:border-[#D6B56C]/35 hover:bg-[#D6B56C]/[0.05] hover:text-[#E8CC8B]">
                      {action}
                      <span className="float-right text-[#D6B56C]">
                        →
                      </span>
                    </button>

                  ))}

                </div>

              </div>

            </section>

          </div>

        </div>

        {showAddHotel && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setShowAddHotel(false)}>
                <div className="w-full max-w-2xl rounded-[28px] border border-[#D6B56C]/25 bg-[#11100D] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.65)]" onClick={(e) => e.stopPropagation()}>
                    <div className="mb-6 flex items-start justify-between gap-4">
                        <div><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6B56C]/70">Hotel Management</p><h2 className="mt-1 text-2xl font-bold text-[#F5F0E6]">Add New Hotel</h2><p className="mt-1 text-sm text-[#777067]">Create a hotel listing from the dashboard.</p></div>
                        <button type="button" onClick={() => setShowAddHotel(false)} className="grid size-9 place-items-center rounded-xl border border-[#D6B56C]/15 text-[#A8A093] transition hover:border-[#D6B56C]/35 hover:text-[#E8CC8B]">×</button>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); setShowAddHotel(false); }} className="grid gap-4 sm:grid-cols-2">
                        <label className="grid gap-2"><span className="text-xs font-semibold text-[#A8A093]">Hotel Name</span><input required name="hotelName" placeholder="e.g. Tawang Mountain Retreat" className="h-12 rounded-xl border border-[#D6B56C]/15 bg-[#0C0B09] px-4 text-sm text-[#F5F0E6] outline-none placeholder:text-[#5D584F] focus:border-[#D6B56C]/50" /></label>
                        <label className="grid gap-2"><span className="text-xs font-semibold text-[#A8A093]">Hotel Type</span><select name="hotelType" className="h-12 rounded-xl border border-[#D6B56C]/15 bg-[#0C0B09] px-4 text-sm text-[#F5F0E6] outline-none focus:border-[#D6B56C]/50"><option>Hotel</option><option>Resort</option><option>Homestay</option><option>Guest House</option></select></label>
                        <label className="grid gap-2"><span className="text-xs font-semibold text-[#A8A093]">City / Destination</span><input required name="city" placeholder="Tawang" className="h-12 rounded-xl border border-[#D6B56C]/15 bg-[#0C0B09] px-4 text-sm text-[#F5F0E6] outline-none placeholder:text-[#5D584F] focus:border-[#D6B56C]/50" /></label>
                        <label className="grid gap-2"><span className="text-xs font-semibold text-[#A8A093]">Address</span><input required name="address" placeholder="Full property address" className="h-12 rounded-xl border border-[#D6B56C]/15 bg-[#0C0B09] px-4 text-sm text-[#F5F0E6] outline-none placeholder:text-[#5D584F] focus:border-[#D6B56C]/50" /></label>
                        <label className="grid gap-2"><span className="text-xs font-semibold text-[#A8A093]">Price / Night</span><input required min="0" type="number" name="price" placeholder="₹ 2500" className="h-12 rounded-xl border border-[#D6B56C]/15 bg-[#0C0B09] px-4 text-sm text-[#F5F0E6] outline-none placeholder:text-[#5D584F] focus:border-[#D6B56C]/50" /></label>
                        <label className="grid gap-2"><span className="text-xs font-semibold text-[#A8A093]">Total Rooms</span><input required min="1" type="number" name="rooms" placeholder="20" className="h-12 rounded-xl border border-[#D6B56C]/15 bg-[#0C0B09] px-4 text-sm text-[#F5F0E6] outline-none placeholder:text-[#5D584F] focus:border-[#D6B56C]/50" /></label>
                        <label className="grid gap-2 sm:col-span-2"><span className="text-xs font-semibold text-[#A8A093]">Description</span><textarea name="description" rows={3} placeholder="Short description of the property..." className="rounded-xl border border-[#D6B56C]/15 bg-[#0C0B09] px-4 py-3 text-sm text-[#F5F0E6] outline-none placeholder:text-[#5D584F] focus:border-[#D6B56C]/50" /></label>
                        <div className="flex justify-end gap-3 sm:col-span-2"><button type="button" onClick={() => setShowAddHotel(false)} className="h-12 rounded-xl border border-[#D6B56C]/15 px-5 text-sm font-semibold text-[#A8A093] transition hover:border-[#D6B56C]/35 hover:text-[#F5F0E6]">Cancel</button><button type="submit" className="h-12 rounded-xl bg-[#D6B56C] px-6 text-sm font-bold text-[#080706] transition hover:bg-[#E8CC8B]">Save Hotel</button></div>
                    </form>
                </div>
            </div>
        )}

    </main>
  );
}