"use client";

import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

const timeline = [
    {
        year: "BEFORE THE 7TH CENTURY",
        tag: "01 · ORIGINS",
        title: "The Monyul Kingdom",
        subtitle: "Before Tawang had its name",
        text: "The earliest recorded history of the region reaches back to the ancient Monyul Kingdom, associated with the ancestors and traditions of the Monpa people.",
        type: "origin",
    },
    {
        year: "ANCIENT SPIRITUAL TRADITIONS",
        tag: "02 · SPIRITUAL BEGINNINGS",
        title: "The Sacred Mountain World",
        subtitle: "Where landscape became belief",
        text: "The mountains, caves, rivers and forests of Monyul became woven into Buddhist and indigenous traditions. Stories connected sacred landscapes with spiritual teachers and generations of Monpa communities.",
        type: "origin",
    },
    {
        year: "15TH CENTURY",
        tag: "03 · MONASTERY",
        title: "Urgelling Monastery",
        subtitle: "The birthplace of the Sixth Dalai Lama",
        text: "Urgelling is one of Tawang's oldest historic monasteries. It is revered as the birthplace of Gyalwa Tsangyang Gyatso, the Sixth Dalai Lama.",
        type: "heritage",
    },
    {
        year: "15TH CENTURY",
        tag: "04 · ENGINEERING",
        title: "Chakzam Iron Bridge",
        subtitle: "A bridge across centuries",
        text: "The historic Chakzam suspension bridge across the Tawang Chu is traditionally associated with Tibetan engineer Thangtong Gyalpo and remains one of the remarkable historic structures of the region.",
        type: "heritage",
    },
    {
        year: "1680–81",
        tag: "05 · THE DEFINING CHAPTER",
        title: "Tawang Monastery",
        subtitle: "Galden Namgey Lhatse",
        text: "Merak Lama Lodre Gyamtso founded the great Tawang Monastery in 1680–81. It became the spiritual and cultural centre around which much of Tawang's identity grew.",
        type: "monastery",
    },
    {
        year: "17TH CENTURY ONWARD",
        tag: "06 · LIVING HERITAGE",
        title: "The Monastic Network",
        subtitle: "Khinmey · Nunneries · Gompas",
        text: "Across the valleys and ridges, monasteries and nunneries preserved Buddhist teachings, rituals, art, manuscripts and the cultural life of the Monpa community.",
        type: "heritage",
    },
    {
        year: "12TH CENTURY · HERITAGE",
        tag: "07 · ZEMITHANG",
        title: "Gorsam Chorten",
        subtitle: "A monumental Buddhist stupa",
        text: "Gorsam Chorten at Zemithang stands as one of the region's major heritage monuments and pilgrimage sites, near Tawang's western frontier.",
        type: "heritage",
    },
    {
        year: "SACRED TRADITION",
        tag: "08 · CHUMI GYATSE",
        title: "The 108 Holy Waterfalls",
        subtitle: "One mountain. A hundred and eight cascades.",
        text: "Chumi Gyatse is a sacred landscape of 108 cascades near the frontier. Monpa and Tibetan Buddhist traditions attach deep spiritual meaning to the site.",
        type: "sacred",
    },
    {
        year: "1951",
        tag: "09 · MODERN HISTORY",
        title: "Major Bob Khathing",
        subtitle: "A new chapter for Tawang",
        text: "On 6 February 1951, the first administrative centre of the future Tawang district was established under Major Ralengnao Bob Khathing.",
        type: "modern",
    },
    {
        year: "1959",
        tag: "10 · FRONTIER",
        title: "Bum La",
        subtitle: "A route through the Himalayas",
        text: "Bum La became part of modern Indian history when the 14th Dalai Lama entered India through this frontier route in 1959. Today it is also remembered as a significant border and battlefield landscape.",
        type: "frontier",
    },
    {
        year: "1962",
        tag: "11 · WAR",
        title: "The Battle of Tawang",
        subtitle: "When the mountains became a battlefield",
        text: "The Sino-Indian War transformed the landscape around Tawang into one of the most significant chapters in the military history of the eastern Himalayas.",
        type: "war",
    },
    {
        year: "1962",
        tag: "12 · VALOUR",
        title: "Jaswant Garh",
        subtitle: "The story of Rifleman Jaswant Singh Rawat",
        text: "Jaswant Garh commemorates Rifleman Jaswant Singh Rawat of 4 Garhwal Rifles and his resistance during the 1962 war.",
        type: "war",
    },
    {
        year: "POST-1962",
        tag: "13 · REMEMBRANCE",
        title: "Tawang War Memorial",
        subtitle: "Memory carved in stone",
        text: "The Tawang War Memorial stands as a tribute to the soldiers who died in the 1962 Sino-Indian War, preserving their memory in the landscape they defended.",
        type: "war",
    },
    {
        year: "1984",
        tag: "14 · DISTRICT",
        title: "Tawang Becomes a District",
        subtitle: "From frontier subdivision to district",
        text: "Tawang was formally carved out of West Kameng District on 6 October 1984 and became a full-fledged district of Arunachal Pradesh.",
        type: "modern",
    },
    {
        year: "2024",
        tag: "15 · REMEMBERING THE ARCHITECT",
        title: "Bob Khathing Memorial Museum",
        subtitle: "A modern museum for an important chapter",
        text: "The Major Ralengnao Bob Khathing Memorial Museum was inaugurated in 2024 to preserve and present his contribution to the history and security of Tawang.",
        type: "modern",
    },
    {
        year: "TODAY",
        tag: "16 · LIVING HISTORY",
        title: "Tawang Continues",
        subtitle: "The story has not ended",
        text: "Monasteries, festivals, Monpa traditions, sacred landscapes and memories of the frontier continue to make Tawang a living historical and cultural landscape.",
        type: "today",
    },
];

const heritage = [
    ["Khinmey Monastery", "Nyingmapa Buddhist heritage"],
    ["Brahmadungchung Ani Gompa", "One of the region's old nunneries"],
    ["Gyangong Ani Gompa", "Historic monastic heritage"],
    ["Regyaling Gompa", "A historic spiritual landmark"],
    ["Taktsang Gompa", "Sacred Himalayan Buddhist site"],
    ["Kyiney Gompa", "Traditional Buddhist heritage"],
];

const frontier = [
    ["Tawang War Memorial", "1962"],
    ["Jaswant Garh", "1962"],
    ["Bum La Pass", "Frontier"],
    ["Bob Khathing Memorial Museum", "2024"],
];

export default function HistoryPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
            <NavBar />

            <section className="relative flex min-h-screen items-end overflow-hidden bg-[radial-gradient(circle_at_75%_20%,rgba(58,122,205,0.4),transparent_32%),linear-gradient(145deg,#050c15,#0c2845_55%,#07111f)]">
                <div className="absolute right-[-160px] top-[15%] size-[620px] rounded-full border border-white/[0.07]" />
                <div className="absolute right-[-70px] top-[27%] size-[420px] rounded-full border border-white/[0.06]" />
                <div className="absolute bottom-0 left-0 h-2/3 w-full bg-gradient-to-t from-[#07111f] via-[#07111f]/60 to-transparent" />

                <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-36 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
                    <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#83b9ff]">Travelora · Tawang</p>

                    <h1 className="mt-6 max-w-6xl text-[18vw] font-black leading-[0.76] tracking-[-0.1em] sm:text-[14vw] lg:text-[11vw]">
                        HISTORY
                    </h1>

                    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                        <p className="max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                            From the ancient Monyul Kingdom to the frontier of modern India — discover the people, places, faith and moments that shaped Tawang.
                        </p>

                        <div className="hidden border-l border-white/15 pl-7 lg:block">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">A journey through</p>
                            <p className="mt-2 text-sm font-semibold text-white/65">Origins · Faith · Valour · Today</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f1f4f7] px-5 py-20 text-[#101a29] sm:px-8 sm:py-28 lg:px-10 lg:py-36">
                <div className="mx-auto max-w-[1440px]">
                    <div className="mb-16 max-w-3xl sm:mb-24">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1769e0]">The timeline</p>
                        <h2 className="mt-5 text-4xl font-black leading-[1] tracking-tight sm:text-6xl">
                            Sixteen chapters.
                            <span className="text-black/25"> One living story.</span>
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-5 top-0 h-full w-px bg-black/10 sm:left-1/2 sm:-translate-x-1/2" />

                        <div className="space-y-12 sm:space-y-20">
                            {timeline.map((item, index) => {
                                const left = index % 2 === 0;

                                return (
                                    <article key={`${item.year}-${item.title}`} className="relative grid grid-cols-[44px_1fr] gap-5 sm:grid-cols-2 sm:gap-16">
                                        <div className="absolute left-0 top-5 z-10 grid size-10 place-items-center rounded-full border-4 border-[#f1f4f7] bg-[#1769e0] text-[9px] font-black text-white sm:left-1/2 sm:-translate-x-1/2">
                                            {String(index + 1).padStart(2, "0")}
                                        </div>

                                        <div className={`${left ? "sm:col-start-1 sm:pr-16 sm:text-right" : "sm:col-start-2 sm:pl-16 sm:pt-20"}`}>
                                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1769e0]">{item.tag}</p>
                                            <p className="mt-3 text-3xl font-black tracking-tight text-black/15 sm:text-5xl">{item.year}</p>
                                        </div>

                                        <div className={`${left ? "sm:col-start-2 sm:pl-16 sm:pt-20" : "sm:col-start-1 sm:row-start-1 sm:pr-16 sm:text-right"}`}>
                                            <div className={`rounded-[28px] border border-black/10 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-9 ${item.type === "war" ? "bg-[#101b2b] text-white" : ""}`}>
                                                <p className={`text-[10px] font-bold uppercase tracking-[0.25em] ${item.type === "war" ? "text-[#83b9ff]" : "text-[#1769e0]"}`}>{item.type}</p>
                                                <h3 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">{item.title}</h3>
                                                <p className={`mt-2 text-sm font-semibold ${item.type === "war" ? "text-white/45" : "text-black/40"}`}>{item.subtitle}</p>
                                                <p className={`mt-5 text-sm leading-7 sm:text-base ${item.type === "war" ? "text-white/55" : "text-black/55"}`}>{item.text}</p>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#07111f] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
                <div className="mx-auto max-w-[1440px]">
                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#83b9ff]">The sacred network</p>
                            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                                History isn't kept in one building.
                            </h2>
                            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                                It lives across gompas, nunneries, bridges, stupas, sacred landscapes and generations of Monpa traditions.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {heritage.map(([name, description], index) => (
                                <div key={name} className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-black text-[#83b9ff]">0{index + 1}</span>
                                        <span className="text-white/20 transition group-hover:text-[#83b9ff]">↗</span>
                                    </div>
                                    <h3 className="mt-10 text-lg font-extrabold">{name}</h3>
                                    <p className="mt-2 text-sm leading-6 text-white/40">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#e8edf3] px-5 py-20 text-[#101a29] sm:px-8 sm:py-28 lg:px-10 lg:py-36">
                <div className="absolute right-[-100px] top-[-100px] text-[24rem] font-black leading-none tracking-[-0.15em] text-black/[0.025]">108</div>

                <div className="relative mx-auto max-w-[1440px]">
                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1769e0]">Sacred Tawang</p>
                            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
                                108
                                <span className="ml-2 text-black/20">HOLY</span>
                                <br />
                                WATERFALLS
                            </h2>
                        </div>

                        <div>
                            <p className="max-w-xl text-sm leading-7 text-black/50 sm:text-base">
                                Chumi Gyatse is a sacred landscape of 108 cascades near Tawang's frontier. The site is revered by Monpa and Tibetan Buddhist communities and is surrounded by local spiritual traditions.
                            </p>

                            <div className="mt-8 grid grid-cols-3 divide-x divide-black/10 rounded-2xl border border-black/10 bg-white/60 py-5">
                                <div className="text-center">
                                    <p className="text-3xl font-black">108</p>
                                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-black/35">Cascades</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-black">∞</p>
                                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-black/35">Tradition</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-black">H</p>
                                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-black/35">Heritage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#0a1625] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
                <div className="mx-auto max-w-[1440px]">
                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#83b9ff]">Frontier & valour</p>
                            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                                Where history became courage.
                            </h2>
                            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                                The Tawang landscape also carries the memory of the 1962 war and the soldiers who defended this difficult Himalayan frontier.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {frontier.map(([name, year], index) => (
                                <article key={name} className="group flex items-center gap-5 rounded-[24px] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-7">
                                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-xs font-black text-[#83b9ff]">{String(index + 1).padStart(2, "0")}</span>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg font-extrabold sm:text-xl">{name}</h3>
                                        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/30">{year}</p>
                                    </div>
                                    <span className="text-xl text-white/20 transition group-hover:translate-x-1 group-hover:text-[#83b9ff]">→</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#07111f] px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
                <div className="mx-auto max-w-[1440px]">
                    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_80%_20%,rgba(23,105,224,0.35),transparent_35%),linear-gradient(135deg,#102d4d,#07111f)] p-8 sm:p-12 lg:p-20">
                        <div className="absolute right-[-100px] top-[-140px] size-[420px] rounded-full border border-white/[0.07]" />
                        <div className="relative max-w-4xl">
                            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#83b9ff]">Today</p>
                            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                                The story continues with you.
                            </h2>
                            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                                Tawang's history is not frozen in monuments. It continues through its people, festivals, monasteries, mountains and every traveller who arrives with curiosity.
                            </p>

                            <a href="/explore-tawang" className="mt-9 inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-[#1769e0] transition hover:bg-[#1769e0] hover:text-white">
                                Explore Tawang
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}