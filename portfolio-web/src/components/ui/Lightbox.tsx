import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    color: string;
    description?: string;
}

interface LightboxProps {
    project: Project | null;
    onClose: () => void;
}

const Lightbox = ({ project, onClose }: LightboxProps) => {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-5xl bg-secondary rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-accent-gold hover:text-primary transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="grid md:grid-cols-2 gap-0 h-[80vh]">
                            {/* Image Placeholder Area */}
                            <div className={`${project.color} w-full h-full flex items-center justify-center`}>
                                <span className="text-white/50 text-2xl font-serif">Project Image</span>
                            </div>

                            {/* Details Area */}
                            <div className="p-8 md:p-12 overflow-y-auto bg-secondary">
                                <span className="text-accent-gold text-sm tracking-widest uppercase font-medium">
                                    {project.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-white mt-2 mb-6">
                                    {project.title}
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-8">
                                    {project.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                                </p>
                                
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div>
                                        <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-1">Date</h4>
                                        <p className="text-white">Oct 12, 2024</p>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-1">Location</h4>
                                        <p className="text-white">New York, NY</p>
                                    </div>
                                </div>

                                <button className="w-full py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm">
                                    View Full Gallery
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
