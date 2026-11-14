import * as THREE from 'three';
import { profileData } from '@/data/profile';

/**
 * Creates high-DPI procedural canvas textures for the front and back of Mansi Konde's 3D identity badge.
 * Renders at 1024x1536 for crisp Retina fidelity.
 *
 * Implements:
 * - Authentic 520x650 photo crop of Mansi Konde in 3:4 portrait window
 * - High-contrast editorial typography (#FFFFFF, #E4E4E7, #D4D4D8) without futuristic/neon styling
 * - Clear distinction between verifiable links (GitHub repository) and decorative design elements (specimen badge & build hash)
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
  // 1. FRONT FACE TEXTURE (Editorial Physical Credential)
  // ---------------------------------------------------------------------------
  const frontCanvas = document.createElement('canvas');
  frontCanvas.width = width;
  frontCanvas.height = height;
  const fCtx = frontCanvas.getContext('2d')!;

  // Background base (Warm Charcoal)
  fCtx.fillStyle = '#121214';
  fCtx.fillRect(0, 0, width, height);

  // Subtle architectural grid texture
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
  fCtx.lineWidth = 1;
  const gridSize = 40;
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
  fCtx.strokeRect(40, 40, width - 80, height - 80);

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

  // Header Colophon
  fCtx.fillStyle = '#FFFFFF';
  fCtx.font = 'bold 28px "JetBrains Mono", monospace';
  fCtx.fillText(profileData.wordmark, 72, 150);

  fCtx.fillStyle = '#A1A1AA';
  fCtx.font = '500 20px "JetBrains Mono", monospace';
  fCtx.fillText('// FOLIO 2026', 150, 150);

  // Status Indicator Dot (Subtle Emerald)
  fCtx.fillStyle = '#34D399';
  fCtx.beginPath();
  fCtx.arc(width - 80, 142, 6, 0, Math.PI * 2);
  fCtx.fill();

  fCtx.fillStyle = '#E4E4E7';
  fCtx.font = '600 18px "JetBrains Mono", monospace';
  fCtx.textAlign = 'right';
  fCtx.fillText('AVAILABLE', width - 96, 150);
  fCtx.textAlign = 'left';

  // Divider
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.10)';
  fCtx.beginPath();
  fCtx.moveTo(72, 180);
  fCtx.lineTo(width - 72, 180);
  fCtx.stroke();

  // Portrait Specimen Window (3:4 ratio)
  const portraitW = 520;
  const portraitH = 650;
  const portraitX = (width - portraitW) / 2;
  const portraitY = 220;

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
  fCtx.fillText(profileData.name.toUpperCase(), 72, 950);

  fCtx.fillStyle = '#E4E4E7';
  fCtx.font = '600 24px "JetBrains Mono", monospace';
  fCtx.fillText(profileData.role.toUpperCase(), 72, 995);

  fCtx.fillStyle = '#D4D4D8';
  fCtx.font = '500 20px "Inter", sans-serif';
  fCtx.fillText('Systems Architecture • Interactive 3D • Verifiable Software', 72, 1035);

  // Divider
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.10)';
  fCtx.beginPath();
  fCtx.moveTo(72, 1080);
  fCtx.lineTo(width - 72, 1080);
  fCtx.stroke();

  // Tagline Pull Quote on Badge
  fCtx.fillStyle = '#FFFFFF';
  fCtx.font = 'italic 24px "Newsreader", serif';
  fCtx.fillText('"I follow the question. Then I build the answer."', 72, 1130);

  // Technical Metadata Grid
  const metaY = 1190;
  fCtx.fillStyle = '#A1A1AA';
  fCtx.font = '600 16px "JetBrains Mono", monospace';
  fCtx.fillText('LOCATION', 72, metaY);
  fCtx.fillText('TIMEZONE', 340, metaY);
  fCtx.fillText('SPECIMEN TYPE', 620, metaY);

  fCtx.fillStyle = '#FFFFFF';
  fCtx.font = '600 20px "JetBrains Mono", monospace';
  fCtx.fillText('MUMBAI, IN', 72, metaY + 34);
  fCtx.fillText('IST (UTC+5:30)', 340, metaY + 34);
  fCtx.fillText('PORTFOLIO BADGE', 620, metaY + 34);

  // Clearly designated commit hash bar (Decorative Design Element)
  const hashY = 1290;
  fCtx.fillStyle = '#18181B';
  fCtx.fillRect(72, hashY, width - 144, 70);
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.10)';
  fCtx.lineWidth = 1;
  fCtx.strokeRect(72, hashY, width - 144, 70);

  fCtx.fillStyle = '#A1A1AA';
  fCtx.font = '600 14px "JetBrains Mono", monospace';
  fCtx.fillText('FOLIO COMMIT // DESIGN SPECIMEN', 92, hashY + 28);

  fCtx.fillStyle = '#E4E4E7';
  fCtx.font = '500 16px "JetBrains Mono", monospace';
  fCtx.fillText('GIT HEAD: 7a7f442b1f2026e98556c2', 92, hashY + 54);

  // Bottom Repository Link (Verifiable link)
  fCtx.fillStyle = '#A1A1AA';
  fCtx.font = '600 16px "JetBrains Mono", monospace';
  fCtx.fillText('VERIFIABLE REPOSITORY // github.com/Mansi-2024', 72, 1420);

  // ---------------------------------------------------------------------------
  // 2. BACK FACE TEXTURE (Editorial Colophon & Values)
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
  bCtx.strokeRect(40, 40, width - 80, height - 80);

  // Slot hole matching front
  bCtx.fillStyle = '#0B0B0C';
  bCtx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
  bCtx.lineWidth = 2;
  bCtx.beginPath();
  bCtx.roundRect(slotX, slotY, slotW, slotH, 16);
  bCtx.fill();
  bCtx.stroke();

  // Subtle Matte Band
  bCtx.fillStyle = '#141416';
  bCtx.fillRect(40, 140, width - 80, 130);

  bCtx.fillStyle = '#A1A1AA';
  bCtx.font = '600 18px "JetBrains Mono", monospace';
  bCtx.fillText('FOLIO DESIGN SPECIFICATION // VOL. 2026', 72, 215);

  // Core Architectural Values
  bCtx.fillStyle = '#FFFFFF';
  bCtx.font = 'bold 30px "Newsreader", serif';
  bCtx.fillText('Core Architectural Tenets', 72, 350);

  const tenets = [
    { num: '01', title: 'Determinism Over Heuristics', desc: 'Strict state machines and verified claim provenance over black-box AI.' },
    { num: '02', title: 'Tactile Human-Interface Craft', desc: 'Precision ergonomics, physical spring damping, and purposeful motion.' },
    { num: '03', title: 'Evidence-Based Verification', desc: 'Cryptographic receipts, AST analysis, and isolated test execution.' },
  ];

  let ty = 430;
  for (const t of tenets) {
    bCtx.fillStyle = '#38BDF8';
    bCtx.font = '600 18px "JetBrains Mono", monospace';
    bCtx.fillText(`[${t.num}]`, 72, ty);

    bCtx.fillStyle = '#FFFFFF';
    bCtx.font = '600 22px "Inter", sans-serif';
    bCtx.fillText(t.title, 130, ty);

    bCtx.fillStyle = '#D4D4D8';
    bCtx.font = '400 19px "Inter", sans-serif';
    bCtx.fillText(t.desc, 130, ty + 30);

    ty += 110;
  }

  // Divider
  bCtx.strokeStyle = 'rgba(255, 255, 255, 0.10)';
  bCtx.beginPath();
  bCtx.moveTo(72, ty + 20);
  bCtx.lineTo(width - 72, ty + 20);
  bCtx.stroke();

  // Direct Communication & Verifiable Repository
  const commY = ty + 80;
  bCtx.fillStyle = '#A1A1AA';
  bCtx.font = '600 16px "JetBrains Mono", monospace';
  bCtx.fillText('DIRECT ELECTRONIC MAILBOX', 72, commY);
  bCtx.fillText('VERIFIABLE PUBLIC REPOSITORY', 72, commY + 110);

  bCtx.fillStyle = '#FFFFFF';
  bCtx.font = '600 24px "JetBrains Mono", monospace';
  bCtx.fillText(profileData.email.address, 72, commY + 40);
  bCtx.fillText('github.com/Mansi-2024', 72, commY + 150);

  // Minimal Specimen Stamp Block (Bottom Right)
  const qrX = width - 240;
  const qrY = height - 260;
  const qrSize = 160;
  bCtx.fillStyle = '#18181B';
  bCtx.fillRect(qrX, qrY, qrSize, qrSize);
  bCtx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  bCtx.strokeRect(qrX, qrY, qrSize, qrSize);

  bCtx.fillStyle = '#FFFFFF';
  bCtx.font = '600 12px "JetBrains Mono", monospace';
  bCtx.fillText('MK.FOLIO.2026', qrX + 16, qrY + 36);
  bCtx.fillStyle = '#D4D4D8';
  bCtx.font = '500 11px "JetBrains Mono", monospace';
  bCtx.fillText('DESIGN SPECIMEN', qrX + 16, qrY + 60);
  bCtx.fillStyle = '#38BDF8';
  bCtx.fillText('GITHUB VERIFIED', qrX + 16, qrY + 84);
  bCtx.fillStyle = '#A1A1AA';
  bCtx.fillText('MUMBAI • IN', qrX + 16, qrY + 108);

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
