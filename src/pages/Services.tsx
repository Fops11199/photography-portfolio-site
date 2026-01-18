import MainLayout from '../components/layout/MainLayout';
import PackageCard from '../components/services/PackageCard';
import AddOnsScanner from '../components/services/AddOnsScanner';
import ProcessTimeline from '../components/services/ProcessTimeline';

const packages = [
    {
        title: "Essential Collection",
        price: "$2,500",
        description: "Perfect for intimate gatherings and elopements.",
        features: ["6 Hours Coverage", "1 Photographer", "Online Gallery", "High-Res Downloads", "Print Release"],
        isPopular: false
    },
    {
        title: "Signature Collection",
        price: "$4,200",
        description: "Our most comprehensive package for full wedding days.",
        features: ["10 Hours Coverage", "2 Photographers", "Engagement Session", "Online Gallery & Store", "Custom USB Drive", "10x10 Heirloom Album"],
        isPopular: true
    },
    {
        title: "Legacy Collection",
        price: "$6,500",
        description: "The ultimate experience including rehearsal dinner coverage.",
        features: ["Full Weekend Coverage", "2 Photographers", "Engagement Session", "Rehearsal Dinner (2 hrs)", "Priority Editing", "12x12 Heirloom Album", "2 Parent Albums"],
        isPopular: false
    }
];

const Services = () => {
    return (
        <MainLayout>
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Investment</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Capturing your legacy is an investment in memories that will last generations. We offer simple, transparent pricing with no hidden fees.
                    </p>
                </div>

                {/* Packages */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {packages.map((pkg, i) => (
                        <PackageCard key={i} {...pkg} index={i} />
                    ))}
                </div>

                {/* Add-ons */}
                <div className="mb-32">
                    <h2 className="text-3xl font-serif text-white text-center mb-12">Enhancements</h2>
                    <AddOnsScanner />
                </div>

                {/* Process */}
                <div>
                    <h2 className="text-3xl font-serif text-white text-center mb-16">The Experience</h2>
                    <ProcessTimeline />
                </div>
                
                <div className="text-center mt-24">
                    <h3 className="text-2xl text-white font-serif mb-8">Ready to start the journey?</h3>
                    <button className="px-12 py-4 bg-accent-gold text-primary font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300">
                        Inquire Now
                    </button>
                </div>
            </div>
        </MainLayout>
    );
};

export default Services;
