import { Check } from 'lucide-react';

interface PackageProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

const PackageCard = ({ title, price, description, features, isPopular }: PackageProps) => {
    return (
        <div className={`relative p-8 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border ${isPopular ? 'bg-secondary/80 border-accent-gold shadow-lg shadow-accent-gold/10' : 'bg-primary/50 border-white/10 hover:border-white/30'}`}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-accent-gold text-black text-xs font-bold uppercase tracking-widest rounded-full">
                    Most Popular
                </div>
            )}
            
            <h3 className="text-2xl font-serif text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{description}</p>
            
            <div className="text-4xl text-accent-gold font-light mb-8">
                {price}
            </div>
            
            <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-300">
                        <Check size={16} className="text-accent-gold mr-3 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            
            <button className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 font-medium ${isPopular ? 'bg-accent-gold text-black hover:bg-white' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}>
                Select Package
            </button>
        </div>
    );
};

export default PackageCard;
