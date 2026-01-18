import { useRef, useMemo, useState } from 'react';
import { useFrame, useThree, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { useCursor, shaderMaterial } from '@react-three/drei';

// TypeScript declaration for custom shader material
declare global {
  namespace JSX {
    interface IntrinsicElements {
      liquidLensMaterial: any;
    }
  }
}


// Custom shader for Liquid Lens effect
const LiquidLensMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
    uMouse: new THREE.Vector2(0, 0),
    uVelocity: 0,
    uOpacity: 0.8,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uVelocity;
    
    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Add subtle ripple effect
      pos.z += sin(pos.x * 3.0 + uTime) * uVelocity * 0.2;
      pos.z += cos(pos.y * 3.0 + uTime) * uVelocity * 0.2;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  `
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float uVelocity;
    uniform float uOpacity;
    
    void main() {
      // RGB Shift based on velocity
      float shift = uVelocity * 0.05;
      float r = texture2D(uTexture, vUv + vec2(shift, 0.0)).r;
      float g = texture2D(uTexture, vUv).g;
      float b = texture2D(uTexture, vUv - vec2(shift, 0.0)).b;
      
      gl_FragColor = vec4(r, g, b, uOpacity);
    }
  `
);

extend({ LiquidLensMaterial });

interface PhotoPlaneProps {
  url: string;
  position: [number, number, number];
}

const PhotoPlane = ({ url, position: initialPosition }: PhotoPlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<any>(null!);
  const [hovered, setHovered] = useState(false);
  const { mouse, viewport } = useThree();
  useCursor(hovered);

  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
  const originalPos = useMemo(() => new THREE.Vector3(...initialPosition), [initialPosition]);
  
  const driftRef = useRef({
    rx: Math.random() * 0.01,
    ry: Math.random() * 0.01,
    rz: Math.random() * 0.01,
    speed: 0.5 + Math.random() * 0.5,
    prevMouse: new THREE.Vector2(0, 0),
    velocity: 0,
  });

  useFrame((state) => {
    const { speed, rx, ry } = driftRef.current;
    const time = state.clock.getElapsedTime();

    // Calculate mouse velocity for shader
    const currentMouse = new THREE.Vector2(mouse.x, mouse.y);
    const mouseVelocity = currentMouse.distanceTo(driftRef.current.prevMouse);
    driftRef.current.velocity = THREE.MathUtils.lerp(driftRef.current.velocity, mouseVelocity * 10, 0.1);
    driftRef.current.prevMouse.copy(currentMouse);

    // Natural Drift
    const driftX = Math.sin(time * speed + originalPos.x) * 0.2;
    const driftY = Math.cos(time * speed + originalPos.y) * 0.2;
    const targetPos = originalPos.clone().add(new THREE.Vector3(driftX, driftY, 0));

    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    const mousePos = new THREE.Vector3(mouseX, mouseY, 5);
    
    const distanceToMouse = targetPos.distanceTo(new THREE.Vector3(mouseX, mouseY, 0));
    
    if (distanceToMouse < 6) {
      const pullFactor = 1 - distanceToMouse / 6;
      targetPos.lerp(new THREE.Vector3(mouseX, mouseY, originalPos.z), pullFactor * 0.1);
      meshRef.current.lookAt(mousePos);
    } else {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, Math.sin(time * rx) * 0.1, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, Math.cos(time * ry) * 0.1, 0.05);
    }

    meshRef.current.position.lerp(targetPos, 0.05);
    
    // Update shader uniforms
    if (materialRef.current) {
      materialRef.current.uTime = time;
      materialRef.current.uVelocity = driftRef.current.velocity;
      materialRef.current.uMouse = currentMouse;
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={initialPosition}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[2, 2.8]} />
      <liquidLensMaterial 
        ref={materialRef} 
        uTexture={texture} 
        uOpacity={hovered ? 1.0 : 0.7}
        transparent
      />
    </mesh>
  );
};

export default PhotoPlane;

