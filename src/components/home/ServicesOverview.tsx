import { motion } from 'framer-motion';
import { Heart, Briefcase, PartyPopper, Music } from 'lucide-react';
import { Link } from 'wouter';

const services = [
    {
        icon: Heart,
        title: 'Weddings & Ceremonies',
        description: 'Timeless imagery capturing the love, joy, and intimate moments of your special day.',
        color: 'from-rose-500/20 to-pink-500/10',
    },
    {
        icon: Briefcase,
        title: 'Corporate Events',
        description: 'Professional coverage of conferences, galas, product launches, and business gatherings.',
        color: 'from-blue-500/20 to-cyan-500/10',
    },
    {
        icon: PartyPopper,
        title: 'Private Parties',
        description: 'Vibrant, candid photography for birthdays, anniversaries, and family celebrations.',
        color: 'from-purple-500/20 to-violet-500/10',
    },
    {
        icon: Music,
        title: 'Concerts & Performances',
        description: 'Dynamic, high-energy shots that capture the atmosphere and emotion of live events.',
        color: 'from-amber-500/20 to-orange-500/10',
    },
];

const ServicesOverview = () => {
    return (
        <section className="py-24 px-6 bg-primary relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-rose/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">What We Capture</h2>
                    <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Every event tells a unique story. We specialize in preserving yours.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ 
                                y: -15,
                                transition: { duration: 0.3 }
                            }}
                            animate={{
                                y: [0, -8, 0],
                            }}
                            className="group relative"
                        >
                            <motion.div
                                transition={{
                                    duration: 4 + index * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                className={`p-8 rounded-2xl bg-gradient-to-br ${service.color} backdrop-blur-sm border border-white/5 hover:border-accent-gold/30 transition-all duration-300 h-full`}
                            >
                                {/* Icon Container */}
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        rotate: [0, 5, 0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3,
                                    }}
                                    className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-colors duration-300"
                                >
                                    <service.icon 
                                        size={32} 
                                        className="text-accent-gold group-hover:scale-110 transition-transform duration-300" 
                                    />
                                </motion.div>

                                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-accent-gold transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <Link href="/services">
                        <span className="inline-block text-accent-gold border-b border-accent-gold/50 pb-1 hover:border-accent-gold hover:text-white transition-all duration-300 cursor-pointer">
                            View All Services & Packages →
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOverview;
