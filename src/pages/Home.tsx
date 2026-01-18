import NebulaScene from '../components/3d/NebulaScene';
import MainLayout from '../components/layout/MainLayout';

const Home = () => {
    return (
        <MainLayout>
            <div className="fixed inset-0 overflow-hidden bg-black">
                <NebulaScene />
            </div>
            
            {/* We hide the other sections on the landing page to enforce the 3D void experience */}
            <div className="hidden">
               {/* These can be accessed via navigation or after specific interactions if needed */}
            </div>
        </MainLayout>
    );
};

export default Home;


