import * as THREE from 'three';
import { profileData } from '@/data/profile';

/**
 * Creates high-DPI procedural canvas textures for the front and back of Mansi Konde's 3D identity badge.
 * Renders at 1024x1536 for crisp Retina fidelity.
 *
 * Implements:
 * - Minimal, authentic personal identity object
 * - Authentic 520x650 photo crop of Mansi Konde in 3:4 portrait window
 * - High-contrast, clean typography (#FFFFFF, #E4E4E7, #D4D4D8) without futuristic/neon styling
 * - Genuine contact & repository links (GitHub & direct email)
 * - Zero fake serial numbers, zero decorative hashes, zero simulated security credentials
 * - Safe disposal and automatic WebGL texture update upon photo load
 */
export function createBadgeTextures(): {
  frontTexture: THREE.CanvasTexture;
  backTexture: THREE.CanvasTexture;
  dispose: () => void;
} {
  const width = 1024;
  const height = 1536;

  // ---------------------------------------------------------------------------
  // 1. FRONT FACE TEXTURE (Minimal Personal Identity Object)
  // ---------------------------------------------------------------------------
  const frontCanvas = document.createElement('canvas');
  frontCanvas.width = width;
  frontCanvas.height = height;
  const fCtx = frontCanvas.getContext('2d')!;

  // Background base (Warm Charcoal)
  fCtx.fillStyle = '#121214';
  fCtx.fillRect(0, 0, width, height);

  // Subtle architectural grid texture
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
  fCtx.lineWidth = 1;
  const gridSize = 48;
  for (let x = 0; x < width; x += gridSize) {
    fCtx.beginPath();
    fCtx.moveTo(x, 0);
    fCtx.lineTo(x, height);
    fCtx.stroke();
  }
  for (let y = 0; y < height; y += gridSize) {
    fCtx.beginPath();
    fCtx.moveTo(0, y);
    fCtx.lineTo(width, y);
    fCtx.stroke();
  }

  // Outer border with subtle inner margin
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  fCtx.lineWidth = 2.5;
  fCtx.strokeRect(44, 44, width - 88, height - 88);

  // Top Clip Cutout Hole
  fCtx.fillStyle = '#0B0B0C';
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
  fCtx.lineWidth = 2;
  const slotW = 160;
  const slotH = 32;
  const slotX = (width - slotW) / 2;
  const slotY = 56;
  fCtx.beginPath();
  fCtx.roundRect(slotX, slotY, slotW, slotH, 16);
  fCtx.fill();
  fCtx.stroke();

  // Header Bar: Minimal wordmark
  fCtx.fillStyle = '#FFFFFF';
  fCtx.font = 'bold 26px "JetBrains Mono", monospace';
  fCtx.fillText(profileData.name.toUpperCase(), 76, 146);

  fCtx.fillStyle = '#A1A1AA';
  fCtx.font = '500 18px "JetBrains Mono", monospace';
  fCtx.textAlign = 'right';
  fCtx.fillText('FOLIO', width - 76, 146);
  fCtx.textAlign = 'left';

  // Divider
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.10)';
  fCtx.beginPath();
  fCtx.moveTo(76, 175);
  fCtx.lineTo(width - 76, 175);
  fCtx.stroke();

  // Portrait Window (520x650 px, 4:5 ratio)
  const portraitW = 520;
  const portraitH = 650;
  const portraitX = (width - portraitW) / 2;
  const portraitY = 215;

  // Portrait frame placeholder background
  fCtx.fillStyle = '#18181B';
  fCtx.beginPath();
  fCtx.roundRect(portraitX, portraitY, portraitW, portraitH, 12);
  fCtx.fill();
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  fCtx.lineWidth = 1.5;
  fCtx.stroke();

  // Three.js CanvasTextures initialization
  const frontTexture = new THREE.CanvasTexture(frontCanvas);
  frontTexture.colorSpace = THREE.SRGBColorSpace;
  frontTexture.anisotropy = 8;

  // Draw authentic portrait photograph
  const drawPortraitPhoto = (imageElement: HTMLImageElement) => {
    fCtx.save();
    fCtx.beginPath();
    fCtx.roundRect(portraitX, portraitY, portraitW, portraitH, 12);
    fCtx.clip();
    fCtx.drawImage(imageElement, portraitX, portraitY, portraitW, portraitH);
    fCtx.restore();

    // Architectural inner hairline ring
    fCtx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
    fCtx.lineWidth = 2;
    fCtx.beginPath();
    fCtx.roundRect(portraitX, portraitY, portraitW, portraitH, 12);
    fCtx.stroke();

    frontTexture.needsUpdate = true;
  };

  if (typeof window !== 'undefined') {
    const portraitImg = new Image();
    portraitImg.crossOrigin = 'anonymous';
    portraitImg.onload = () => {
      drawPortraitPhoto(portraitImg);
    };
    portraitImg.src = '/assets/mansi-konde-badge.png';
    if (portraitImg.complete && portraitImg.naturalWidth > 0) {
      drawPortraitPhoto(portraitImg);
    }
  }

  // Name & Identity Typography
  fCtx.fillStyle = '#FFFFFF';
  fCtx.font = 'bold 56px "Inter", sans-serif';
  fCtx.fillText(profileData.name.toUpperCase(), 76, 960);

  fCtx.fillStyle = '#E4E4E7';
  fCtx.font = '600 24px "JetBrains Mono", monospace';
  fCtx.fillText(profileData.role.toUpperCase(), 76, 1010);

  fCtx.fillStyle = '#D4D4D8';
  fCtx.font = '500 20px "Inter", sans-serif';
  fCtx.fillText('Full-Stack Development • Applied AI • Software Systems', 76, 1055);

  // Divider
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.10)';
  fCtx.beginPath();
  fCtx.moveTo(76, 1105);
  fCtx.lineTo(width - 76, 1105);
  fCtx.stroke();

  // Tagline Pull Quote on Badge
  fCtx.fillStyle = '#FFFFFF';
  fCtx.font = 'italic 23px "Newsreader", serif';
  fCtx.fillText('"Full-stack engineer building software that feels effortless"', 76, 1165);

  // Bottom Repository Link (Authentic & Direct)
  const repoY = 1380;
  fCtx.fillStyle = '#A1A1AA';
  fCtx.font = '600 15px "JetBrains Mono", monospace';
  fCtx.fillText('GITHUB PROFILE', 76, repoY);

  fCtx.fillStyle = '#FFFFFF';
  fCtx.font = '600 22px "JetBrains Mono", monospace';
  fCtx.fillText('github.com/Mansi-2024', 76, repoY + 36);

  // ---------------------------------------------------------------------------
  // 2. BACK FACE TEXTURE (Personal Overview & Practices)
  // ---------------------------------------------------------------------------
  const backCanvas = document.createElement('canvas');
  backCanvas.width = width;
  backCanvas.height = height;
  const bCtx = backCanvas.getContext('2d')!;

  // Background
  bCtx.fillStyle = '#0E0E10';
  bCtx.fillRect(0, 0, width, height);

  // Outer border
  bCtx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  bCtx.lineWidth = 2.5;
  bCtx.strokeRect(44, 44, width - 88, height - 88);

  // Slot hole matching front
  bCtx.fillStyle = '#0B0B0C';
  bCtx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
  bCtx.lineWidth = 2;
  bCtx.beginPath();
  bCtx.roundRect(slotX, slotY, slotW, slotH, 16);
  bCtx.fill();
  bCtx.stroke();

  // Top Minimal Colophon
  bCtx.fillStyle = '#FFFFFF';
  bCtx.font = 'bold 26px "JetBrains Mono", monospace';
  bCtx.fillText(profileData.name.toUpperCase(), 76, 146);

  bCtx.fillStyle = '#A1A1AA';
  bCtx.font = '500 18px "JetBrains Mono", monospace';
  bCtx.textAlign = 'right';
  bCtx.fillText('ABOUT', width - 76, 146);
  bCtx.textAlign = 'left';

  // Divider
  bCtx.strokeStyle = 'rgba(255, 255, 255, 0.10)';
  bCtx.beginPath();
  bCtx.moveTo(76, 175);
  bCtx.lineTo(width - 76, 175);
  bCtx.stroke();

  // Engineering Practices Title
  bCtx.fillStyle = '#FFFFFF';
  bCtx.font = 'bold 30px "Newsreader", serif';
  bCtx.fillText('Technical Focus', 76, 260);

  const practices = [
    {
      num: '01',
      title: 'Full-Stack Development',
      desc: 'Building responsive web applications with React, Next.js, and TypeScript, connected to backend APIs.',
    },
    {
      num: '02',
      title: 'Applied AI Integration',
      desc: 'Implementing practical machine learning solutions and intelligent features to solve real problems.',
    },
    {
      num: '03',
      title: 'Software Craft & Systems',
      desc: 'Writing clean, maintainable code, debugging systematically, and building practical software tools.',
    },
  ];

  let py = 350;
  for (const p of practices) {
    bCtx.fillStyle = '#38BDF8';
    bCtx.font = '600 18px "JetBrains Mono", monospace';
    bCtx.fillText(`[${p.num}]`, 76, py);

    bCtx.fillStyle = '#FFFFFF';
    bCtx.font = '600 22px "Inter", sans-serif';
    bCtx.fillText(p.title, 134, py);

    bCtx.fillStyle = '#D4D4D8';
    bCtx.font = '400 19px "Inter", sans-serif';
    bCtx.fillText(p.desc, 134, py + 32);

    py += 130;
  }

  // Divider
  bCtx.strokeStyle = 'rgba(255, 255, 255, 0.10)';
  bCtx.beginPath();
  bCtx.moveTo(76, py + 40);
  bCtx.lineTo(width - 76, py + 40);
  bCtx.stroke();

  // Communication & Public Repository
  const commY = py + 110;
  bCtx.fillStyle = '#A1A1AA';
  bCtx.font = '600 15px "JetBrains Mono", monospace';
  bCtx.fillText('DIRECT EMAIL', 76, commY);
  bCtx.fillText('GITHUB REPOSITORY', 76, commY + 120);

  bCtx.fillStyle = '#FFFFFF';
  bCtx.font = '600 24px "JetBrains Mono", monospace';
  bCtx.fillText(profileData.email.address, 76, commY + 42);
  bCtx.fillText('github.com/Mansi-2024', 76, commY + 162);

  const backTexture = new THREE.CanvasTexture(backCanvas);
  backTexture.colorSpace = THREE.SRGBColorSpace;
  backTexture.anisotropy = 8;

  return {
    frontTexture,
    backTexture,
    dispose: () => {
      frontTexture.dispose();
      backTexture.dispose();
    },
  };
}
