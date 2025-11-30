import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
    const team = [
        { name: "John Doe", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Jane Smith", role: "Head of Operations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Mike Johnson", role: "Travel Specialist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
    ];

    return (
        <>
            <SEO title="About Us" description="Learn more about Rastha and our mission." />

            <div className="pt-32 pb-12 bg-dark text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-display font-bold mb-4">About Rastha</h1>
                    <p className="text-xl text-gray-400">United Solutions for Global Travel</p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Our Team"
                            className="rounded-2xl shadow-xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-display font-bold mb-6 text-primary">Our Story</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Rastha was born from a passion for exploration and a desire to make world-class travel accessible to everyone. We believe that travel is not just about visiting new places, but about connecting with cultures, people, and yourself.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            With our tagline "United Solutions", we aim to provide comprehensive travel solutions that cater to every need. Whether you're looking for a relaxing beach vacation, an adventurous mountain trek, or a cultural city tour, we have the perfect package for you.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <h3 className="text-4xl font-bold text-dark">10k+</h3>
                                <p className="text-gray-500">Happy Travelers</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-dark">50+</h3>
                                <p className="text-gray-500">Destinations</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-dark">24/7</h3>
                                <p className="text-gray-500">Support</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold mb-4">Meet Our Team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        The passionate individuals behind Rastha who make your dream vacations a reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-display font-bold text-xl">{member.name}</h3>
                            <p className="text-primary font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
};

export default About;
