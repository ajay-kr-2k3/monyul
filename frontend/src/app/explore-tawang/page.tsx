"use client";

import { useMemo, useState } from "react";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

type Place = {
    name: string;
    category: string;
    location: string;
    description: string;
    image: string;
    tag: string;
    icon: string;
    accent: string;
};

const places: Place[] = [
    {
        name: "Tawang Monastery",
        category: "Heritage",
        location: "Tawang",
        description: "The spiritual heart of Tawang and one of the most remarkable Buddhist monasteries of the Himalayas.",
        image: "/tawang/monastery.png",
        tag: "Must Visit",
        icon: "✦",
        accent: "monastery",
    },
    {
        name: "Sela Pass",
        category: "Mountains",
        location: "Sela",
        description: "A spectacular high-altitude pass surrounded by snow peaks, dramatic valleys and the sacred Sela Lake.",
        image: "/tawang/sela-pass.png",
        tag: "Iconic",
        icon: "△",
        accent: "mountain",
    },
    {
        name: "Nuranang Falls",
        category: "Nature",
        location: "Jang",
        description: "A powerful Himalayan waterfall dropping through a dramatic mountain valley near Jang.",
        image: "/tawang/nuranang-falls.png",
        tag: "Scenic",
        icon: "≈",
        accent: "water",
    },
    {
        name: "Sangetsar Lake",
        category: "Lakes",
        location: "Tawang",
        description: "Popularly known as Madhuri Lake, surrounded by extraordinary mountain scenery and quiet wilderness.",
        image: "/tawang/sangetsar-lake.png",
        tag: "Iconic",
        icon: "◇",
        accent: "lake",
    },
    {
        name: "Urgelling Monastery",
        category: "Heritage",
        location: "Tawang",
        description: "A historic monastery traditionally revered as the birthplace of the Sixth Dalai Lama.",
        image: "/tawang/urgelling-monastery.png",
        tag: "Historic",
        icon: "◈",
        accent: "spiritual",
    },
    {
        name: "Chumi Gyatse",
        category: "Nature",
        location: "Frontier Region",
        description: "The sacred landscape of 108 cascades where mountain, water and spiritual tradition meet.",
        image: "/tawang/chumi-gyatse.png",
        tag: "Sacred",
        icon: "108",
        accent: "water",
    },
    {
        name: "Bum La Pass",
        category: "Frontier",
        location: "India–Tibet Border",
        description: "A high-altitude frontier pass carrying deep historical, strategic and military significance.",
        image: "/tawang/bumla-pass.png",
        tag: "Special Permit",
        icon: "⚑",
        accent: "frontier",
    },
    {
        name: "Jaswant Garh",
        category: "History",
        location: "Tawang Road",
        description: "A solemn memorial remembering Rifleman Jaswant Singh Rawat and the events of the 1962 war.",
        image: "/tawang/jaswant-garh.png",
        tag: "Historic",
        icon: "✚",
        accent: "war",
    },
    {
        name: "Tawang War Memorial",
        category: "History",
        location: "Tawang",
        description: "A powerful memorial dedicated to soldiers who lost their lives during the 1962 Sino-Indian War.",
        image: "/tawang/war-memorial.png",
        tag: "Historic",
        icon: "◆",
        accent: "war",
    },
    {
        name: "Taktsang Gompa",
        category: "Heritage",
        location: "Tawang",
        description: "A sacred Himalayan Buddhist site traditionally associated with Guru Padmasambhava.",
        image: "",
        tag: "Sacred",
        icon: "☸",
        accent: "spiritual",
    },
    {
        name: "Gorsam Chorten",
        category: "Heritage",
        location: "Zemithang",
        description: "A monumental Buddhist stupa and an important pilgrimage site in the western Tawang region.",
        image: "",
        tag: "Heritage",
        icon: "◉",
        accent: "heritage",
    },
    {
        name: "Chakzam Bridge",
        category: "Heritage",
        location: "Tawang Chu",
        description: "A historic iron suspension bridge traditionally associated with Tibetan engineer Thangtong Gyalpo.",
        image: "",
        tag: "Historic",
        icon: "⌁",
        accent: "heritage",
    },
    {
        name: "P.T. Tso",
        category: "Lakes",
        location: "Near Tawang",
        description: "A peaceful high-altitude lake surrounded by mountains and alpine landscapes.",
        image: "",
        tag: "Peaceful",
        icon: "◌",
        accent: "lake",
    },
    {
        name: "Sela Lake",
        category: "Lakes",
        location: "Sela",
        description: "A striking alpine lake sitting beside one of the most dramatic mountain passes of the region.",
        image: "",
        tag: "Alpine",
        icon: "○",
        accent: "ice",
    },
    {
        name: "Geshila Peak",
        category: "Mountains",
        location: "Tawang",
        description: "A dramatic Himalayan landscape for travellers seeking mountain views and high-altitude solitude.",
        image: "",
        tag: "Adventure",
        icon: "▲",
        accent: "mountain",
    },
    {
        name: "Regyaling Gompa",
        category: "Heritage",
        location: "Tawang",
        description: "A peaceful monastery forming part of Tawang's wider Buddhist heritage landscape.",
        image: "",
        tag: "Peaceful",
        icon: "☼",
        accent: "spiritual",
    },
    {
        name: "Khinmey Monastery",
        category: "Heritage",
        location: "Tawang",
        description: "A historic Buddhist monastery and an important part of the region's spiritual landscape.",
        image: "",
        tag: "Heritage",
        icon: "✧",
        accent: "monastery",
    },
    {
        name: "Brahma-dung-chung Ani Gompa",
        category: "Heritage",
        location: "Tawang",
        description: "A traditional nunnery and a living part of Tawang's Buddhist cultural heritage.",
        image: "",
        tag: "Heritage",
        icon: "◈",
        accent: "spiritual",
    },
    {
        name: "Gyangong Ani Gompa",
        category: "Heritage",
        location: "Tawang",
        description: "A quiet monastic destination representing the region's living spiritual traditions.",
        image: "",
        tag: "Peaceful",
        icon: "◇",
        accent: "spiritual",
    },
    {
        name: "Tsachu Hot Spring",
        category: "Nature",
        location: "Thingbu",
        description: "A natural hot spring experience hidden within the remote Himalayan landscape.",
        image: "",
        tag: "Hidden Gem",
        icon: "♨",
        accent: "warm",
    },
    {
        name: "Bob Khathing Memorial Museum",
        category: "History",
        location: "Tawang",
        description: "A museum dedicated to Major Ralengnao Bob Khathing and an important chapter of Tawang's modern history.",
        image: "",
        tag: "New",
        icon: "▣",
        accent: "museum",
    },
    {
        name: "Sela Tunnel",
        category: "Adventure",
        location: "Sela",
        description: "A major high-altitude tunnel providing all-weather connectivity towards the Tawang region.",
        image: "",
        tag: "Experience",
        icon: "◉",
        accent: "steel",
    },
    {
        name: "Tawang Craft Centre",
        category: "Culture",
        location: "Tawang",
        description: "Discover traditional craftsmanship, local artistic traditions and the creative side of Monpa culture.",
        image: "",
        tag: "Culture",
        icon: "✤",
        accent: "heritage",
    },
    {
        name: "Dolma Lhakhang (Tara Devi)",
        category: "Culture",
        location: "Lumla",
        description: "Discover traditional craftsmanship, local artistic traditions and the creative side of Monpa culture.",
        image: "",
        tag: "Culture",
        icon: "✤",
        accent: "heritage",
    },
];

const categories = ["All", "Heritage", "Nature", "Lakes", "Mountains", "History", "Frontier", "Adventure", "Culture"];

const accentClasses: Record<string, string> = {
    monastery: "from-[#365d87] via-[#193b60] to-[#07111f]",
    mountain: "from-[#a8c8dd] via-[#526f86] to-[#182b3d]",
    water: "from-[#54b9d8] via-[#1979ad] to-[#071b2c]",
    lake: "from-[#70b8d0] via-[#326d8e] to-[#0a2032]",
    spiritual: "from-[#8c76bd] via-[#4c3b72] to-[#130e20]",
    frontier: "from-[#6686a1] via-[#314b65] to-[#08121d]",
    war: "from-[#626b75] via-[#29323d] to-[#090e14]",
    heritage: "from-[#b8915d] via-[#735334] to-[#171109]",
    ice: "from-[#d2e9f5] via-[#6f9db8] to-[#243c4e]",
    warm: "from-[#d99b5e] via-[#8b4e29] to-[#1d1009]",
    museum: "from-[#748d9c] via-[#3c5360] to-[#0b151c]",
    steel: "from-[#8b98a5] via-[#475765] to-[#101922]",
};

export default function ExploreTawangPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filteredPlaces = useMemo(() => {
        return places.filter((place) => {
            const categoryMatch = activeCategory === "All" || place.category === activeCategory;
            const searchMatch = `${place.name} ${place.location} ${place.category} ${place.description}`.toLowerCase().includes(search.toLowerCase());
            return categoryMatch && searchMatch;
        });
    }, [activeCategory, search]);

    const scrollToPlaces = () => {
        document.getElementById("all-places")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#f4f6f8] text-[#101a29]">
            <NavBar />

            {/* HERO */}
            <section className="relative min-h-screen overflow-hidden bg-[#06101c]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(105,171,230,0.38),transparent_25%),radial-gradient(circle_at_15%_72%,rgba(23,105,224,0.22),transparent_30%),linear-gradient(135deg,#040a11_0%,#0d2945_52%,#06101b_100%)]" />
                <div className="absolute right-[-180px] top-[12%] size-[700px] rounded-full border border-white/[0.07]" />
                <div className="absolute right-[-60px] top-[27%] size-[450px] rounded-full border border-white/[0.06]" />
                <div className="absolute right-[90px] top-[41%] size-[180px] rounded-full border border-white/[0.06]" />
                <div className="absolute bottom-0 left-0 h-[55%] w-full bg-gradient-to-t from-[#06101b] via-[#06101b]/65 to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-5 pb-8 pt-36 sm:px-8 sm:pb-12 lg:px-10 lg:pb-16">
                    <div className="max-w-6xl">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-[#82baff]" />
                            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-[#82baff]">Travelora · Destination Guide</p>
                        </div>

                        <h1 className="mt-7 bg-[linear-gradient(to_bottom,#ff9933_0%,#ff9933_30%,#ffffff_45%,#ffffff_55%,#138808_70%,#138808_100%)] bg-clip-text text-[21vw] font-black leading-[0.72] tracking-[-0.1em] text-transparent sm:text-[15vw] lg:text-[11vw]">
                            TAWANG
                        </h1>

                        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div>
                                <p className="max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                                    Go beyond the postcard. Discover sacred monasteries, silent lakes, wild waterfalls, mountain passes and stories hidden across the Himalayas.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55 backdrop-blur-md">20+ Destinations</span>
                                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55 backdrop-blur-md">Monasteries</span>
                                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55 backdrop-blur-md">Lakes & Falls</span>
                                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55 backdrop-blur-md">Frontier</span>
                                </div>
                            </div>

                            <div className="hidden border-l border-white/15 pl-7 lg:block">
                                <p className="text-5xl font-black text-white">20+</p>
                                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Places to discover</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 rounded-[26px] border border-white/10 bg-white/[0.07] p-2 shadow-2xl backdrop-blur-2xl sm:p-3">
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <div className="flex h-14 flex-1 items-center gap-3 rounded-2xl bg-white px-4 text-[#101a29]">
                                <span className="text-2xl text-[#1769e0]">⌕</span>
                                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search monasteries, lakes, passes..." className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-black/30" />
                            </div>

                            <button type="button" onClick={scrollToPlaces} className="h-14 rounded-2xl bg-[#1769e0] px-7 text-sm font-bold text-white transition hover:bg-white hover:text-[#1769e0]">
                                Discover
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORY NAV */}
            <section className="sticky top-0 z-30 border-b border-black/10 bg-white/90 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-10">
                <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto">
                    <span className="mr-2 hidden shrink-0 text-[9px] font-black uppercase tracking-[0.25em] text-black/30 lg:block">Explore by</span>

                    {categories.map((category) => (
                        <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`shrink-0 rounded-full border px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition ${activeCategory === category ? "border-[#1769e0] bg-[#1769e0] text-white shadow-lg shadow-[#1769e0]/20" : "border-black/10 bg-[#f7f9fc] text-black/45 hover:border-[#1769e0]/30 hover:text-[#1769e0]"}`}>
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* FEATURED */}
            <section className="bg-[#f4f6f8] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
                <div className="mx-auto max-w-[1440px]">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#1769e0]" />
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1769e0]">Curated for you</p>
                            </div>
                            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Begin with the icons.</h2>
                        </div>

                        <button type="button" onClick={scrollToPlaces} className="text-left text-xs font-bold text-[#1769e0] transition hover:tracking-wide">
                            View all destinations →
                        </button>
                    </div>

                    <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
                        <article className="group relative min-h-[560px] overflow-hidden rounded-[34px] bg-[#102d4d] lg:col-span-7 lg:row-span-2">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/tawang/monastery.png')" }} />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.78)_100%)]" />

                            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white/75 backdrop-blur-md">
                                01 · Must Visit
                            </span>

                            <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9 sm:right-9">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Heritage · Tawang</p>
                                <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Tawang Monastery</h3>
                                <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">
                                    Centuries of faith, architecture and Monpa heritage rising above the Himalayan landscape.
                                </p>
                                <button type="button" onClick={scrollToPlaces} className="mt-7 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-xs font-bold backdrop-blur-md transition hover:bg-white hover:text-[#07111f]">
                                    Discover place <span>↗</span>
                                </button>
                            </div>
                        </article>

                        <article className="group relative min-h-[270px] overflow-hidden rounded-[34px] lg:col-span-5">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/tawang/holy_waterfalls.png')" }} />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.78)_100%)]" />
                            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white/65 backdrop-blur-md">02 · Sacred</span>
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">Frontier Region</p>
                                <h3 className="mt-2 text-2xl font-black">Chumi Gyatse</h3>
                                <p className="mt-1 text-sm text-white/45">108 Holy Waterfalls</p>
                            </div>
                        </article>

                        <article className="group relative min-h-[270px] overflow-hidden rounded-[34px] lg:col-span-5">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/tawang/sela_pass.png')" }} />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,0.78)_100%)]" />
                            <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white/65 backdrop-blur-md">03 · Alpine</span>
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">Sela</p>
                                <h3 className="mt-2 text-2xl font-black">Sela Pass</h3>
                                <p className="mt-1 text-sm text-white/45">The gateway to Tawang</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* MOODS */}
            <section className="relative overflow-hidden bg-[#07111f] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
                <div className="absolute -right-40 top-[-180px] size-[650px] rounded-full border border-white/[0.05]" />
                <div className="absolute -left-40 bottom-[-220px] size-[600px] rounded-full border border-white/[0.04]" />

                <div className="relative mx-auto max-w-[1440px]">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#82baff]" />
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#82baff]">Choose your mood</p>
                        </div>

                        <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-0.04em] text-white sm:text-6xl">
                            Tawang has
                            <span className="text-white/25"> many moods.</span>
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            ["SACRED", "Monasteries, gompas & spiritual places", "✦", "Heritage", "/tawang/spiritual.png"],
                            ["WILD", "Waterfalls, springs & hidden landscapes", "≈", "Nature", "/tawang/waterfall.png"],
                            ["ALPINE", "Passes, lakes & mountain horizons", "△", "Mountains", "/tawang/road.png"],
                            ["REMEMBERED", "War memorials, museums & history", "◆", "History", "/tawang/war_memorial.png"],
                        ].map(([title, text, icon, category, image], index) => (
                            <button key={title} type="button" onClick={() => { setActiveCategory(category); scrollToPlaces(); }} className={`group relative min-h-[290px] rounded-[30px] border p-7 text-left transition duration-500 hover:-translate-y-2 ${index === 0 ? "border-[#6daeff]/20 bg-[#113253]" : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.07]"}`}>
                                <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                                    <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${image}')` }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/75 to-[#07111f]/20" />
                                </div>
                                <div className="relative z-10">
                                    <span className="text-3xl text-[#82baff]">{icon}</span>
                                    <p className="mt-12 text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">{title}</p>
                                    <h3 className="mt-3 text-lg font-extrabold text-white">{text}</h3>
                                    <span className="mt-8 inline-block text-xs font-bold text-[#82baff] transition group-hover:translate-x-1">Explore →</span>
                                </div> 
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALL PLACES */}
            <section id="all-places" className="bg-[#f4f6f8] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
                <div className="mx-auto max-w-[1440px]">
                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#1769e0]" />
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1769e0]">The complete atlas</p>
                            </div>
                            <h2 className="mt-4 text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-6xl">
                                Find your
                                <span className="text-black/20"> Tawang.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <p className="max-w-lg text-sm leading-6 text-black/45">
                                From celebrated landmarks to quieter corners, explore the destinations that make Tawang more than a journey.
                            </p>
                            <p className="shrink-0 text-xs font-bold text-black/35">{filteredPlaces.length} places showing</p>
                        </div>
                    </div>

                    {filteredPlaces.length === 0 ? (
                        <div className="mt-12 rounded-[30px] border border-black/10 bg-white p-16 text-center">
                            <span className="text-4xl text-[#1769e0]">⌕</span>
                            <h3 className="mt-5 text-xl font-black">Nothing found</h3>
                            <p className="mt-2 text-sm text-black/45">Try another place or category.</p>
                            <button type="button" onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-6 rounded-xl bg-[#1769e0] px-5 py-3 text-xs font-bold text-white">
                                Reset explorer
                            </button>
                        </div>
                    ) : (
                        <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
                            {filteredPlaces.map((place, index) => (
                                <article key={place.name} className="group grid gap-5 py-6 transition sm:grid-cols-[60px_1fr_auto] sm:items-center sm:gap-7">
                                    <span className="text-xs font-black text-black/20">{String(index + 1).padStart(2, "0")}</span>

                                    <div className="flex min-w-0 items-center gap-5">
                                        <div className={`grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accentClasses[place.accent]} text-lg font-black text-white shadow-md transition duration-500 group-hover:scale-105`}>
                                            {place.icon}
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1769e0]">{place.category}</p>
                                                <span className="text-black/15">·</span>
                                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/30">{place.location}</p>
                                            </div>
                                            <h3 className="mt-1 text-lg font-black tracking-tight sm:text-xl">{place.name}</h3>
                                            <p className="mt-1 max-w-2xl text-sm leading-6 text-black/40">{place.description}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-5 sm:justify-end">
                                        <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-black/40 shadow-sm">{place.tag}</span>
                                        <button type="button" className="grid size-10 shrink-0 place-items-center rounded-full border border-black/10 text-black/35 transition group-hover:border-[#1769e0] group-hover:bg-[#1769e0] group-hover:text-white">
                                            →
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* FRONTIER FEATURE */}
            <section className="relative overflow-hidden bg-[#0a1725] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(75,143,214,0.28),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(30,75,110,0.22),transparent_28%)]" />
                <div className="absolute right-[-100px] top-[-180px] size-[560px] rounded-full border border-white/[0.05]" />

                <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#82baff]" />
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#82baff]">Beyond the ordinary</p>
                        </div>

                        <h2 className="mt-6 text-5xl font-black leading-[0.92] tracking-[-0.05em] text-white sm:text-7xl">
                            Go where
                            <br />
                            <span className="text-white/25">the map gets quiet.</span>
                        </h2>

                        <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                            High passes, frontier landscapes and remote sacred places reveal a side of Tawang that most journeys never reach.
                        </p>
                    </div>

                    <div className="grid gap-3">
                        {[
                            ["Bum La Pass", "FRONTIER", "⚑"],
                            ["Chumi Gyatse", "108 CASCADES", "≈"],
                            ["Geshila Peak", "HIGH HIMALAYAS", "△"],
                            ["Tsachu Hot Spring", "HIDDEN GEM", "♨"],
                        ].map(([name, label, icon], index) => (
                            <button key={name} type="button" onClick={() => { setSearch(name); setActiveCategory("All"); scrollToPlaces(); }} className="group flex items-center gap-5 rounded-[24px] border border-white/10 bg-white/[0.035] p-5 text-left transition duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-6">
                                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-lg text-[#82baff]">{icon}</span>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">0{index + 1} · {label}</p>
                                    <h3 className="mt-1 text-lg font-extrabold text-white">{name}</h3>
                                </div>
                                <span className="text-lg text-white/20 transition group-hover:translate-x-1 group-hover:text-[#82baff]">→</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRIP CTA */}
            <section className="bg-[#0a1725] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
                <div className="mx-auto max-w-[1440px]">
                    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_80%_15%,rgba(48,128,224,0.4),transparent_32%),linear-gradient(135deg,#102e4e,#07111f)] p-8 sm:p-12 lg:p-20">
                        <div className="absolute right-[-120px] top-[-170px] size-[500px] rounded-full border border-white/[0.07]" />
                        <div className="absolute right-[80px] bottom-[-180px] size-[380px] rounded-full border border-white/[0.05]" />

                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div className="max-w-4xl">
                                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#82baff]">Your Tawang story</p>
                                <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-6xl">
                                    Don't just visit Tawang.
                                    <span className="text-white/30"> Experience it.</span>
                                </h2>
                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                                    Find a stay, rent a vehicle and create your own route through the mountains.
                                </p>
                            </div>

                            <a href="/" className="inline-flex h-13 items-center justify-center rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#1769e0] transition hover:bg-[#1769e0] hover:text-white">
                                Plan Your Journey →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}