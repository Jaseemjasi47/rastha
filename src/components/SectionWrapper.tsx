import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, id }) => {
    return (
        <section id={id} className={clsx('py-16 md:py-24', className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-4"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
