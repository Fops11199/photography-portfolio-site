import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Check, ChevronRight, ChevronLeft, Users, Sparkles } from 'lucide-react';

// Confetti particle component
const ConfettiParticle = ({ delay }: { delay: number }) => {
    const randomX = Math.random() * 100;
    const randomRotation = Math.random() * 360;
    const randomColor = ['#D4AF37', '#E8B4B8', '#FFFFFF', '#FFD700', '#FF69B4'][Math.floor(Math.random() * 5)];
    
    return (
        <motion.div
            className="absolute w-2 h-2 rounded-sm"
            style={{ 
                left: `${randomX}%`, 
                top: '-10px',
                backgroundColor: randomColor,
            }}
            initial={{ y: 0, rotate: 0, opacity: 1 }}
            animate={{ 
                y: 400,
                rotate: randomRotation,
                opacity: [1, 1, 0],
                x: (Math.random() - 0.5) * 100,
            }}
            transition={{ 
                duration: 2 + Math.random(),
                delay: delay,
                ease: "easeOut"
            }}
        />
    );
};

const Confetti = () => {
    const particles = Array.from({ length: 50 }, (_, i) => i);
    
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
                <ConfettiParticle key={i} delay={i * 0.05} />
            ))}
        </div>
    );
};

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setShowConfetti(true);
        }, 1500);
    };

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => setShowConfetti(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

    if (isSuccess) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-secondary/50 p-12 rounded-xl text-center border border-accent-gold/20 overflow-hidden"
            >
                {showConfetti && <Confetti />}
                
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Sparkles className="text-accent-gold" size={40} />
                    </motion.div>
                </motion.div>
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-serif text-white mb-4"
                >
                    Request Received!
                </motion.h3>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300"
                >
                    Thank you for inquiring. We have received your details and will be in touch within 24 hours.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-accent-gold mt-4 text-sm"
                >
                    Booking Reference: #LUM-{Math.random().toString(36).substr(2, 8).toUpperCase()}
                </motion.p>
            </motion.div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-white/10"
        >
            {/* Progress Bar */}
            <div className="flex justify-between mb-12 relative">
                <motion.div 
                    className="absolute top-1/2 left-0 h-0.5 bg-accent-gold -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: `${((step - 1) / 2) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-20" />
                {[1, 2, 3].map((s) => (
                    <motion.div 
                        key={s} 
                        whileHover={{ scale: 1.1 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm border-2 transition-colors duration-300 ${
                            step >= s ? 'bg-accent-gold border-accent-gold text-primary' : 'bg-primary border-gray-600 text-gray-500'
                        }`}
                    >
                        {step > s ? <Check size={16} /> : s}
                    </motion.div>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-serif text-white mb-6">Tell us about your event</h3>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Date</label>
                                    <div className="relative">
                                        <input type="date" className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none transition-colors" />
                                        <Calendar className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Type</label>
                                    <select className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none transition-colors">
                                        <option>Wedding</option>
                                        <option>Corporate</option>
                                        <option>Party</option>
                                        <option>Concert</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Location</label>
                                <input type="text" placeholder="Venue Name, City" className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Estimated Guest Count</label>
                                <div className="relative">
                                    <input 
                                        type="number" 
                                        placeholder="e.g. 100" 
                                        min="1"
                                        className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none transition-colors" 
                                    />
                                    <Users className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-serif text-white mb-6">Select a Collection</h3>
                            
                            <div className="space-y-4">
                                {[
                                    { name: 'Essential Collection', price: '$2,500', desc: 'Perfect for intimate gatherings' },
                                    { name: 'Signature Collection', price: '$4,200', desc: 'Our most popular package' },
                                    { name: 'Legacy Collection', price: '$6,500', desc: 'The ultimate experience' },
                                ].map((pkg) => (
                                    <motion.label 
                                        key={pkg.name} 
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-between p-4 border border-white/10 rounded-lg cursor-pointer hover:border-accent-gold/50 transition-colors"
                                    >
                                        <div>
                                            <span className="text-white block">{pkg.name}</span>
                                            <span className="text-gray-500 text-sm">{pkg.desc}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-accent-gold font-medium">{pkg.price}</span>
                                            <input type="radio" name="package" className="accent-accent-gold w-4 h-4" />
                                        </div>
                                    </motion.label>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-serif text-white mb-6">Your Details</h3>
                            
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Full Name *</label>
                                <input type="text" required className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none transition-colors" />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Email Address *</label>
                                    <input type="email" required className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Phone Number *</label>
                                    <input 
                                        type="tel" 
                                        required 
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none transition-colors" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Additional Message</label>
                                <textarea 
                                    rows={4} 
                                    placeholder="Tell us more about your event, any special requests, or questions you have..."
                                    className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none transition-colors resize-none"
                                ></textarea>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex justify-between mt-12">
                    {step > 1 ? (
                        <motion.button 
                            type="button" 
                            onClick={prevStep} 
                            whileHover={{ x: -3 }}
                            className="flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                            <ChevronLeft size={20} className="mr-1" /> Back
                        </motion.button>
                    ) : <div></div>}

                    {step < 3 ? (
                        <motion.button 
                            type="button" 
                            onClick={nextStep} 
                            whileHover={{ x: 3 }}
                            className="flex items-center text-accent-gold font-medium hover:text-white transition-colors"
                        >
                            Next Step <ChevronRight size={20} className="ml-1" />
                        </motion.button>
                    ) : (
                        <motion.button 
                            type="submit" 
                            disabled={isSubmitting} 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-accent-gold text-primary px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending...' : 'Submit Request'}
                        </motion.button>
                    )}
                </div>
            </form>
        </motion.div>
    );
};

export default BookingForm;

