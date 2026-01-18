import { Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface PackageProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    index?: number;
}

// Hook for counting up animation
const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (!start) return;
        
        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration, start]);
    
    return count;
};

const PackageCard = ({ title, price, description, features, isPopular, index = 0 }: PackageProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    // Extract numeric value from price string
    const priceValue = parseInt(price.replace(/[^0-9]/g, ''));
    const animatedPrice = useCountUp(priceValue, 1500, isInView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            className="relative"
        >
            <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className={`relative p-8 rounded-xl backdrop-blur-sm transition-all duration-300 border h-full ${
                    isPopular 
                        ? 'bg-secondary/80 border-accent-gold shadow-lg shadow-accent-gold/10' 
                        : 'bg-primary/50 border-white/10 hover:border-white/30'
                }`}
            >
                {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-accent-gold text-black text-xs font-bold uppercase tracking-widest rounded-full">
                        Most Popular
                    </div>
                )}
                
                <h3 className="text-2xl font-serif text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{description}</p>
                
                <div className="text-4xl text-accent-gold font-light mb-8">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        ${animatedPrice.toLocaleString()}
                    </motion.span>
                </div>
                
                <ul className="space-y-4 mb-8">
                    {features.map((feature, i) => (
                        <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                            className="flex items-start text-sm text-gray-300"
                        >
                            <Check size={16} className="text-accent-gold mr-3 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                        </motion.li>
                    ))}
                </ul>
                
                <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 font-medium ${
                        isPopular 
                            ? 'bg-accent-gold text-black hover:bg-white' 
                            : 'border border-white/20 text-white hover:bg-white hover:text-black'
                    }`}
                >
                    Select Package
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default PackageCard;

