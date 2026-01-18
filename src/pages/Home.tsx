import HeroScene from '../components/3d/HeroScene';
import MainLayout from '../components/layout/MainLayout';
import FeaturedWork from '../components/home/FeaturedWork';
import { ArrowDown } from 'lucide-react';

const Home = () => {
    return (
        <MainLayout>
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <HeroScene />
                
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-serif italic text-accent-gold mb-4 animate-fade-in-up">
                        Premium Event Photography
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
                        Capturing Moments<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            That Defy Gravity
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
                        We don't just take photos; we freeze time. Experience event photography elevated to an art form.
                    </p>
                    
                    <button className="group relative px-8 py-4 bg-transparent border border-accent-gold text-accent-gold font-serif text-lg tracking-widest hover:bg-accent-gold hover:text-primary transition-all duration-300">
                        <span className="relative z-10">EXPLORE PORTFOLIO</span>
                        <div className="absolute inset-0 bg-accent-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-md"></div>
                    </button>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                    <ArrowDown size={32} />
                </div>
            </section>
            
            <FeaturedWork />
        </MainLayout>
    );
};

export default Home;
