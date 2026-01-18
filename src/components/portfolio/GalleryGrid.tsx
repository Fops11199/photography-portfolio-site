import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import Lightbox from '../ui/Lightbox';

// Mock Data
const allProjects = [
    { id: 1, title: 'Ethereal Wedding', category: 'Weddings', color: 'bg-rose-900' },
    { id: 2, title: 'Tech Summit 2025', category: 'Corporate', color: 'bg-blue-900' },
    { id: 3, title: 'Neon Nights', category: 'Parties', color: 'bg-purple-900' },
    { id: 4, title: 'Symphony Hall', category: 'Concerts', color: 'bg-amber-900' },
    { id: 5, title: 'Mountain Elopement', category: 'Weddings', color: 'bg-emerald-900' },
    { id: 6, title: 'Fashion Gala', category: 'Corporate', color: 'bg-slate-800' },
    { id: 7, title: 'Golden Anniversary', category: 'Parties', color: 'bg-yellow-900' },
    { id: 8, title: 'Rock Festival', category: 'Concerts', color: 'bg-red-900' },
    { id: 9, title: 'Garden Ceremony', category: 'Weddings', color: 'bg-green-800' },
];

const categories = ['All', 'Weddings', 'Corporate', 'Parties', 'Concerts'];

const GalleryGrid = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

    const filteredProjects = filter === 'All' 
        ? allProjects 
        : allProjects.filter(p => p.category === filter);

    return (
        <div>
            <CategoryFilter 
                categories={categories} 
                activeCategory={filter} 
                onSelectCategory={setFilter} 
            />

            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="relative"
                            style={{ 
                                transformStyle: 'preserve-3d',
                                perspective: '1000px'
                            }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, -8 - (index % 3) * 2, 0],
                                }}
                                transition={{
                                    duration: 4 + (index % 3),
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                whileHover={{ 
                                    scale: 1.05,
                                    rotateY: 5,
                                    rotateX: -3,
                                    z: 50,
                                    transition: { duration: 0.3 }
                                }}
                                className="group aspect-square cursor-pointer overflow-hidden rounded-lg bg-secondary"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className={`w-full h-full ${project.color} transition-transform duration-500 group-hover:scale-110`} />
                                
                                {/* Glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/20 to-transparent" />
                                </div>
                                
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                                    <span className="text-accent-gold text-xs uppercase tracking-wider mb-2">{project.category}</span>
                                    <h3 className="text-white text-xl font-serif italic">{project.title}</h3>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <Lightbox 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </div>
    );
};

export default GalleryGrid;

