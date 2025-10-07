import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";

const images = [
    "/images/bg1.png",
    "/images/bg2.png",
    "/images/bg3.png",
    "/images/bg4.png",
];

export default function HomePage4() {
    const [current, setCurrent] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000); // 5s
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed w-full h-screen overflow-hidden">
            {/* Background Carousel */}
            <div className={`absolute inset-0 transition-all duration-500 ${fullscreen ? "blur-md" : ""}`}>
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Background ${idx}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
                {/* Top-to-middle gradient shadow overlay */}
                <div
                    className="absolute inset-0 pointer-events-none h-[217px]"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.00) 100%)",
                    }}
                />
            </div>

            {/* Overlay for content (no global dark tint) */}
            <div className="relative z-10 flex flex-col w-full h-full">
                <Navbar logoColor="white" background="transparent" iconVariant="white" />
                <div className="fixed z-10 bottom-0 left-0 w-full flex justify-center p-4">
                    <SearchBar fullscreen={fullscreen} setFullscreen={setFullscreen} width={774} fullHeight={674} height={162} />
                </div>
                <div className="absolute bottom-0 right-0 w-[172px] h-[172px]">
                    <img
                        src="/images/bot.png"
                        alt="Bot"
                        className="w-full h-full animate-float"
                    />
                </div>

            </div>
        </div>
    );
}
