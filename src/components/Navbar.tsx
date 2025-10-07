/**
 * Navbar Component
 * 
 * A flexible navigation bar component that supports different icon variants and backgrounds.
 * 
 * @example
 * // Transparent navbar with transparent icons (default)
 * <Navbar />
 * 
 * // White navbar with white icons
 * <Navbar iconVariant="white" background="white" />
 * 
 * // Transparent navbar with white logo and transparent icons
 * <Navbar logoColor="white" iconVariant="transparent" background="transparent" />
 * 
 * @param iconVariant - "white" | "transparent" - Choose between white or transparent icons
 * @param logoColor - "normal" | "white" - Choose between normal or white logo
 * @param background - "white" | "transparent" - Choose between white or transparent background
 */

import React, { useState } from "react";
import LanguagePopup from "./LanguagePopup";
import Heart from "../svgs/white/Heart";
import Bell from "../svgs/white/Bell";
import Comparator from "../svgs/white/Comparator";
import Earth from "../svgs/white/Earth";
import Profile from "../svgs/white/Profile";
import Moon from "../svgs/white/Moon";
import ColHeart from "../svgs/colored/ColHeart";
import ColBell from "../svgs/colored/ColBell";
import ColComparator from "../svgs/colored/ColComparator";
import ColEarth from "../svgs/colored/ColEarth";
import ColProfile from "../svgs/colored/ColProfile";
import ColMoon from "../svgs/colored/ColMoon";
import NexaLogo from "../svgs/logos/NexaLogo";
import WhiteNexaLogo from "../svgs/logos/WhiteNexaLogo";
import TrHeart from "../svgs/transparent/TrHeart";
import TrBell from "../svgs/transparent/TrBell";
import TrComparator from "../svgs/transparent/TrComparator";
import TrProfile from "../svgs/transparent/TrProfile";
import TrEarth from "../svgs/transparent/TrEarth";
import TrMoon from "../svgs/transparent/TrMoon";
import AppModePopup from "./AppModePopup";

interface NavbarProps {
    iconVariant?: "white" | "transparent"; // optional prop, defaults to transparent
    logoColor?: "normal" | "white"; // optional prop, defaults to normal
    background?: "white" | "transparent"; // optional prop, defaults to transparent
}

interface NavItem {
    id: string;
    name: string;
    TransparentIcon: React.ComponentType;
    WhiteIcon: React.ComponentType;
    ColoredIcon: React.ComponentType;
    size: "normal" | "large";
    onClick?: () => void;
}

export default function Navbar({ 
    iconVariant = "transparent", 
    logoColor = "normal", 
    background = "transparent" 
}: NavbarProps) {
    const [isLanguagePopupOpen, setIsLanguagePopupOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('fr'); // Default to French
    const [isAppModePopupOpen, setIsAppModePopupOpen] = useState(false);
    const [currentAppMode, setCurrentAppMode] = useState('system'); // Default to System

    const handleLanguageChanging = () => {
        setIsLanguagePopupOpen(!isLanguagePopupOpen);
    };

    const handleLanguageChange = (languageCode: string) => {
        setCurrentLanguage(languageCode);
        // Here you can add logic to change the app language
        console.log('Language changed to:', languageCode);
    };

    const handleAppModeChanging = () => {
        setIsAppModePopupOpen(!isAppModePopupOpen);
    };

    const handleAppModeChange = (appModeCode: string) => {
        setCurrentAppMode(appModeCode);
        // Here you can add logic to change the app mode
        console.log('App mode changed to:', appModeCode);
    };

    // Navigation items configuration
    const navItems: NavItem[] = [
        {
            id: "heart",
            name: "Heart",
            TransparentIcon: TrHeart,
            WhiteIcon: Heart,
            ColoredIcon: ColHeart,
            size: "normal"
        },
        {
            id: "bell",
            name: "Bell",
            TransparentIcon: TrBell,
            WhiteIcon: Bell,
            ColoredIcon: ColBell,
            size: "normal"
        },
        {
            id: "comparator",
            name: "Comparator",
            TransparentIcon: TrComparator,
            WhiteIcon: Comparator,
            ColoredIcon: ColComparator,
            size: "normal"
        },
        {
            id: "earth",
            name: "Earth",
            TransparentIcon: TrEarth,
            WhiteIcon: Earth,
            ColoredIcon: ColEarth,
            size: "normal",
            onClick: handleLanguageChanging
        },
        {
            id: "profile",
            name: "Profile",
            TransparentIcon: TrProfile,
            WhiteIcon: Profile,
            ColoredIcon: ColProfile,
            size: "large"
        },
        {
            id: "moon",
            name: "Moon",
            TransparentIcon: TrMoon,
            WhiteIcon: Moon,
            ColoredIcon: ColMoon,
            size: "normal",
            onClick: handleAppModeChanging
        }
    ];

    // Determine background class
    const backgroundClass = background === "white" ? "bg-white" : "bg-transparent";
    
    return (
        <nav className={`w-full h-[80px] flex fixed items-center justify-between ${backgroundClass} px-[36px] py-[18px] opacity-100`}>
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
                {logoColor === "normal" ? <NexaLogo /> : <WhiteNexaLogo />}
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-[24px]">
                {navItems.map((item) => {
                    const { id, name, TransparentIcon, WhiteIcon, ColoredIcon, size, onClick } = item;
                    const buttonSize = size === "large" ? "w-[36px] h-[36px]" : "w-[34px] h-[34px]";
                    
                    // Choose the correct icon based on variant
                    const DefaultIcon = iconVariant === "white" ? WhiteIcon : TransparentIcon;
                    
                    return (
                        <button 
                            key={id}
                            className={`${buttonSize} group`}
                            onClick={onClick}
                            aria-label={name}
                        >
                            <DefaultIcon />
                            <ColoredIcon />
                        </button>
                    );
                })}
            </div>
            
            {/* Language Popup */}
            <LanguagePopup
                isOpen={isLanguagePopupOpen}
                onClose={() => setIsLanguagePopupOpen(false)}
                onLanguageChange={handleLanguageChange}
                currentLanguage={currentLanguage}
            />

            {/* Language Popup */}
            <AppModePopup
                isOpen={isAppModePopupOpen}
                onClose={() => setIsAppModePopupOpen(false)}
                onAppModeChange={handleAppModeChange}
                currentAppMode={currentAppMode}
            />
        </nav>
    );
}
