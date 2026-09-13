"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VerificationPage() {
    const circleClass="absolute left-1/2 top-0 flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#D6B56C]/70 bg-[#D6B56C]/0.08 text-xs font-bold text-[#F5F0E6] shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-white/20 active:scale-95";
    const router = useRouter();
    const [code, setCode] = useState(["", "", "", ""]);
    const [verificationStatus, setVerificationStatus] = useState<"idle" | "correct" | "error">("idle");

    const handleChange = (index: number, value: string) => {
        const letter = value.slice(-1).toUpperCase();

        const updated = [...code];
        updated[index] = letter;

        setCode(updated);

        
    };

    const handleLetterClick = (letter: string) => {
        const emptyIndex = code.findIndex((value) => value === "");
      
        if (emptyIndex === -1) return;
      
        const updated = [...code];
        updated[emptyIndex] = letter;
      
        setCode(updated);

        if(emptyIndex === 3 && letter) {
            const enteredCode = updated.join("");

            if(enteredCode === "ROBO") {
                setTimeout(() => {
                    router.push("/common/login");
                }, 400);
            } else {
                setVerificationStatus("error");
            }
        }
    };

    const inputClass = 'size-12 rounded-xl border border-[#D6B56C] bg-[#11100D] text-center text-lg font-bold text-[#F5F0E6] outline-none backdrop-blur-md transition focus:border-white/60 focus:bg-white/15';

    return (
        <main className="min-h-screen bg-[#080706]">
            <div className="flex min-h-screen flex-col items-center justify-center px-6 py-10">

                <h1 className="mb-7 -translate-y-6 text-2xl font-bold tracking-wide text-[#F5F0E6]">Verification</h1>

                <div className="relative -translate-y-12 flex w-full justify-center">

                    <div className="absolute left-[calc(50%-580px)] top-1/2 flex -translate-y-1/2 gap-3">
                        <div className={inputClass} />
                        <div className={inputClass} />
                    </div>

                    <div className="relative h-[560px] w-[350px] shrink-0 overflow-hidden rounded-[28px] border border-[#D6B56C] bg-[#11100D] shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">

                        <div className="absolute left-0 top-1/2 size-0">

                            <div className="absolute left-0 bottom-0 h-[165px] w-px origin-bottom animate-[lineDance1_7.2s_ease-in-out_-1.8s_infinite_alternate] bg-[#D6B56C]/45">
                                <button type="button" onClick={() => handleLetterClick("B")} className={circleClass} >B</button>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[120px] w-px origin-bottom animate-[lineDance2_5.7s_ease-in-out_-2.4s_infinite_alternate] bg-[#D6B56C]/45">
                                <button type="button" onClick={() => handleLetterClick("I")} className={circleClass} >I</button>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[150px] w-px origin-bottom animate-[lineDance3_6.4s_ease-in-out_-0.7s_infinite_alternate] bg-[#D6B56C]/45">
                                <button type="button" onClick={() => handleLetterClick("O")} className={circleClass} >O</button>
                            </div>

                            <div className="absolute left-0 bottom-0 h-[195px] w-px origin-bottom animate-[lineDance4_8.1s_ease-in-out_-3.1s_infinite_alternate] bg-[#D6B56C]/45">
                                <button type="button" onClick={() => handleLetterClick("R")} className={circleClass} >R</button>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[135px] w-px origin-bottom animate-[lineDance5_5.1s_ease-in-out_-1.2s_infinite_alternate] bg-[#D6B56C]/45">
                                <button type="button" onClick={() => handleLetterClick("S")} className={circleClass} >S</button>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[240px] w-px origin-bottom animate-[lineDance6_7.8s_ease-in-out_-4.0s_infinite_alternate] bg-[#D6B56C]/45">
                                <button type="button" onClick={() => handleLetterClick("O")} className={circleClass} >O</button>
                            </div>

                            <div className="absolute left-0 bottom-0 h-[180px] w-px origin-bottom animate-[lineDance7_6.0s_ease-in-out_-2.7s_infinite_alternate] bg-[#D6B56C]/45">
                                <button type="button" onClick={() => handleLetterClick("L")} className={circleClass} >L</button>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[210px] w-px origin-bottom animate-[lineDance8_8.7s_ease-in-out_-5.2s_infinite_alternate] bg-[#D6B56C]/45">
                                <button type="button" onClick={() => handleLetterClick("T")} className={circleClass} >T</button>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[255px] w-px origin-bottom animate-[lineDance9_6.8s_ease-in-out_-3.6s_infinite_alternate] bg-[#D6B56C]/45">
                                <button type="button" onClick={() => handleLetterClick("S")} className={circleClass} >S</button>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[225px] w-px origin-bottom animate-[lineDance10_9.2s_ease-in-out_-6.1s_infinite_alternate] bg-[#D6B56C]/45">
                                <button type="button" onClick={() => handleLetterClick("A")} className={circleClass} >A</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute right-[calc(50%-580px)] top-1/2 flex -translate-y-1/2 gap-3">
                        <div className={inputClass} />
                        <div className={inputClass} />
                    </div>

                    {/* Bottom Boxes */}
                    <div className="absolute left-1/2 top-full mt-5 flex -translate-x-1/2 gap-3">
                        {[0,1,2,3].map((index) => (
                            <input
                                key={index}
                                value={code[index]}
                                maxLength={1}
                                onChange={(e) => handleChange(index, e.target.value)}
                                className={`${inputClass} ${
                                    verificationStatus === "correct"
                                        ? "border-green-400"
                                        : verificationStatus === "error"
                                            ? "border-red-400"
                                            : ""
                                }`}
                            />
                        ))}
                    </div>
                      
                </div>
            </div>
        </main>
    );
}