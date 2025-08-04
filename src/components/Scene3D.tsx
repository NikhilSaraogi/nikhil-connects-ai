import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#00bfff"
        roughness={0}
        metalness={0.8}
      />
    </mesh>
  )
}

function Particles() {
  const points = useRef<THREE.Points>(null!)
  
  const particlesPosition = new Float32Array(500 * 3)
  
  for (let i = 0; i < 500; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 8
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 8
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 8
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      points.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00ff88" />
    </points>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff0088" />
        <AnimatedSphere />
        <Particles />
      </Canvas>
    </div>
  )
}