'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { createBadgeTextures } from './badgeTextures';

interface BadgeModelProps {
  hasEntered?: boolean;
  scrollProgress?: number;
  prefersReducedMotion: boolean;
  isMobile: boolean;
}

/**
 * BadgeModel — 3D Hanging Identity Card with Spring & Pendulum Simulation
 *
 * Implements:
 * - Realistic ID card proportions (2.4 x 3.6 x 0.04) with high-DPI front & back textures
 * - Metallic swivel clasp and anchor loop
 * - Dynamic woven lanyard ribbon connecting ceiling anchor to card clasp
 * - Physics: Damped harmonic spring entrance, natural idle pendulum sway, pointer tilt & drag
 * - Reduced motion: Disables continuous sway and clamps tilt
 * - Proper disposal and memory management
 */
export function BadgeModel({
  hasEntered = true,
  scrollProgress = 1,
  prefersReducedMotion,
  isMobile,
}: BadgeModelProps) {
  const cardGroupRef = useRef<THREE.Group>(null);
  const lanyardMeshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Pointer tracking state
  const pointerPos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isDragging: false });
  const [hovered, setHovered] = useState(false);

  // Physical simulation state
  const physics = useRef({
    currentY: 5.2, // starts suspended above ceiling anchor
    velocityY: 0,
    currentX: 0,
    velocityX: 0,
    rotX: 0,
    velRotX: 0,
    rotY: 0,
    velRotY: 0,
    rotZ: 0,
    velRotZ: 0,
    settled: false,
  });

  // Track previous entered state to trigger fresh spring release on entry
  const prevEntered = useRef(false);

  useEffect(() => {
    if (hasEntered && !prevEntered.current) {
      physics.current.currentY = 5.2;
      physics.current.velocityY = -1.2; // downward gravity impulse on drop
      physics.current.rotX = 0.22; // slight forward tip on release
      physics.current.velRotX = 0;
    }
    prevEntered.current = hasEntered;
  }, [hasEntered]);

  // 1. Procedural High-DPI Textures
  const { frontTexture, backTexture } = useMemo(() => {
    if (typeof window === 'undefined') {
      return { frontTexture: null, backTexture: null, dispose: () => {} };
    }
    return createBadgeTextures();
  }, []);

  // Cleanup textures on unmount
  useEffect(() => {
    return () => {
      frontTexture?.dispose();
      backTexture?.dispose();
    };
  }, [frontTexture, backTexture]);

  // 2. Card Materials (Front, Back, and Polycarbonate Edge)
  const materials = useMemo(() => {
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x161620,
      roughness: 0.45,
      metalness: 0.1,
    });

    const frontMaterial = new THREE.MeshStandardMaterial({
      map: frontTexture,
      roughness: 0.35,
      metalness: 0.05,
    });

    const backMaterial = new THREE.MeshStandardMaterial({
      map: backTexture,
      roughness: 0.45,
      metalness: 0.05,
    });

    // BoxGeometry material array: [right, left, top, bottom, front (+Z), back (-Z)]
    return [
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      frontMaterial,
      backMaterial,
    ];
  }, [frontTexture, backTexture]);

  // Metallic Clasp Material
  const claspMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: 0xc0c4cc,
      metalness: 0.88,
      roughness: 0.22,
    });
  }, []);

  // 3. Dynamic Lanyard Ribbon Geometry
  // We construct a ribbon (plane with width) along a cubic curve from ceiling (0, 4.4, 0) to card clasp
  const RIBBON_SEGMENTS = 28;
  const { lanyardGeometry, lanyardMaterial } = useMemo(() => {
    // Generate ribbon geometry: (RIBBON_SEGMENTS + 1) rows of 2 vertices = flat strap
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array((RIBBON_SEGMENTS + 1) * 2 * 3);
    const uvs = new Float32Array((RIBBON_SEGMENTS + 1) * 2 * 2);
    const indices = [];

    for (let i = 0; i <= RIBBON_SEGMENTS; i++) {
      const v = i / RIBBON_SEGMENTS;
      uvs[i * 4 + 0] = 0;
      uvs[i * 4 + 1] = v * 10;
      uvs[i * 4 + 2] = 1;
      uvs[i * 4 + 3] = v * 10;

      if (i < RIBBON_SEGMENTS) {
        const a = i * 2;
        const b = a + 1;
        const c = a + 2;
        const d = a + 3;
        indices.push(a, b, c, b, d, c);
      }
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geom.setIndex(indices);

    // Procedural woven lanyard strap texture
    let strapTex: THREE.CanvasTexture | null = null;
    if (typeof window !== 'undefined') {
      const strapCanvas = document.createElement('canvas');
      strapCanvas.width = 128;
      strapCanvas.height = 256;
      const sCtx = strapCanvas.getContext('2d')!;
      sCtx.fillStyle = '#14141c';
      sCtx.fillRect(0, 0, 128, 256);

      // Fine cyan pinstripes on borders
      sCtx.fillStyle = '#00f0ff';
      sCtx.fillRect(10, 0, 4, 256);
      sCtx.fillRect(114, 0, 4, 256);

      // Weave ribbing
      sCtx.fillStyle = 'rgba(255,255,255,0.06)';
      for (let y = 0; y < 256; y += 4) {
        sCtx.fillRect(0, y, 128, 2);
      }

      strapTex = new THREE.CanvasTexture(strapCanvas);
      strapTex.wrapS = THREE.RepeatWrapping;
      strapTex.wrapT = THREE.RepeatWrapping;
      strapTex.repeat.set(1, 4);
    }

    const mat = new THREE.MeshStandardMaterial({
      map: strapTex,
      color: 0xeeeeee,
      roughness: 0.65,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    return { lanyardGeometry: geom, lanyardMaterial: mat };
  }, []);

  // Pointer velocity tracking for realistic momentum transfer on drag release
  const pointerVelocity = useRef({ vx: 0, vy: 0, lastX: 0, lastY: 0, lastTime: 0 });

  // Update pointer coordinates on window pointermove
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      const dt = Math.max((now - pointerVelocity.current.lastTime) / 1000, 0.001);
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      const vx = (x - pointerVelocity.current.lastX) / dt;
      const vy = (y - pointerVelocity.current.lastY) / dt;

      pointerVelocity.current = {
        vx: Math.max(-8, Math.min(8, vx)),
        vy: Math.max(-8, Math.min(8, vy)),
        lastX: x,
        lastY: y,
        lastTime: now,
      };

      pointerPos.current.targetX = x;
      pointerPos.current.targetY = y;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Set body cursor on hover
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.cursor = hovered ? (pointerPos.current.isDragging ? 'grabbing' : 'grab') : 'auto';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.cursor = 'auto';
      }
    };
  }, [hovered]);

  // Drag interaction handlers
  const handlePointerDown = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    pointerPos.current.isDragging = true;
    if (typeof document !== 'undefined') {
      document.body.style.cursor = 'grabbing';
    }
  };

  const handlePointerUp = () => {
    if (pointerPos.current.isDragging) {
      // Transfer drag velocity to physical pendulum impulse
      physics.current.velocityX += pointerVelocity.current.vx * 0.25;
      physics.current.velRotY += pointerVelocity.current.vx * 0.6;
      physics.current.velRotX -= pointerVelocity.current.vy * 0.45;
    }
    pointerPos.current.isDragging = false;
    if (typeof document !== 'undefined') {
      document.body.style.cursor = hovered ? 'grab' : 'auto';
    }
  };

  useEffect(() => {
    window.addEventListener('pointerup', handlePointerUp);
    return () => window.removeEventListener('pointerup', handlePointerUp);
  }, [hovered]);

  // 4. Main Physics & Frame Update Loop
  useFrame((state, delta) => {
    if (!cardGroupRef.current) return;
    const dt = Math.min(delta, 0.05); // Clamp dt to prevent physics explosions on frame drop
    const time = state.clock.getElapsedTime();
    const p = physics.current;

    // Smooth pointer lerp
    pointerPos.current.x += (pointerPos.current.targetX - pointerPos.current.x) * (dt * 6);
    pointerPos.current.y += (pointerPos.current.targetY - pointerPos.current.y) * (dt * 6);

    const px = pointerPos.current.x;
    const py = pointerPos.current.y;

    const targetRestY = -0.1;

    if (prefersReducedMotion) {
      // Reduced motion: immediate smooth placement without spring bounce or idle sway
      p.currentY = hasEntered ? targetRestY : 5.2;
      p.currentX = 0;
      p.rotX = 0;
      p.rotY = 0;
      p.rotZ = 0;
    } else if (!hasEntered) {
      // Held suspended above ceiling before user reaches About section
      p.currentY = 5.2;
      p.velocityY = 0;
      p.currentX = 0;
      p.rotX = 0;
      p.rotY = 0;
      p.rotZ = 0;
    } else {
      // B. Spring Dynamics for Vertical Drop & Settle
      const targetY = targetRestY;
      const springK = 32.0; // Responsive elastic drop
      const dampingC = 6.8; // Damped harmonic oscillation (~1.1s settle)
      const forceY = -springK * (p.currentY - targetY) - dampingC * p.velocityY;
      p.velocityY += forceY * dt;
      p.currentY += p.velocityY * dt;

      // Tension recoil: when badge catches bottom of lanyard drop, tension creates forward pitch torque
      if (forceY > 1.4 && p.velocityY > -1.0) {
        const tensionTorque = Math.min(forceY * 0.008, 0.45);
        p.velRotX += tensionTorque;
      }

      // C. Idle Pendulum Sway (Simulating suspension airflow)
      // Two harmonic frequencies create organic, non-repeating movement
      const idleSwayX = Math.sin(time * 1.15) * 0.07 + Math.sin(time * 0.65) * 0.03;
      const idleRotZ = Math.sin(time * 1.15) * 0.035 + Math.sin(time * 0.72) * 0.015;
      const idleRotY = Math.cos(time * 0.9) * 0.045 + Math.sin(time * 1.4) * 0.02;

      // D. Mouse / Touch Parallax & Tilt Limits
      const tiltScale = isMobile ? 0.45 : 1.0;
      let targetTiltX = -py * 0.24 * tiltScale;
      let targetTiltY = px * 0.38 * tiltScale;
      let targetShiftX = px * 0.32 * tiltScale;

      if (pointerPos.current.isDragging) {
        // Drag pulls the card further in 3D
        targetShiftX = px * 0.9;
        targetTiltY = px * 0.65;
        targetTiltX = -py * 0.45;
      }

      // Spring chase for tilt and X position with physical momentum damping
      p.velRotX *= Math.pow(0.92, dt * 60);
      p.velRotY *= Math.pow(0.92, dt * 60);

      p.currentX += (targetShiftX + idleSwayX - p.currentX) * (dt * 5.0);
      p.rotX += (targetTiltX - p.rotX) * (dt * 6.5) + p.velRotX * dt;
      p.rotY += (targetTiltY + idleRotY - p.rotY) * (dt * 6.5) + p.velRotY * dt;
      p.rotZ += (idleRotZ - p.rotZ) * (dt * 6.0);
    }

    // Apply computed transformations to Card Group
    cardGroupRef.current.position.set(p.currentX, p.currentY, 0);
    cardGroupRef.current.rotation.set(p.rotX, p.rotY, p.rotZ);

    // E. Dynamic Lanyard Ribbon Update
    // Anchor point at top ceiling: (0, topAnchorY, -0.1)
    // Clasp attachment point at strap ring of card: cardGroup.position + offset rotated by card orientation
    if (lanyardGeometry) {
      const topAnchorY = Math.max(viewport.height / 2 + 0.3, 3.1);
      const topAnchor = new THREE.Vector3(0, topAnchorY, -0.1);
      const claspOffset = new THREE.Vector3(0, 2.2, 0).applyEuler(cardGroupRef.current.rotation);
      const claspPoint = cardGroupRef.current.position.clone().add(claspOffset);

      if (lanyardMeshRef.current) {
        lanyardMeshRef.current.visible = hasEntered && claspPoint.y < topAnchorY + 0.2;
      }

      // 4-point Bézier / Catmull-Rom curve for natural catenary droop
      const curve = new THREE.CatmullRomCurve3([
        topAnchor,
        new THREE.Vector3(
          topAnchor.x * 0.6 + claspPoint.x * 0.4,
          topAnchor.y * 0.65 + claspPoint.y * 0.35,
          topAnchor.z * 0.5 + claspPoint.z * 0.5 - 0.08
        ),
        new THREE.Vector3(
          topAnchor.x * 0.2 + claspPoint.x * 0.8,
          topAnchor.y * 0.3 + claspPoint.y * 0.7,
          claspPoint.z - 0.04
        ),
        claspPoint,
      ]);

      const positions = lanyardGeometry.attributes.position.array as Float32Array;
      const ribbonWidth = 0.12;

      for (let i = 0; i <= RIBBON_SEGMENTS; i++) {
        const t = i / RIBBON_SEGMENTS;
        const pt = curve.getPoint(t);
        const tangent = curve.getTangent(t);
        // Binormal vector perpendicular to curve and Z axis for flat strap width
        const normal = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize();

        const vIdx = i * 6;
        positions[vIdx + 0] = pt.x - normal.x * (ribbonWidth / 2);
        positions[vIdx + 1] = pt.y - normal.y * (ribbonWidth / 2);
        positions[vIdx + 2] = pt.z;

        positions[vIdx + 3] = pt.x + normal.x * (ribbonWidth / 2);
        positions[vIdx + 4] = pt.y + normal.y * (ribbonWidth / 2);
        positions[vIdx + 5] = pt.z;
      }

      lanyardGeometry.attributes.position.needsUpdate = true;
      lanyardGeometry.computeVertexNormals();
    }
  });

  return (
    <>
      {/* 1. Dynamic Lanyard Mesh */}
      <mesh
        ref={lanyardMeshRef}
        geometry={lanyardGeometry}
        material={lanyardMaterial}
      />

      {/* 2. Hanging Card Group */}
      <group
        ref={cardGroupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={handlePointerDown}
      >
        {/* Card Solid Mesh (Proportions: 2.4w x 3.6h x 0.04d) */}
        <mesh material={materials} castShadow>
          <boxGeometry args={[2.4, 3.6, 0.04]} />
        </mesh>

        {/* Top Metallic Attachment Clasp Assembly */}
        <group position={[0, 1.82, 0]}>
          {/* Slot reinforcement bracket */}
          <mesh material={claspMaterial} position={[0, 0, 0]}>
            <boxGeometry args={[0.42, 0.12, 0.08]} />
          </mesh>

          {/* Swivel Ring Loop through slot */}
          <mesh material={claspMaterial} position={[0, 0.14, 0]} rotation={[0, 0, 0]}>
            <torusGeometry args={[0.08, 0.022, 12, 24]} />
          </mesh>

          {/* Quick-release clasp buckle */}
          <mesh material={claspMaterial} position={[0, 0.28, 0]}>
            <boxGeometry args={[0.22, 0.18, 0.06]} />
          </mesh>

          {/* Strap connection ring */}
          <mesh material={claspMaterial} position={[0, 0.38, 0]}>
            <torusGeometry args={[0.09, 0.024, 12, 24]} />
          </mesh>
        </group>
      </group>
    </>
  );
}

export default BadgeModel;
