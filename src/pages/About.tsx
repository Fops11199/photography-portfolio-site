import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import { Camera, Heart, Award, Clock, Users, Sparkles } from 'lucide-react';

const About = () => {
    const stats = [
        { number: '500+', label: 'Events Captured' },
        { number: '8+', label: 'Years Experience' },
        { number: '50K+', label: 'Photos Delivered' },
        { number: '100%', label: 'Client Satisfaction' },
    ];

    const values = [
        {
            icon: Heart,
            title: 'Passion-Driven',
            description: 'Every frame is infused with genuine love for the craft and dedication to preserving your precious moments.'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We pursue perfection in every shot, from composition to post-processing, ensuring gallery-worthy results.'
        },
        {
            icon: Users,
            title: 'Client-Focused',
            description: 'Your vision guides our lens. We listen, understand, and deliver beyond expectations.'
        },
    ];

    const processSteps = [
        { icon: Camera, title: 'Consultation', description: 'We discuss your vision and event details' },
        { icon: Clock, title: 'Planning', description: 'Careful preparation ensures nothing is missed' },
        { icon: Sparkles, title: 'Capture', description: 'The magic happens on your special day' },
        { icon: Award, title: 'Delivery', description: 'Receive your curated, edited gallery' },
    ];

    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ 
                                y: [0, -10, 0],
                            }}
                            transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="aspect-[3/4] bg-gradient-to-br from-secondary to-primary rounded-lg overflow-hidden border border-white/10"
                        >
                            <div className="w-full h-full bg-gradient-to-br from-accent-gold/20 to-transparent flex items-center justify-center">
                                <Camera size={120} className="text-accent-gold/30" />
                            </div>
                        </motion.div>
                        {/* Floating accent */}
                        <motion.div
                            animate={{ 
                                y: [0, 15, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ 
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                            Behind the <span className="text-accent-gold">Lens</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            For over eight years, we've been capturing the moments that matter most. 
                            What started as a passion for freezing time has evolved into a mission: 
                            to create timeless imagery that tells your unique story.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We believe every event has its own rhythm, its own magic. Our role is to 
                            be invisible yet omnipresent, capturing the laughter, the tears, the 
                            stolen glances, and the grand celebrations that make your event uniquely yours.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl font-serif text-accent-gold mb-1">{stat.number}</div>
                                    <div className="text-gray-500 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 px-6 bg-secondary">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Philosophy</h2>
                        <div className="w-24 h-1 bg-accent-gold mx-auto mb-8"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            We don't just document events—we craft visual stories that resonate for generations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -10 }}
                                className="p-8 bg-primary/50 rounded-xl border border-white/5 hover:border-accent-gold/30 transition-all duration-300"
                            >
                                <motion.div
                                    animate={{ 
                                        y: [0, -5, 0],
                                    }}
                                    transition={{ 
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.5
                                    }}
                                    className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mb-6"
                                >
                                    <value.icon className="text-accent-gold" size={28} />
                                </motion.div>
                                <h3 className="text-xl font-serif text-white mb-4">{value.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Process</h2>
                        <div className="w-24 h-1 bg-accent-gold mx-auto mb-8"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            From the first consultation to the final delivery, we ensure a seamless experience.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="text-center relative"
                            >
                                {/* Connecting line */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-accent-gold/50 to-transparent" />
                                )}
                                
                                <motion.div
                                    animate={{ 
                                        y: [0, -8, 0],
                                    }}
                                    transition={{ 
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3
                                    }}
                                    className="relative z-10 w-16 h-16 bg-secondary border border-accent-gold rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <step.icon className="text-accent-gold" size={24} />
                                </motion.div>
                                <h3 className="text-lg font-serif text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-secondary">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Ready to Create Something Beautiful?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's discuss how we can capture your special moments.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-12 py-4 bg-accent-gold text-primary font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
};

export default About;
