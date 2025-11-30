import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import SEO from '../components/SEO';
import SectionWrapper from '../components/SectionWrapper';
import TravelCard from '../components/TravelCard';

const Destinations = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const destinations = [
        { id: 1, title: "Maldives Paradise", location: "Maldives", price: "$1,299", category: "Beach", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
        { id: 2, title: "Swiss Alps", location: "Switzerland", price: "$2,499", category: "Mountain", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
        { id: 3, title: "Kyoto", location: "Japan", price: "$1,899", category: "City", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
        { id: 4, title: "Santorini", location: "Greece", price: "$1,599", category: "Beach", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
        { id: 5, title: "Machu Picchu", location: "Peru", price: "$2,199", category: "Mountain", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
        { id: 6, title: "New York City", location: "USA", price: "$1,499", category: "City", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
    ];

    const categories = ['All', 'Beach', 'Mountain', 'City'];

    const filteredDestinations = destinations.filter(dest => {
        const matchesFilter = filter === 'All' || dest.category === filter;
        const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dest.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <>
            <SEO title="Destinations" description="Explore our wide range of travel destinations." />

            <div className="pt-32 pb-12 bg-dark text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-display font-bold mb-4">Destinations</h1>
                    <p className="text-xl text-gray-400">Find your perfect getaway</p>
                </div>
            </div>

            <SectionWrapper>
                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full transition-colors whitespace-nowrap ${filter === cat
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search destinations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-primary"
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredDestinations.map((dest) => (
                            <motion.div
                                key={dest.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TravelCard {...dest} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredDestinations.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No destinations found matching your criteria.
                    </div>
                )}
            </SectionWrapper>
        </>
    );
};

export default Destinations;
