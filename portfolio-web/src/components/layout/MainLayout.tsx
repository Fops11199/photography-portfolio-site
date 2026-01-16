import { ReactNode } from 'react';
import Navbar from './Navbar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-primary text-white">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
