import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Particle = ({ position, color }: { position: [number, number, number], color: string }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={mesh} position={position} scale={0.1}>
        <octahedronGeometry />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
};

const HeroScene = () => {
    // Generate random positions for particles
    const particleCount = 20;
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
        position: [
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10 
        ] as [number, number, number],
        color: Math.random() > 0.5 ? '#D4AF37' : '#FFFFFF',
        id: i
    }));

    return (
        <div className="absolute inset-0 -z-10 bg-primary">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                
                {particles.map((p) => (
                    <Particle key={p.id} position={p.position} color={p.color} />
                ))}

                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={[2, 1, -2]} scale={1.5} rotation={[0, 0.5, 0]}>
                       <torusGeometry args={[1, 0.2, 16, 100]} />
                       <meshStandardMaterial color="#D4AF37" wireframe />
                    </mesh>
                </Float>
            </Canvas>
            
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/20 pointer-events-none" />
        </div>
    );
};

export default HeroScene;
