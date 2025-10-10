import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar';
import AnimatedBg from '../components/AnimatedBg';

function HomePage2() {
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <div className="fixed w-full h-screen overflow-hidden">
            {/* Animated background */}
            <AnimatedBg />

            {/* Foreground content */}
            <div className="z-10 flex flex-col h-full fixed w-full">
                {/* Navbar */}
                <Navbar logoColor="normal" background="transparent" iconVariant="transparent" />

                {/* Main content */}
                <div className="flex flex-1 flex-row items-center justify-center gap-[138px] px-6">
                    {/* Left Section */}
                    <div className='flex flex-col gap-2 justify-center items-center w-[492px] h-[382px]'>
                        <p className="font-youngserif font-normal text-[38px] text-center text-nexastay-gradient">Votre logement idéal!</p>
                        <p className="font-zalando text-[18px] text-center">Découvrez notre marketplace intelligente</p>
                        <SearchBar fullscreen={fullscreen} setFullscreen={setFullscreen} width={492} height={294} fullHeight={500} />
                    </div>

                    {/* Right Section (Banner) */}
                    <div className="w-[516px] h-[630px] overflow-hidden rounded-[40px] shadow-lg mt-[80px]">
                        <img
                            src={'/images/banner2.png'}
                            alt="Banner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[172px] h-[172px] z-20">
                <img
                    src="/images/bot.png"
                    alt="Bot"
                    className="w-full h-full animate-float"
                />
            </div>
        </div>
    )
}

export default HomePage2