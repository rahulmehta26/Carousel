import React from "react";
import type { CarouselProps } from "../content/carouselItems";

interface CarouselItemProps {
    item: CarouselProps;
    index: number;
    setIsPaused: (value: boolean) => void;
}
const CarouselItem: React.FC<CarouselItemProps> = ({ item, index, setIsPaused }) => {
    return (
        <div
            key={`${item.id}-${index}`}
            className="bg-white flex-shrink-0 w-80 md:w-96 h-fit rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300  ease-out border border-gray-200 overflow-hidden hover:shadow-2xl pb-2
      "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >

            <div className="relative h-48 md:h-52 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <p className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full ">
                        {item.category}
                    </p>
                </div>
            </div>


            <div className="p-6 flex flex-col justify-between h-32 md:h-44">
                <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 font-sans leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 line-clamp-2">
                        {item.description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <button className="text-blue-600 font-semibold border-2 px-3 py-2 rounded-full hover:bg-blue-800 text-sm hover:text-white cursor-pointer transition-colors">
                        Learn More →
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
