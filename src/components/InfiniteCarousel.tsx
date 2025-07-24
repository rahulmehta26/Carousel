import { useState } from "react";
import carouselItems from "../content/carouselItems";
import CarouselItem from "./CarouselItem";
import GradientOverlay from "./GradientOverlay";


const InfiniteTreadmillCarousel = () => {
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const duplicatedItems = [...carouselItems, ...carouselItems];

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden relative">
            <div className="w-full">
                <div className="text-center mb-12 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">
                        Tech Stack Insights
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Navigate the evolving landscape of AI, full-stack development, and emerging technologies
                    </p>
                </div>

                <div className="relative">
                    <div
                        className={`flex gap-6 w-fit scroll-animation ${isPaused ? "scroll-paused" : ""
                            }`}
                    >
                        {duplicatedItems.map((item, index) => (
                            <CarouselItem key={`${item.id}-${index}`} item={item} index={index} setIsPaused={setIsPaused} />
                        ))}
                    </div>
                </div>

                <GradientOverlay />
            </div>
        </div>
    );
};

export default InfiniteTreadmillCarousel;
