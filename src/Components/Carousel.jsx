import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const carouselRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    // Define category items with colored backgrounds instead of images
    const categoryItems = [
        {
            title: "Breakfast",
            path: "/recipes/Breakfast",
            color: "bg-amber-100",
            icon: "🍳"
        },
        {
            title: "Lunch",
            path: "/recipes/Lunch",
            color: "bg-emerald-100",
            icon: "🥗"
        },
        {
            title: "Dinner",
            path: "/recipes/Dinner",
            color: "bg-indigo-100",
            icon: "🍲"
        },
        {
            title: "Desserts",
            path: "/recipes/Dessert",
            color: "bg-rose-100",
            icon: "🍰"
        },
        {
            title: "Snacks",
            path: "/recipes/Snack",
            color: "bg-orange-100",
            icon: "🥨"
        },
    ];

    // Check for scrollability on mount
    useEffect(() => {
        if (carouselRef.current) {
            checkScrollButtons();
        }
    }, []);

    const checkScrollButtons = () => {
        const container = carouselRef.current;
        if (!container) return;

        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(container.scrollLeft + container.offsetWidth < container.scrollWidth);
    };

    const scroll = (direction) => {
        const container = carouselRef.current;
        const scrollAmount = direction === 'left' ? -300 : 300;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        // Update button visibility after scrolling
        setTimeout(checkScrollButtons, 300);
    };

    const handleScroll = () => {
        checkScrollButtons();
    };

    return (
        <div className="relative py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-purple-900 mb-6">Popular Categories</h2>

                <div className="relative">
                    {/* Left Button */}
                    {showLeftButton && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 nav-links"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} className="text-purple-700" />
                        </button>
                    )}

                    {/* Carousel Container */}
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto gap-6 pb-6 pt-2 px-2 scrollbar-hide"
                        onScroll={handleScroll}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {categoryItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="flex-none w-64 md:w-72 h-48"
                            >
                                <div className="neumorphic-card-sm h-full overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 relative">
                                    <div className="p-5 h-full">
                                        <h3 className="font-medium text-xl text-purple-800 mb-2">{item.title}</h3>
                                        <p className="text-purple-600 text-sm">Explore delicious {item.title.toLowerCase()} recipes</p>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 w-24 h-24 overflow-hidden ${item.color} flex items-center justify-center rounded-tl-3xl`}>
                                        <span className="text-4xl">{item.icon}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Right Button */}
                    {showRightButton && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 nav-links"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} className="text-purple-700" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Carousel;