import { motion } from 'framer-motion';

const projects = [
    { id: 1, title: 'Ethereal Wedding', category: 'Wedding', color: 'bg-rose-900' },
    { id: 2, title: 'Tech Summit 2025', category: 'Corporate', color: 'bg-blue-900' },
    { id: 3, title: 'Neon Nights', category: 'Party', color: 'bg-purple-900' },
    { id: 4, title: 'Symphony Hall', category: 'Concert', color: 'bg-amber-900' },
    { id: 5, title: 'Mountain Elopement', category: 'Wedding', color: 'bg-emerald-900' },
    { id: 6, title: 'Fashion Gala', category: 'Corporate', color: 'bg-slate-800' },
];

const FeaturedWork = () => {
    return (
        <section className="py-20 px-6 bg-secondary relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Featured Moments</h2>
                    <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
                        >
                            {/* Placeholder for Image */}
                            <div className={`w-full h-full ${project.color} transition-transform duration-700 group-hover:scale-110`}>
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-primary/90 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 translate-y-4 lg:group-hover:translate-y-0">
                                <span className="text-accent-gold text-sm tracking-widest uppercase mb-2 font-medium">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-serif text-white">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="text-white border-b border-accent-gold pb-1 hover:text-accent-gold transition-colors duration-300">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
