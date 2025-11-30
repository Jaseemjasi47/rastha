import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/assets/rastha_logo.png" alt="Rastha" className="h-10 w-auto brightness-0 invert" />
                            <span className="font-display font-bold text-2xl text-white">Rastha</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            United Solutions. Your gateway to world-class travel experiences.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
                            <li><Link to="/packages" className="hover:text-primary transition-colors">Packages</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 flex-shrink-0" />
                                <span>123 Travel Street, Tourism City, TC 56789</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} />
                                <span>+1 234 567 8900</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} />
                                <span>hello@rastha.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display font-bold text-lg mb-4">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and updates.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary w-full"
                            />
                            <button className="bg-primary text-white rounded-full p-2 hover:bg-primary/90 transition-colors">
                                <Mail size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Rastha. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
