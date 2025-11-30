import { motion } from 'framer-motion';
import { MapPin, Clock, Star } from 'lucide-react';
import Button from './Button';

interface TravelCardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    duration?: string;
    rating?: number;
}

const TravelCard: React.FC<TravelCardProps> = ({ image, title, location, price, duration, rating }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg group"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary">
                    {price}
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <MapPin size={16} className="text-primary" />
                    <span>{location}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    {duration && (
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{duration}</span>
                        </div>
                    )}
                    {rating && (
                        <div className="flex items-center gap-1">
                            <Star size={16} className="text-accent fill-accent" />
                            <span>{rating}</span>
                        </div>
                    )}
                </div>
                <Button variant="outline" className="w-full">View Details</Button>
            </div>
        </motion.div>
    );
};

export default TravelCard;
