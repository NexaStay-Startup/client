import { useState } from 'react'
import BgCyan from '../components/BgCyan'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import ServiceCards from '../components/ServiceCards'

interface User {
    img: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    voyageFav: Voyage;
    experienceFav: Experience;
    upComingVoyage: Voyage;
    note: Note;
    restaurantFav: Restaurant;
}

interface Voyage {
    img: string;
    name: string;
    description: string;
}

interface Experience {
    img: string;
    name: string;
    description: string;
}

interface Note {
    img: string;
    name: string;
    description: string;
}

interface Restaurant {
    img: string;
    name: string;
    description: string;
}

const user: User = {
    img: "/images/boy.png",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    address: "123 Main St",
    city: "New York",
    country: "USA",
    voyageFav: { img: "/images/voyage.png", name: "Voyage", description: "Voyage à Paris" },
    experienceFav: { img: "/images/experience.png", name: "Experience", description: "Experience à Paris" },
    upComingVoyage: { img: "/images/voyage.png", name: "Voyage", description: "Voyage à Paris" },
    note: { img: "/images/note.png", name: "Note", description: "Note à Paris" },
    restaurantFav: { img: "/images/restaurant.png", name: "Restaurant", description: "Restaurant à Paris" },
}

function Homepage3() {
    const [fullscreen, setFullscreen] = useState(false);
    return (
        <div className="fixed w-full h-screen overflow-hidden">
            <BgCyan /> 
            <div className={`z-10 flex flex-col h-full fixed w-full ${fullscreen ? "blur-md" : ""}`}>
                <Navbar logoColor="normal" background="transparent" iconVariant="transparent" profileImg={user.img} />
                
                {/* Main content area */}
                <div className="flex-1 flex items-center justify-center px-6 pb-24">
                    <ServiceCards />
                </div>
            </div>

            <div className="fixed z-10 bottom-0 left-0 w-full flex justify-center p-4">
                <SearchBar fullscreen={fullscreen} setFullscreen={setFullscreen} width={774} fullHeight={500} height={162} />
            </div>
            <div className="absolute bottom-0 right-0 w-[172px] h-[172px]">
                <img
                    src="/images/bot.png"
                    alt="Bot"
                    className="w-full h-full animate-float"
                />
            </div>
        </div>
    )
}

export default Homepage3