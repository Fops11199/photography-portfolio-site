import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className="space-y-12">
            <div>
                <h2 className="text-4xl font-serif text-white mb-6">Let's Create Something Extraordinary</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                    We accept a limited number of commissions each year to ensure every client receives our undivided attention and creative energy.
                </p>
            </div>

            <div className="space-y-8">
                <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-6 text-accent-gold flex-shrink-0">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-serif text-lg mb-1">Email Us</h4>
                        <p className="text-gray-400">hello@lumos-photography.com</p>
                        <p className="text-gray-500 text-sm">Response within 24 hours</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-6 text-accent-gold flex-shrink-0">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-serif text-lg mb-1">Call Studio</h4>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                        <p className="text-gray-500 text-sm">Mon-Fri, 9am - 6pm EST</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-6 text-accent-gold flex-shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-serif text-lg mb-1">Studio Location</h4>
                        <p className="text-gray-400">123 Art District Ave</p>
                        <p className="text-gray-400">New York, NY 10013</p>
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Follow Our Work</h4>
                <div className="flex space-x-6">
                    <a href="#" className="text-white hover:text-accent-gold transition-colors"><Instagram /></a>
                    <a href="#" className="text-white hover:text-accent-gold transition-colors"><Facebook /></a>
                    <a href="#" className="text-white hover:text-accent-gold transition-colors"><Linkedin /></a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
