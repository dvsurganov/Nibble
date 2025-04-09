// src/Components/Carousel.jsx
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ title, items = [] }) => {  // Add default empty array
    const carouselRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const scroll = (direction) => {
        const container = carouselRef.current;
        const scrollAmount = direction === 'left' ? -300 : 300;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        // Update button visibility after scrolling
        setTimeout(() => {
            setShowLeftButton(container.scrollLeft > 0);
            setShowRightButton(container.scrollLeft + container.offsetWidth < container.scrollWidth);
        }, 300);
    };

    const handleScroll = () => {
        const container = carouselRef.current;
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(container.scrollLeft + container.offsetWidth < container.scrollWidth);
    };

    return (
        <div className="relative py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>

                <div className="relative">
                    {/* Left Button */}
                    {showLeftButton && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} className="text-purple-600" />
                        </button>
                    )}

                    {/* Carousel Container */}
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
                        onScroll={handleScroll}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Check if items exists and is an array before mapping */}
                        {Array.isArray(items) && items.length > 0 ? (
                            items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-48 md:w-56"
                                >
                                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-200">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-32 object-cover"
                                        />
                                        <div className="p-4 text-center">
                                            <h3 className="font-medium text-gray-800">{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-gray-500 py-4">No items available</div>
                        )}
                    </div>

                    {/* Right Button */}
                    {showRightButton && items && items.length > 0 && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} className="text-purple-600" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
