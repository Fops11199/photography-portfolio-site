import { Link } from 'wouter';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        'Weddings & Ceremonies',
        'Corporate Events',
        'Private Parties',
        'Concerts & Performances',
    ];

    return (
        <footer className="bg-secondary border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/">
                            <h2 className="text-3xl font-serif font-bold text-accent-gold cursor-pointer tracking-wider">
                                LUMOS
                            </h2>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium event photography that captures moments defying gravity. 
                            We transform fleeting instants into timeless memories.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-primary transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-primary transition-all duration-300"
                            >
                                <Facebook size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-primary transition-all duration-300"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.path}>
                                        <span className="text-gray-400 hover:text-accent-gold transition-colors duration-300 cursor-pointer text-sm">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-gray-400 text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Mail size={16} className="text-accent-gold mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">hello@lumos-photography.com</span>
                            </li>
                            <li className="flex items-start">
                                <Phone size={16} className="text-accent-gold mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin size={16} className="text-accent-gold mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">123 Art District Ave<br />New York, NY 10013</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} LUMOS Photography. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
