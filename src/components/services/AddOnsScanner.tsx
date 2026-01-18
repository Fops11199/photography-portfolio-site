import { Plus } from 'lucide-react';

const addons = [
    { title: 'Second Shooter', price: '$500', description: 'Ensure every angle is captured.' },
    { title: 'Engagement Session', price: '$400', description: '1.5 hour session pending final edits.' },
    { title: 'Album Design', price: '$800+', description: 'Premium leather-bound heirlooms.' },
    { title: 'Drone Coverage', price: '$300', description: 'Aerial perspectives of your venue.' },
    { title: 'Rush Delivery', price: '$250', description: 'Receive your full gallery in 1 week.' },
    { title: 'Raw Footage', price: '$200', description: 'All unedited video clips.' }
];

const AddOnsScanner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
                <div key={index} className="group p-6 border border-white/5 bg-white/5 hover:bg-white/10 hover:border-accent-gold/50 transition-all duration-300 cursor-pointer rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-serif text-white group-hover:text-accent-gold transition-colors">{addon.title}</h4>
                        <Plus className="text-gray-500 group-hover:text-accent-gold transition-colors" size={20} />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                    <div className="text-accent-gold font-mono">{addon.price}</div>
                </div>
            ))}
        </div>
    );
};

export default AddOnsScanner;
