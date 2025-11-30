import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionWrapper from '../components/SectionWrapper';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ];

    return (
        <>
            <SEO title="Gallery" description="See the world through our lens." />

            <div className="pt-32 pb-12 bg-dark text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-display font-bold mb-4">Gallery</h1>
                    <p className="text-xl text-gray-400">Moments captured around the globe</p>
                </div>
            </div>

            <SectionWrapper>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="break-inside-avoid rounded-xl overflow-hidden group relative"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
};

export default Gallery;
