import React from "react";

interface NavbarProps {
  variant?: "white" | "transparent"; // optional prop, defaults to transparent
  logo?: string;
  background?: string;
}

export default function Navbar({ variant = "transparent", logo = "/images/white-nexa-logo.png", background = "transparent" }: NavbarProps) {
  // choose correct icon folder path
  const iconBasePath = variant === "white" ? "/icons/white" : "/icons";

  return (
    <nav className={`w-full h-[80px] flex fixed items-center justify-between bg-${background} px-[36px] py-[18px] opacity-100`}>
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="NexaStay Logo"
          className="w-[181px] h-[44px]"
          draggable={false}
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-[24px]">
        {[
          "heart",
          "bell",
          "comparator",
          "earth",
          "profile",
          "sun",
        ].map((icon, idx) => (
          <button key={idx} className={`${icon === "profile" ? "w-[36px] h-[36px]" : "w-[34px] h-[34px]"} group`}>
            <img
              src={`${iconBasePath}/${icon}.png`}
              alt={icon}
              className="w-full h-full group-hover:hidden"
              draggable={false}
            />
            <img
              src={`/icons/colored/${icon}.png`}
              alt={`${icon} hover`}
              className="w-full h-full hidden group-hover:block"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
