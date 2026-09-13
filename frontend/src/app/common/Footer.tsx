"use client";

import Link from "next/link";

const footerLink = "group relative w-fit max-w-full text-white transition hover:after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111f] px-5 py-10 text-white sm:px-8 lg:px-12 lg:px-16 lg:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-5 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-[#1769e0] text-xl text-white shadow-lg">✦</span>
              <span className="text-2xl font-extrabold tracking-tight text-[#1769e0]">Travelora</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">One platform for every journey. Discover stays, rent vehicles, and book rides with ease.</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              <Link href="/" className={footerLink}>Home</Link>
              <Link href="/history" className={footerLink}>History</Link>
              <Link href="/offers" className={footerLink}>Offers</Link>
              <Link href="/contact" className={footerLink}>Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              <Link href="/user/hotels" className={footerLink}>Hotels</Link>
              <Link href="/user/bike-rent" className={footerLink}>Bike Rental</Link>
              <Link href="/user/car-book" className={footerLink}>Car Rental</Link>
              <Link href="/user/trips" className={footerLink}>Bike & Car Rides</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Terms</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              <Link href="#" className={footerLink}>Privacy Policy</Link>
              <Link href="#" className={footerLink}>Terms & Conditions</Link>
              <Link href="#" className={footerLink}>Cancellation Policy</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Follow Us</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              <Link href="#" className="transition hover:text-white">Instagram</Link>
              <Link href="#" className="transition hover:text-white">Facebook</Link>
              <Link href="#" className="transition hover:text-white">X</Link>
              <Link href="#" className="transition hover:text-white">YouTube</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/40 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Travelora. All rights reserved.</p>
          <p>Made for every journey.</p>
        </div>
      </div>
    </footer>
  );
}