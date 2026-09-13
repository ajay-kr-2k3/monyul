"use client";

import { useState } from "react";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

export default function ContactPage() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSent(true);
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f7f9fc] text-black">
            <NavBar />

            <div className="relative z-10 min-h-screen px-4 pb-24 pt-6 sm:px-6 sm:pb-24 sm:pt-8 lg:px-10 lg:pb-8">
                <div className="mx-auto max-w-[1100px]">

                    {/* Header */}
                    <div className="mb-8 text-left">

                        <h1 className="mt-20 text-3xl font-extrabold tracking-tight sm:text-4xl lg:mt-20">
                          Get in touch
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-black/60 sm:text-base text-left">
                          Have a question, need help with a booking, or want to know more about Travelora?
                          We&apos;re here to help.
                        </p>
                    </div>

                    {/* Main Card */}
                    <div className="grid overflow-hidden rounded-[24px] border border-black/10 bg-white/10 lg:grid-cols-[1.15fr_0.85fr] lg:rounded-[30px]">

                        {/* Contact Form */}
                        <div className="p-5 sm:p-8 lg:p-10">
                            <h2 className="text-2xl font-bold">
                              Send us a message
                            </h2>

                            <p className="mt-2 text-sm text-black/55">
                              Fill in the details below and our team will get back to you.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-7 space-y-4">

                                {/* Name */}
                                <div>
                                    <label className="mb-2 block text-s font-semibold text-black/75">
                                      Full Name
                                    </label>

                                    <input
                                      type="text"
                                      required
                                      placeholder="Enter your full name"
                                      className="h-13 w-full rounded-xl border border-black/15 bg-white/20 px-4 text-sm text-black outline-none placeholder:text-black/35 transition focus:border-[#4d91ff] focus:bg-white/30"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="mb-2 block text-s font-semibold text-black/75">
                                      Email Address
                                    </label>

                                    <input
                                      type="email"
                                      required
                                      placeholder="Enter your email"
                                      className="h-13 w-full rounded-xl border border-black/15 bg-white/20 px-4 text-sm text-black outline-none placeholder:text-black/35 transition focus:border-[#4d91ff] focus:bg-white/30"
                                    />
                                </div>

                                {/* Mobile */}
                                <div>
                                    <label className="mb-2 block text-s font-semibold text-black/75">
                                      Mobile Number
                                    </label>

                                    <div className="flex gap-2">
                                      <div className="flex h-13 items-center rounded-xl border border-black/15 bg-white/20 px-3 text-sm text-black/75">
                                        +91
                                      </div>

                                      <input
                                        type="tel"
                                        required
                                        placeholder="Enter mobile number"
                                        className="h-13 min-w-0 flex-1 rounded-xl border border-black/15 bg-white/20 px-4 text-sm text-black outline-none placeholder:text-black/35 transition focus:border-[#4d91ff] focus:bg-white/30"
                                      />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="mb-2 block text-s font-semibold text-black/75">
                                      Subject
                                    </label>

                                    <input
                                      type="text"
                                      required
                                      placeholder="What can we help you with?"
                                      className="h-13 w-full rounded-xl border border-black/15 bg-white/20 px-4 text-sm text-black outline-none placeholder:text-black/35 transition focus:border-[#4d91ff] focus:bg-white/30"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="mb-2 block text-s font-semibold text-black/75">
                                      Message
                                    </label   >

                                    <textarea
                                      required
                                      rows={5}
                                      placeholder="Write your message..."
                                      className="w-full resize-none rounded-xl border border-black/15 bg-white/20 px-4 py-3 text-sm text-black outline-none placeholder:text-black/35 transition focus:border-[#4d91ff] focus:bg-white/30"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                  type="submit"
                                  className="flex h-13 w-full items-center justify-center rounded-xl bg-[#1769e0] text-sm font-bold text-white shadow-[0_10px_30px_rgba(23,105,224,0.25)] transition hover:bg-[#2879ed] active:scale-[0.98]"
                                >
                                  Send Message
                                </button>

                                {sent && (
                                  <p className="text-center text-sm font-semibold text-green-300">
                                    Your message has been received. We&apos;ll get back to you soon.
                                  </p>
                                )}
                            </form>
                        </div>
                          
                        {/* Contact Information */}
                        <div className="border-t border-black/10 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                          <h2 className="text-2xl font-bold">
                            Contact information
                          </h2>
                          
                          <p className="mt-2 text-sm leading-6 text-black/55">
                            Reach out to us through any of the following channels.
                          </p>
                          
                          <div className="mt-8 space-y-5">
                          
                            {/* Location */}
                            <div className="flex gap-4">
                              <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-black/15 bg-white/[0.06] text-lg">
                                📍
                              </div>
                          
                              <div>
                                <p className="text-sm font-bold">
                                  Location
                                </p>
                          
                                <p className="mt-1 text-sm leading-5 text-black/55">
                                  Tawang, Arunachal Pradesh
                                </p>
                              </div>
                            </div>
                          
                            {/* Phone */}
                            <div className="flex gap-4">
                              <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-black/15 bg-white/[0.06] text-lg">
                                📞
                              </div>
                          
                              <div>
                                <p className="text-sm font-bold">
                                  Phone
                                </p>
                          
                                <p className="mt-1 text-sm leading-5 text-black/55">
                                  +91 XXXXX XXXXX
                                </p>
                              </div>
                            </div>
                          
                            {/* Email */}
                            <div className="flex gap-4">
                              <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-black/15 bg-white/[0.06] text-lg">
                                ✉
                              </div>
                          
                              <div>
                                <p className="text-sm font-bold">
                                  Email
                                </p>
                          
                                <p className="mt-1 text-sm leading-5 text-black/55">
                                  support@travelora.com
                                </p>
                              </div>
                            </div>
                          
                            {/* Hours */}
                            <div className="flex gap-4">
                              <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-black/15 bg-white/[0.06] text-lg">
                                🕐
                              </div>
                          
                              <div>
                                <p className="text-sm font-bold">
                                  Support Hours
                                </p>
                          
                                <p className="mt-1 text-sm leading-5 text-black/55">
                                  Monday – Sunday
                                  <br />
                                  9:00 AM – 9:00 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Support Box */}
                          <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.04] p-4 sm:mt-10 sm:p-5">
                            <p className="text-sm font-bold">
                              Need help with a booking?
                            </p>
                          
                            <p className="mt-2 text-xs leading-5 text-black/55">
                              Keep your booking details ready so our support team can assist you faster.
                            </p>
                          </div>
                        </div>
                    </div>
                        
                    {/* Bottom */}
                    <p className="mt-6 text-center text-xs text-white/35">
                      Travelora · Your journey starts here
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}