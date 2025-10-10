import React from 'react';
import Telescope from '../svgs/white/Telescope';
import Bag from '../svgs/white/Bag';
import Hiking from '../svgs/white/Hiking';
import Ruler from '../svgs/white/Ruler';
import File from '../svgs/white/File';
import StarRing from '../svgs/white/StarRing';
import Calendar from '../svgs/white/Calendar';

interface ServiceCard {
    id: string;
    title: string;
    icon: React.ComponentType;
    backgroundImage?: string;
    backgroundColor?: string;
    description?: string;
    buttonText?: string;
    textColor?: string;
}

const serviceCards: ServiceCard[] = [
    {
        id: 'business-travel',
        title: 'Voyage d\'affaire',
        icon: Bag,
        backgroundImage: '/images/business-travel.png',
        textColor: 'text-white'
    },
    {
        id: 'experiences',
        title: 'Expériences',
        icon: Telescope,
        backgroundImage: '/images/experiences.png',
        textColor: 'text-white'
    },
    {
        id: 'calendar',
        title: 'Calendrier',
        icon: Calendar,
        backgroundColor: '#facc15',
        description: '12/10/2025\nSalut Snoussi, il te reste deux jours avant ton départ pour Marrakech.',
        buttonText: 'Voir détail',
        textColor: 'text-slate-900'
    },
    {
        id: 'organized-travel',
        title: 'Voyage organisé',
        icon: Hiking,
        backgroundImage: '/images/voyage.png',
        textColor: 'text-white'
    },
    {
        id: 'services',
        title: 'Découvrez nos services',
        icon: Ruler,
        backgroundImage: '/images/services.png',
        textColor: 'text-white'
    },
    {
        id: 'notes',
        title: 'Mes notes',
        icon: File,
        backgroundColor: '#14b8a6',
        description: 'Programme un voyage weekend le 30 Octobre a bin lwidane',
        textColor: 'text-white'
    },
    {
        id: 'gastronomy',
        title: 'Gastronomie',
        icon: StarRing,
        backgroundImage: '/images/gastronomy.png',
        description: 'Découvrez une journée fascinante avec Chef Meriem Benhadou',
        textColor: 'text-white'
    }
];

export default function ServiceCards() {
    return (
        <div className="flex flex-col gap-6 items-center w-[840px] h-[350px] mb-[65px]">
            {/* Header */}
            <div className="flex flex-col gap-3 items-center text-center">
                <h1 className="font-zalando font-bold text-white text-[36px] leading-[28px]">
                    Votre logement idéal!
                </h1>
                <p className="font-youngserif font-normal text-white text-[18px] leading-normal">
                    Découvrez notre marketplace intelligente
                </p>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-wrap gap-[18px] items-start justify-center w-full">
                {serviceCards.map((card) => (
                    <div className="hover:p-[5px] rounded-[22px] hover:bg-nexastay-border hover:shadow-nexastay-default transition-all duration-200">
                    <div
                        key={card.id}
                        className={`card-gradient-border w-[160px] h-[160px] rounded-[22px] overflow-hidden group hover:shadow-card-hover hover:scale-105 transition-all duration-200`}
                        style={{
                            backgroundColor: card.backgroundColor || 'transparent'
                        }}
                    >
                        {/* Background Image with Overlay */}
                        {card.backgroundImage && (
                            <>
                                <img
                                    src={card.backgroundImage}
                                    alt={card.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </>
                        )}

                        {/* Content */}
                        <div className={`relative z-10 h-full flex flex-col gap-[8px] p-[11px] ${card.backgroundColor ? 'justify-start' : 'justify-end'
                            }`}>
                            {/* Icon and Title */}
                            <div className={`flex gap-[3px] items-center ${card.id === 'services' ? ' flex-row' : 'flex-nowrap'
                                }`}>
                                <div className="w-5 h-5 flex items-center justify-center text-[16px]">
                                    <card.icon />
                                </div>
                                <h3 className={`font-outfit font-bold text-[14px] leading-[14px] ${card.textColor} ${card.id === 'services' ? 'whitespace-normal' : 'whitespace-nowrap'
                                    }`}>
                                    {card.title}
                                </h3>
                            </div>

                            {/* Description */}
                            {card.description && (
                                <p
                                    className={`font-outfit font-medium text-[11px] leading-[12px] ${card.textColor}`}
                                >
                                    {card.description.split('\n').map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            {index < card.description!.split('\n').length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            )}

                            {/* Button */}
                            {card.buttonText && (
                                <button className={`bg-slate-900 flex gap-2 mt-[25px] items-center justify-center px-[12px] py-[5px] rounded-[10px] w-full ${card.backgroundColor === '#facc15' ? 'bg-slate-900' : 'bg-slate-900'
                                    }`}>
                                    <span className="font-outfit font-medium text-white text-[14px] leading-[20px]">
                                        {card.buttonText}
                                    </span>
                                    <div className="w-5 h-5 flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
