import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent-gold/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="aspect-[4/5] bg-gradient-to-br from-secondary to-primary rounded-2xl overflow-hidden border border-white/10 relative"
                        >
                            {/* Placeholder gradient with icon */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 via-transparent to-accent-rose/10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Sparkles size={80} className="text-accent-gold/20" />
                            </div>
                            
                            {/* Decorative overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary to-transparent" />
                        </motion.div>

                        {/* Floating accent elements */}
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                                rotate: [0, 10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -top-8 -right-8 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl"
                        />
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, -10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                            className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-rose/10 rounded-full blur-2xl"
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                            Ready to Capture <br />
                            <span className="text-accent-gold">Your Event?</span>
                        </h2>
                        
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                            Every moment is fleeting, but the right photograph makes it eternal. 
                            Let's discuss how we can preserve your most precious memories with 
                            artistry and care.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative px-8 py-4 bg-accent-gold text-primary font-bold tracking-widest uppercase overflow-hidden cursor-pointer"
                                >
                                    {/* Glow effect */}
                                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                    <span className="absolute -inset-1 bg-accent-gold/50 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                                    <span className="relative flex items-center justify-center">
                                        Get in Touch
                                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </motion.button>
                            </Link>

                            <Link href="/services">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group px-8 py-4 border border-white/20 text-white font-bold tracking-widest uppercase hover:border-accent-gold hover:text-accent-gold transition-all duration-300 cursor-pointer"
                                >
                                    View Packages
                                </motion.button>
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">Trusted by</p>
                            <div className="flex items-center space-x-8">
                                {['Vogue', 'Forbes', 'The Knot', 'Elle'].map((brand) => (
                                    <span key={brand} className="text-gray-600 font-serif text-lg">
                                        {brand}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
