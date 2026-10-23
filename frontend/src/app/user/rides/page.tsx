"use client";

import { useEffect, useRef, useState } from "react";
import { Map, Marker, NavigationControl, setWorkerUrl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapPin, Navigation, ShieldCheck, LocateFixed } from "lucide-react";
import NavBar from "../../common/NavBar";

setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");

export default function RidesPage() {
    const [rideType, setRideType] = useState<"bike" | "car">("bike");
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<Map | null>(null);
    const markerRef = useRef<Marker | null>(null);
    const watchIdRef = useRef<number | null>(null);

    const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [locationLoading, setLocationLoading] = useState(true);
    const [locationError, setLocationError] = useState("");
    const canSearch = destination.trim();

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocationError("Location is not supported by this browser.");
            setLocationLoading(false);
            return;
        }

        watchIdRef.current = navigator.geolocation.watchPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                setCurrentLocation({ lat, lng });
                setLocationLoading(false);
                setLocationError("");

                
            },
            (error) => {
                console.error("Location error:", error);
                setLocationLoading(false);
                setLocationError("Please allow location access to detect your pickup point.");
            },
            {
                enableHighAccuracy: true,
                maximumAge: 5000,
                timeout: 10000,
            },
        );

        return () => {
            if (watchIdRef.current !== null) {
                navigator.geolocation.clearWatch(watchIdRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!mapContainer.current || mapRef.current) {
            return;
        }
    
        const map = new Map({
            container: mapContainer.current,
            style: "https://tiles.openfreemap.org/styles/liberty",
            center: [91.8584, 27.5874],
            zoom: 13,
            attributionControl: {},
        });
    
        map.addControl(new NavigationControl(), "top-right");

        map.on("load", () => {
            map.resize();
        })
    
        mapRef.current = map;
    
        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (!mapRef.current || !currentLocation) {
            return;
        }
    
        const { lat, lng } = currentLocation;
    
        if (!markerRef.current) {
            markerRef.current = new Marker({
                color: "#2F80FF",
            })
                .setLngLat([lng, lat])
                .addTo(mapRef.current);
        } else {
            markerRef.current.setLngLat([lng, lat]);
        }
    
        mapRef.current.jumpTo({
            center: [lng, lat],
            zoom: 16,
        });
    }, [currentLocation]);

    return (
        <main className="min-h-screen overflow-hidden bg-[#070a0f] text-[#f5f7fa]">
            <NavBar />
            <section className="relative mx-auto h-[calc(100vh-96px)] max-w-[1280px] px-5 pb-5 pt-28 lg:px-8">
                <div className="grid h-full gap-5 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="rounded-[30px] border border-white/[0.08] bg-[#0d121a] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:p-7">
                        <div className="grid grid-cols-2 gap-2 rounded-2xl bg-[#080c12] p-1.5">
                            <button type="button" onClick={() => setRideType("bike")} className={`flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-bold transition ${rideType === "bike" ? "bg-[#1769e0] text-white shadow-[0_8px_25px_rgba(47,128,255,0.25)]" : "text-white/45 hover:text-white/75"}`}>
                                🏍️ Bike
                            </button>

                            <button type="button" onClick={() => setRideType("car")} className={`flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-bold transition ${rideType === "car" ? "bg-[#1769e0] text-white shadow-[0_8px_25px_rgba(47,128,255,0.25)]" : "text-white/45 hover:text-white/75"}`}>
                                🚗 Car
                            </button>
                        </div>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute left-[17px] top-12 h-[74px] border-l border-dashed border-slate-300" />

                                <div className="flex gap-4">
                                    <div className="mt-4 grid size-9 shrink-0 place-items-center rounded-xl border border-[#1769e0]/20 bg-[#1769e0]/10 text-[#4f96ff]">
                                        <MapPin size={18} />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Pickup</label>

                                        <div className="flex h-[52px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#080c12] transition focus-within:border-[#1769e0]">
                                            <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Enter pickup location" className="min-w-0 flex-1 bg-transparent px-4 text-sm font-medium text-white outline-none placeholder:text-white/25" />

                                            <button type="button" onClick={() => { if (!currentLocation) return; setPickup("Current location"); if (mapRef.current) { mapRef.current.flyTo({ center: [currentLocation.lng, currentLocation.lat], zoom: 17, duration: 700 }); } }} disabled={!currentLocation} title={currentLocation ? "Use current location" : "Detecting location..."} className="grid w-[20%] min-w-[56px] place-items-center border-l border-white/[0.08] text-[#4f96ff] transition hover:bg-[#1769e0]/10 disabled:cursor-not-allowed disabled:text-white/20">
                                                <LocateFixed size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 flex gap-4">
                                    <div className="mt-4 grid size-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-white/60">
                                        <Navigation size={17} />
                                    </div>

                                    <div className="flex-1">
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Destination</label>
                                        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Where do you want to go?" className="h-[52px] w-full rounded-xl border border-white/[0.08] bg-[#080c12] px-4 text-sm font-medium text-white outline-none transition placeholder:text-white/25 focus:border-[#1769e0] focus:bg-[#0d121a]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-[#d6b36a]/10 bg-[#d6b36a]/[0.04] p-4">
                            <div className="flex items-start gap-3">
                                <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#d6b36a]" />
                                <div>
                                    <p className="text-sm font-bold text-white">Safe & reliable rides</p>
                                    <p className="mt-1 text-xs leading-5 text-white/40">Driver and trip details will be shown before your ride starts.</p>
                                </div>
                            </div>
                        </div>

                        <button type="button" disabled={!canSearch} className="mt-5 h-[54px] w-full rounded-2xl bg-[#1769e0] px-5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(47,128,255,0.25)] transition hover:bg-[#287ff5] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/25 disabled:shadow-none">
                            Book {rideType === "bike" ? "Bike" : "Car"} Ride
                        </button>
                    </div>

                    <div className="min-h-[430px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b1017] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                        <div className="relative h-full min-h-[430px] overflow-hidden">
                            <div ref={mapContainer} className="absolute inset-0" />

                            {locationLoading && (
                                <div className="absolute left-4 top-4 z-10 rounded-xl border border-white/10 bg-[#0d121a]/90 px-4 py-3 text-xs font-semibold text-white/70 backdrop-blur">
                                    Detecting your location...
                                </div>
                            )}

                            {locationError && (
                                <div className="absolute left-4 right-4 top-4 z-10 rounded-xl border border-red-400/20 bg-[#0d121a]/95 px-4 py-3 text-xs font-semibold text-red-300 backdrop-blur">
                                    {locationError}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}