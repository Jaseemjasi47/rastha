import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Destinations', path: '/destinations' },
        { name: 'Packages', path: '/packages' },
        { name: 'About Us', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
                isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src="assets/rastha_logo.png" alt="Rastha" className="h-10 w-auto" />
                    <span className={clsx("font-display font-bold text-2xl", isScrolled ? "text-primary" : "text-white")}>
                        Rastha
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-primary',
                                location.pathname === link.path ? 'text-primary' : isScrolled ? 'text-dark' : 'text-white'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="sm" variant={isScrolled ? 'primary' : 'secondary'}>
                        Book Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-dark"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu className={isScrolled ? 'text-dark' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={clsx(
                                        'text-base font-medium py-2',
                                        location.pathname === link.path ? 'text-primary' : 'text-dark'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full">Book Now</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
