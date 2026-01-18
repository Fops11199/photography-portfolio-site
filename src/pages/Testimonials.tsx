import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah & Michael',
        eventType: 'Wedding',
        rating: 5,
        text: 'LUMOS captured our wedding day with such artistry and emotion. Every photo tells a story, and looking back, we relive those magical moments all over again. Truly exceptional work.',
        featured: true,
    },
    {
        id: 2,
        name: 'David Chen',
        eventType: 'Corporate Event',
        rating: 5,
        text: 'Professional, punctual, and incredibly talented. The corporate event photos exceeded our expectations and have been instrumental in our marketing materials.',
        featured: false,
    },
    {
        id: 3,
        name: 'The Martinez Family',
        eventType: 'Birthday Party',
        rating: 5,
        text: 'Our daughter\'s quinceañera photos are absolutely stunning. The team was so warm and made everyone feel comfortable. We couldn\'t be happier!',
        featured: true,
    },
    {
        id: 4,
        name: 'Rhythm Records',
        eventType: 'Concert',
        rating: 5,
        text: 'The energy they captured at our album release concert was unreal. These photos truly embody the spirit of live music. We\'ve hired them for all our events since.',
        featured: false,
    },
    {
        id: 5,
        name: 'Emma & James',
        eventType: 'Wedding',
        rating: 5,
        text: 'From our engagement session to the wedding day, everything was perfect. They have an incredible eye for light and composition.',
        featured: false,
    },
    {
        id: 6,
        name: 'TechStart Inc.',
        eventType: 'Corporate Event',
        rating: 5,
        text: 'Our product launch photos were featured in three major publications. The quality speaks for itself. Highly recommended for any corporate function.',
        featured: true,
    },
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={16}
                className={i < rating ? 'text-accent-gold fill-accent-gold' : 'text-gray-600'}
            />
        ))}
    </div>
);

const Testimonials = () => {
    return (
        <MainLayout>
            {/* Header */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                            Client Stories
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Don't just take our word for it. Hear from the couples, companies, 
                            and families who trusted us with their most precious moments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                animate={{
                                    y: [0, testimonial.featured ? -5 : -3, 0],
                                }}
                                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                                    testimonial.featured 
                                        ? 'bg-secondary border-accent-gold/30 shadow-lg shadow-accent-gold/5' 
                                        : 'bg-secondary/50 border-white/5 hover:border-white/20'
                                }`}
                            >
                                {/* Quote Icon */}
                                <Quote 
                                    size={40} 
                                    className="absolute top-6 right-6 text-accent-gold/10" 
                                />

                                {/* Rating */}
                                <div className="mb-4">
                                    <StarRating rating={testimonial.rating} />
                                </div>

                                {/* Text */}
                                <p className="text-gray-300 leading-relaxed mb-6 italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-gold/30 to-accent-rose/30 flex items-center justify-center mr-4">
                                        <span className="text-white font-serif text-lg">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                                        <span className="text-accent-gold text-sm">{testimonial.eventType}</span>
                                    </div>
                                </div>

                                {/* Featured badge */}
                                {testimonial.featured && (
                                    <div className="absolute -top-3 left-6 px-3 py-1 bg-accent-gold text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                                        Featured
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-secondary">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    >
                        {[
                            { value: '500+', label: 'Happy Clients' },
                            { value: '5.0', label: 'Average Rating' },
                            { value: '100%', label: 'Would Recommend' },
                            { value: '48h', label: 'Response Time' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-serif text-accent-gold mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Join Our Happy Clients
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let us capture your story and create memories that last forever.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-12 py-4 bg-accent-gold text-primary font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
                        >
                            Book Your Session
                        </a>
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Testimonials;
