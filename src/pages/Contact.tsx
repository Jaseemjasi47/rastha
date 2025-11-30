import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <SEO title="Contact Us" description="Get in touch with Rastha for your travel needs." />

            <div className="pt-32 pb-12 bg-dark text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-display font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-400">We're here to help you plan your next adventure</p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-2xl shadow-lg"
                    >
                        <h2 className="text-2xl font-display font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors" placeholder="Tell us about your travel plans..."></textarea>
                            </div>
                            <Button className="w-full">Send Message</Button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-display font-bold mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark">Visit Us</h3>
                                        <p className="text-gray-600">123 Travel Street, Tourism City, TC 56789</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark">Call Us</h3>
                                        <p className="text-gray-600">+1 234 567 8900</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark">Email Us</h3>
                                        <p className="text-gray-600">hello@rastha.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1623163723562!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </>
    );
};

export default Contact;
