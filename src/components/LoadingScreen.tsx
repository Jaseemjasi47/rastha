import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-light">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="flex flex-col items-center"
            >
                <img src="/assets/rastha_logo.png" alt="Rastha Logo" className="w-32 h-auto mb-4" />
                <h1 className="text-2xl font-display font-bold text-primary">Rastha</h1>
                <p className="text-dark/60">United Solutions</p>
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
