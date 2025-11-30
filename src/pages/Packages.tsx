import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionWrapper from '../components/SectionWrapper';
import TravelCard from '../components/TravelCard';
import { Check } from 'lucide-react';

const Packages = () => {
    const packages = [
        {
            id: 1,
            title: "Maldives Honeymoon Special",
            location: "Maldives",
            price: "$2,499",
            duration: "5 Days / 4 Nights",
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            features: ["All Inclusive", "Water Villa", "Spa Treatment", "Candlelight Dinner"]
        },
        {
            id: 2,
            title: "European Grand Tour",
            location: "Europe",
            price: "$3,999",
            duration: "12 Days / 11 Nights",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            features: ["Flights Included", "4-Star Hotels", "Guided Tours", "Breakfast Daily"]
        },
        {
            id: 3,
            title: "Bali Island Escape",
            location: "Indonesia",
            price: "$1,299",
            duration: "7 Days / 6 Nights",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            features: ["Private Pool Villa", "Cultural Tours", "Airport Transfers", "Daily Yoga"]
        }
    ];

    return (
        <>
            <SEO title="Packages" description="Exclusive travel packages curated just for you." />

            <div className="pt-32 pb-12 bg-dark text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-display font-bold mb-4">Exclusive Packages</h1>
                    <p className="text-xl text-gray-400">Curated experiences for unforgettable memories</p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
                        >
                            <div className="relative h-48">
                                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                                    {pkg.price}
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="mb-4">
                                    <h3 className="font-display font-bold text-xl mb-2">{pkg.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4">{pkg.duration} • {pkg.location}</p>
                                    <div className="space-y-2">
                                        {pkg.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <Check size={16} className="text-secondary" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <button className="w-full bg-dark text-white py-3 rounded-full font-medium hover:bg-primary transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
};

export default Packages;
