import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Check, ChevronRight, ChevronLeft } from 'lucide-react';

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="bg-secondary/50 p-12 rounded-xl text-center border border-accent-gold/20">
                <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="text-accent-gold" size={40} />
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Request Received</h3>
                <p className="text-gray-300">Thank you for inquiring. We have received your details and will be in touch within 24 hours.</p>
            </div>
        );
    }

    return (
        <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            {/* Progress Bar */}
            <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-10" />
                {[1, 2, 3].map((s) => (
                    <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm border-2 transition-colors duration-300 ${
                        step >= s ? 'bg-accent-gold border-accent-gold text-primary' : 'bg-primary border-gray-600 text-gray-500'
                    }`}>
                        {s}
                    </div>
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
                                        <input type="date" className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none" />
                                        <Calendar className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Type</label>
                                    <select className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none">
                                        <option>Wedding</option>
                                        <option>Corporate</option>
                                        <option>Party</option>
                                        <option>Concert</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Location</label>
                                <input type="text" placeholder="Venue Name, City" className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none" />
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
                                {['Essential Collection', 'Signature Collection', 'Legacy Collection'].map((pkg) => (
                                    <label key={pkg} className="flex items-center justify-between p-4 border border-white/10 rounded-lg cursor-pointer hover:border-accent-gold/50 transition-colors">
                                        <span className="text-white">{pkg}</span>
                                        <input type="radio" name="package" className="accent-accent-gold" />
                                    </label>
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
                                <label className="text-xs uppercase tracking-widest text-gray-500">Full Name</label>
                                <input type="text" required className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none" />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Email Address</label>
                                <input type="email" required className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
                                <textarea rows={4} className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent-gold outline-none"></textarea>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex justify-between mt-12">
                    {step > 1 ? (
                        <button type="button" onClick={prevStep} className="flex items-center text-gray-400 hover:text-white transition-colors">
                            <ChevronLeft size={20} className="mr-1" /> Back
                        </button>
                    ) : <div></div>}

                    {step < 3 ? (
                        <button type="button" onClick={nextStep} className="flex items-center text-accent-gold font-medium hover:text-white transition-colors">
                            Next Step <ChevronRight size={20} className="ml-1" />
                        </button>
                    ) : (
                        <button type="submit" disabled={isSubmitting} className="bg-accent-gold text-primary px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors disabled:opacity-50">
                            {isSubmitting ? 'Sending...' : 'Submit Request'}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
