import { motion, useScroll } from 'framer-motion';
// import { useRef } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';
import TravelCard from '../components/TravelCard';

const Home = () => {
    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start start", "end start"]
    // });

    const highlights = [
        {
            id: 1,
            title: "Maldives Paradise",
            location: "Maldives",
            price: "$1,299",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rating: 4.9
        },
        {
            id: 2,
            title: "Swiss Alps Adventure",
            location: "Switzerland",
            price: "$2,499",
            image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rating: 4.8
        },
        {
            id: 3,
            title: "Kyoto Cherry Blossoms",
            location: "Japan",
            price: "$1,899",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rating: 4.7
        }
    ];

    return (
        <>
            <SEO
                title="Home | Rastha - United Solutions"
                description="Discover your next adventure with Rastha. We offer curated travel experiences to the world's most beautiful destinations."
            />

            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            Rastha
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
                            United Solutions
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <Button size="lg" variant="primary">Start Your Journey</Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                View Packages
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Highlights Section */}
            < SectionWrapper className="bg-light" >
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display font-bold text-dark mb-4">Popular Destinations</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Handpicked destinations for your next adventure. Experience the best the world has to offer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((item) => (
                        <TravelCard key={item.id} {...item} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="secondary">View All Destinations</Button>
                </div>
            </SectionWrapper >

            {/* Parallax CTA */}
            < div className="relative py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}>
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready for your next adventure?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let us handle the details while you create the memories. Book your dream vacation today.
                    </p>
                    <Button size="lg" variant="accent" className="bg-white text-primary hover:bg-gray-100">
                        Contact Us Now
                    </Button>
                </div>
            </div >
        </>
    );
};

export default Home;
