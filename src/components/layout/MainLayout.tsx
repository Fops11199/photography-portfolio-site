import { ReactNode, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ApertureShutter from '../ui/ApertureShutter';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="min-h-screen bg-primary text-white flex flex-col">
            {isLoading && <ApertureShutter onComplete={() => setIsLoading(false)} />}
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

