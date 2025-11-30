import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Button from '../components/Button';

const NotFound = () => {
    return (
        <>
            <SEO title="404 Not Found" />
            <div className="h-screen flex flex-col items-center justify-center bg-light text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-9xl font-display font-bold text-primary mb-4"
                >
                    404
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl text-dark mb-8"
                >
                    Oops! Looks like you've wandered off the path.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link to="/">
                        <Button size="lg">Return Home</Button>
                    </Link>
                </motion.div>
            </div>
        </>
    );
};

export default NotFound;
