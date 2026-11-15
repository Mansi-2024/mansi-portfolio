'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import { BadgeModel } from './BadgeModel';

interface IdentityCardSceneProps {
  hasEntered?: boolean;
  scrollProgress?: number;
  prefersReducedMotion?: boolean;
  isMobile?: boolean;
}

/**
 * IdentityCardScene — React Three Fiber Canvas Environment
 *
 * Configures:
 * - High-precision perspective camera with optimal field-of-view for ID badge inspection
 * - Multi-directional studio lighting with subtle cyan rim definition
 * - Adaptive performance scaling and smooth alpha transparency
 */
export function IdentityCardScene({
  hasEntered = true,
  scrollProgress = 1,
  prefersReducedMotion = false,
  isMobile = false,
}: IdentityCardSceneProps) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0, 8.0], fov: 38 }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        shadows
        className="w-full h-full"
      >
        <AdaptiveDpr pixelated={false} />

        {/* Ambient Studio Illumination */}
        <ambientLight intensity={1.15} color="#ffffff" />

        {/* Key Directional Light with Soft Shadows */}
        <directionalLight
          position={[3.2, 5.0, 4.5]}
          intensity={1.8}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-near={0.5}
          shadow-camera-far={15}
          shadow-camera-left={-3}
          shadow-camera-right={3}
          shadow-camera-top={3}
          shadow-camera-bottom={-3}
          shadow-bias={0.0001}
        />

        {/* Subtle Cyan Rim Fill Light (Edge definition without excess glow) */}
        <directionalLight position={[-3.5, -1.0, -2.5]} intensity={0.65} color="#00f0ff" />

        {/* Top Ceiling Anchor Light */}
        <pointLight position={[0, 4.2, 2.0]} intensity={0.5} color="#f4f4f7" />

        {/* Specular Catch Light for Clasp and Clearcoat Laminate */}
        <pointLight position={[1.5, 2.0, 3.2]} intensity={0.4} color="#f8fafc" />

        <Suspense fallback={null}>
          <BadgeModel
            hasEntered={hasEntered}
            scrollProgress={scrollProgress}
            prefersReducedMotion={prefersReducedMotion}
            isMobile={isMobile}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default IdentityCardScene;
