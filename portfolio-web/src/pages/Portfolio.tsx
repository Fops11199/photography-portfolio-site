import MainLayout from '../components/layout/MainLayout';
import GalleryGrid from '../components/portfolio/GalleryGrid';

const Portfolio = () => {
    return (
        <MainLayout>
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Portfolio</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A curated collection of our finest moments, captured across various events and celebrations.
                    </p>
                </div>

                <GalleryGrid />
            </div>
        </MainLayout>
    );
};

export default Portfolio;
