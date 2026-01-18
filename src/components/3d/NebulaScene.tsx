import { Canvas, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Stars, Float, Text } from '@react-three/drei';
import { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import PhotoPlane from './PhotoPlane';
import gsap from 'gsap';


// Generate mock data for the nebula
const generateNebulaData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    url: `https://picsum.photos/seed/${i + 10}/600/800`, // Random placeholder images
    position: [
      (Math.random() - 0.5) * 40, // X
      (Math.random() - 0.5) * 30, // Y
      (Math.random() - 1.5) * 50, // Z (depth)
    ] as [number, number, number],
  }));
};

const CameraController = ({ scrollZ }: { scrollZ: number }) => {
  const { camera } = useThree();


  useEffect(() => {
    gsap.to(camera.position, {
      z: 10 - scrollZ * 0.1, // Moving forward as scroll increases
      duration: 1,
      ease: "power2.out"
    });
  }, [scrollZ, camera]);

  return null;
};

const NebulaContent = () => {
  const photos = useMemo(() => generateNebulaData(40), []);
  const [scrollZ, setScrollZ] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      setScrollZ(prev => prev + e.deltaY);
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <>
      <CameraController scrollZ={scrollZ} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#FF5C00" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Photo Nebula */}
      {photos.map((photo) => (
        <PhotoPlane 
          key={photo.id}
          url={photo.url}
          position={photo.position}
        />
      ))}

      {/* Floating Center Text */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text
          position={[0, 0, -5]}
          fontSize={2}
          font="/fonts/PlayfairDisplay-Bold.ttf" // Assuming it might be available or standard
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          THE APERTURE
        </Text>
      </Float>
    </>
  );
};

const NebulaScene = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
          <NebulaContent />
          <fog attach="fog" args={['#000', 5, 45]} />
        </Suspense>
      </Canvas>
      
      {/* UI Overlay for scroll instruction */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/30 text-[10px] uppercase tracking-[0.4em] flex flex-col items-center"
        >
          <span>Scroll to travel through the void</span>
          <div className="w-px h-12 bg-accent-orange/30 mt-4" />
        </motion.div>
      </div>
    </div>
  );
};

export default NebulaScene;
