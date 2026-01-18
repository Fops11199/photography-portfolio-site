import { motion } from 'framer-motion';

const steps = [
    { number: '01', title: 'Consultation', description: 'We meet to discuss your vision, style preferences, and event details.' },
    { number: '02', title: 'Proposal', description: 'You receive a custom quote tailored to your specific needs.' },
    { number: '03', title: 'Booking', description: 'Secure your date with a contract and deposit.' },
    { number: '04', title: 'Planning', description: 'Final details review and timeline creation 2 weeks before.' },
    { number: '05', title: 'The Event', description: 'We capture your moments while you enjoy the celebration.' },
    { number: '06', title: 'Delivery', description: 'Receive your curated, edited gallery within 4-6 weeks.' },
];

const ProcessTimeline = () => {
    return (
        <div className="relative">
            {/* Center Line for Desktop - Animated */}
            <motion.div 
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ 
                    originY: 0,
                    background: 'linear-gradient(to bottom, transparent, #D4AF37, transparent)'
                }}
            />

            <div className="space-y-12 md:space-y-24">
                {steps.map((step, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        
                        <motion.div 
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="flex-1 w-full md:w-1/2 p-6 text-center md:text-left"
                        >
                            <div className={`md:max-w-xs ${index % 2 === 0 ? 'mr-auto md:text-right' : 'ml-auto'}`}>
                                <h3 className="text-2xl font-serif text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                        </motion.div>

                        {/* Number Indicator */}
                        <motion.div 
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 0.1 + index * 0.1,
                                type: "spring",
                                stiffness: 200
                            }}
                            whileHover={{ scale: 1.2 }}
                            className="relative flex items-center justify-center w-12 h-12 rounded-full border border-accent-gold bg-primary z-10 my-4 md:my-0"
                        >
                            <motion.span 
                                animate={{ 
                                    y: [0, -3, 0],
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }}
                                className="font-serif text-accent-gold"
                            >
                                {step.number}
                            </motion.span>
                            
                            {/* Pulse effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-accent-gold"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 0, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    delay: index * 0.3
                                }}
                            />
                        </motion.div>

                        <div className="flex-1 w-full md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProcessTimeline;

