import * as THREE from 'three';
import { profileData } from '@/data/profile';

/**
 * Creates high-DPI procedural canvas textures for the front and back of Mansi Konde's 3D identity badge.
 * Renders at 1024x1536 for crisp Retina fidelity without external image downloads.
 */
export function createBadgeTextures(): {
  frontTexture: THREE.CanvasTexture;
  backTexture: THREE.CanvasTexture;
  dispose: () => void;
} {
  const width = 1024;
  const height = 1536;

  // ---------------------------------------------------------------------------
  // 1. FRONT FACE TEXTURE
  // ---------------------------------------------------------------------------
  const frontCanvas = document.createElement('canvas');
  frontCanvas.width = width;
  frontCanvas.height = height;
  const fCtx = frontCanvas.getContext('2d')!;

  // Background base
  fCtx.fillStyle = '#0c0c12';
  fCtx.fillRect(0, 0, width, height);

  // Subtle architectural grid
  fCtx.strokeStyle = 'rgba(42, 42, 54, 0.4)';
  fCtx.lineWidth = 1;
  const gridSize = 32;
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

  // Outer border with chamfered inner guide
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  fCtx.lineWidth = 3;
  fCtx.strokeRect(36, 36, width - 72, height - 72);

  // Top Clip Cutout Hole Indication
  fCtx.fillStyle = '#060608';
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  fCtx.lineWidth = 3;
  const slotW = 160;
  const slotH = 34;
  const slotX = (width - slotW) / 2;
  const slotY = 56;
  fCtx.beginPath();
  fCtx.roundRect(slotX, slotY, slotW, slotH, 16);
  fCtx.fill();
  fCtx.stroke();

  // Header Colophon
  fCtx.fillStyle = '#f4f4f7';
  fCtx.font = 'bold 30px "IBM Plex Mono", monospace';
  fCtx.fillText(profileData.wordmark, 64, 150);

  fCtx.fillStyle = '#71717a';
  fCtx.font = '22px "IBM Plex Mono", monospace';
  fCtx.fillText('// SPECIMEN 2026', 150, 150);

  // Status Indicator Dot
  fCtx.fillStyle = '#00f0ff';
  fCtx.beginPath();
  fCtx.arc(width - 80, 142, 8, 0, Math.PI * 2);
  fCtx.fill();

  fCtx.fillStyle = '#00f0ff';
  fCtx.font = 'bold 20px "IBM Plex Mono", monospace';
  fCtx.textAlign = 'right';
  fCtx.fillText('ACTIVE', width - 98, 150);
  fCtx.textAlign = 'left';

  // Divider
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  fCtx.beginPath();
  fCtx.moveTo(64, 180);
  fCtx.lineTo(width - 64, 180);
  fCtx.stroke();

  // Portrait Specimen Window (3:4 ratio)
  const portraitW = 540;
  const portraitH = 680;
  const portraitX = (width - portraitW) / 2;
  const portraitY = 220;

  // Portrait frame background
  fCtx.fillStyle = '#08080c';
  fCtx.fillRect(portraitX, portraitY, portraitW, portraitH);
  fCtx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
  fCtx.lineWidth = 2;
  fCtx.strokeRect(portraitX, portraitY, portraitW, portraitH);

  // Corner tick marks
  const tick = 24;
  fCtx.strokeStyle = '#00f0ff';
  fCtx.lineWidth = 4;
  // Top-left
  fCtx.beginPath();
  fCtx.moveTo(portraitX, portraitY + tick);
  fCtx.lineTo(portraitX, portraitY);
  fCtx.lineTo(portraitX + tick, portraitY);
  fCtx.stroke();
  // Top-right
  fCtx.beginPath();
  fCtx.moveTo(portraitX + portraitW - tick, portraitY);
  fCtx.lineTo(portraitX + portraitW, portraitY);
  fCtx.lineTo(portraitX + portraitW, portraitY + tick);
  fCtx.stroke();
  // Bottom-left
  fCtx.beginPath();
  fCtx.moveTo(portraitX, portraitY + portraitH - tick);
  fCtx.lineTo(portraitX, portraitY + portraitH);
  fCtx.lineTo(portraitX + tick, portraitY + portraitH);
  fCtx.stroke();
  // Bottom-right
  fCtx.beginPath();
  fCtx.moveTo(portraitX + portraitW - tick, portraitY + portraitH);
  fCtx.lineTo(portraitX + portraitW, portraitY + portraitH);
  fCtx.lineTo(portraitX + portraitW, portraitY + portraitH - tick);
  fCtx.stroke();

  // Radar reticle in portrait window
  const pCenterX = portraitX + portraitW / 2;
  const pCenterY = portraitY + portraitH / 2 - 30;

  fCtx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
  fCtx.lineWidth = 1.5;
  fCtx.beginPath();
  fCtx.arc(pCenterX, pCenterY, 110, 0, Math.PI * 2);
  fCtx.stroke();

  fCtx.setLineDash([6, 6]);
  fCtx.beginPath();
  fCtx.arc(pCenterX, pCenterY, 75, 0, Math.PI * 2);
  fCtx.stroke();
  fCtx.setLineDash([]);

  // Silhouette avatar icon
  fCtx.fillStyle = 'rgba(0, 240, 255, 0.15)';
  fCtx.beginPath();
  fCtx.arc(pCenterX, pCenterY - 20, 36, 0, Math.PI * 2);
  fCtx.fill();
  fCtx.beginPath();
  fCtx.arc(pCenterX, pCenterY + 70, 60, Math.PI, 0);
  fCtx.fill();

  // Portrait caption
  fCtx.fillStyle = '#f4f4f7';
  fCtx.font = 'bold 22px "IBM Plex Mono", monospace';
  fCtx.textAlign = 'center';
  fCtx.fillText('SPECIMEN // MK-01', pCenterX, portraitY + portraitH - 70);

  fCtx.fillStyle = '#71717a';
  fCtx.font = '18px "IBM Plex Mono", monospace';
  fCtx.fillText('PHOTOMETRIC IDENTITY', pCenterX, portraitY + portraitH - 40);
  fCtx.textAlign = 'left';

  // Holographic Security Strip (Iridescent ribbon with subtle rainbow gradient)
  const holoY = 930;
  const holoH = 46;
  const holoGrad = fCtx.createLinearGradient(64, holoY, width - 64, holoY);
  holoGrad.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
  holoGrad.addColorStop(0.25, 'rgba(215, 166, 184, 0.35)');
  holoGrad.addColorStop(0.5, 'rgba(185, 167, 208, 0.4)');
  holoGrad.addColorStop(0.75, 'rgba(0, 240, 255, 0.35)');
  holoGrad.addColorStop(1, 'rgba(120, 255, 200, 0.25)');

  fCtx.fillStyle = holoGrad;
  fCtx.fillRect(64, holoY, width - 128, holoH);

  fCtx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  fCtx.font = 'bold 16px "IBM Plex Mono", monospace';
  fCtx.letterSpacing = '4px';
  fCtx.fillText('VERIFIED AUTHENTIC // GOOGLE ANTIGRAVITY ENGINE // MK-2026', 80, holoY + 28);
  fCtx.letterSpacing = '0px';

  // Name & Identity Typography
  fCtx.fillStyle = '#f4f4f7';
  fCtx.font = 'bold 64px "DM Sans", sans-serif';
  fCtx.fillText(profileData.name.toUpperCase(), 64, 1060);

  fCtx.fillStyle = '#00f0ff';
  fCtx.font = 'bold 30px "IBM Plex Mono", monospace';
  fCtx.fillText(profileData.role.toUpperCase(), 64, 1110);

  fCtx.fillStyle = '#a1a1aa';
  fCtx.font = '22px "DM Sans", sans-serif';
  fCtx.fillText(profileData.positioning, 64, 1150);

  // Technical Metadata Grid
  const metaY = 1200;
  fCtx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  fCtx.beginPath();
  fCtx.moveTo(64, metaY);
  fCtx.lineTo(width - 64, metaY);
  fCtx.stroke();

  fCtx.fillStyle = '#71717a';
  fCtx.font = '18px "IBM Plex Mono", monospace';
  fCtx.fillText('LOCATION', 64, metaY + 36);
  fCtx.fillText('TIMEZONE', 340, metaY + 36);
  fCtx.fillText('SERIAL', 640, metaY + 36);

  fCtx.fillStyle = '#f4f4f7';
  fCtx.font = 'bold 22px "IBM Plex Mono", monospace';
  fCtx.fillText('PUNE, INDIA', 64, metaY + 70);
  fCtx.fillText(profileData.timezone, 340, metaY + 70);
  fCtx.fillText('MK-CE-089', 640, metaY + 70);

  // Barcode representation
  const barcodeY = 1340;
  const barcodeH = 80;
  fCtx.fillStyle = '#ffffff';

  // Procedural barcode pattern
  let bx = 64;
  const barPattern = [
    3, 2, 6, 2, 4, 3, 2, 6, 2, 3, 5, 2, 7, 3, 2, 4, 2, 6, 3, 4, 2, 7, 2, 3, 5, 2, 4, 3, 6, 2, 3,
    5, 2, 6, 3, 2, 5, 3, 2, 6, 2, 4, 3, 7, 2, 3, 5, 2, 6, 2, 3, 4, 5, 2, 6, 3, 2, 4, 2, 5, 3, 6,
    2, 4, 3, 5, 2, 6, 3, 2, 4,
  ];

  for (let i = 0; i < barPattern.length; i++) {
    const barWidth = barPattern[i];
    if (i % 2 === 0) {
      fCtx.fillRect(bx, barcodeY, barWidth * 3.5, barcodeH);
    }
    bx += barWidth * 3.5 + 4;
    if (bx > width - 200) break;
  }

  // Barcode number
  fCtx.fillStyle = '#71717a';
  fCtx.font = '20px "IBM Plex Mono", monospace';
  fCtx.fillText('MK // 2026 // 89410-09', 64, barcodeY + barcodeH + 34);

  // NFC Wave icon
  fCtx.strokeStyle = '#00f0ff';
  fCtx.lineWidth = 3;
  const nfcX = width - 110;
  const nfcY = barcodeY + 40;
  for (let r = 16; r <= 36; r += 10) {
    fCtx.beginPath();
    fCtx.arc(nfcX, nfcY, r, -Math.PI * 0.35, Math.PI * 0.35);
    fCtx.stroke();
  }

  // ---------------------------------------------------------------------------
  // 2. BACK FACE TEXTURE
  // ---------------------------------------------------------------------------
  const backCanvas = document.createElement('canvas');
  backCanvas.width = width;
  backCanvas.height = height;
  const bCtx = backCanvas.getContext('2d')!;

  // Background
  bCtx.fillStyle = '#0a0a0f';
  bCtx.fillRect(0, 0, width, height);

  // Carbon weave texture
  bCtx.fillStyle = '#12121a';
  for (let x = 0; x < width; x += 16) {
    for (let y = 0; y < height; y += 16) {
      if ((x + y) % 32 === 0) {
        bCtx.fillRect(x, y, 16, 16);
      }
    }
  }

  // Outer border
  bCtx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  bCtx.lineWidth = 3;
  bCtx.strokeRect(36, 36, width - 72, height - 72);

  // Slot hole matching front
  bCtx.fillStyle = '#060608';
  bCtx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  bCtx.lineWidth = 3;
  bCtx.beginPath();
  bCtx.roundRect(slotX, slotY, slotW, slotH, 16);
  bCtx.fill();
  bCtx.stroke();

  // Magnetic stripe
  bCtx.fillStyle = '#040406';
  bCtx.fillRect(36, 140, width - 72, 160);

  // Metallic Smart Chip graphic
  const chipX = 72;
  const chipY = 360;
  const chipW = 160;
  const chipH = 130;
  bCtx.fillStyle = '#c5a059'; // Brushed gold brass
  bCtx.beginPath();
  bCtx.roundRect(chipX, chipY, chipW, chipH, 16);
  bCtx.fill();

  // Smart chip contact lines
  bCtx.strokeStyle = '#8c6d32';
  bCtx.lineWidth = 2.5;
  bCtx.beginPath();
  bCtx.moveTo(chipX + 50, chipY);
  bCtx.lineTo(chipX + 50, chipY + chipH);
  bCtx.moveTo(chipX + 110, chipY);
  bCtx.lineTo(chipX + 110, chipY + chipH);
  bCtx.moveTo(chipX, chipY + chipH / 2);
  bCtx.lineTo(chipX + chipW, chipY + chipH / 2);
  bCtx.stroke();

  // Terms and colophon
  bCtx.fillStyle = '#f4f4f7';
  bCtx.font = 'bold 26px "IBM Plex Mono", monospace';
  bCtx.fillText('SECURITY CREDENTIAL SPECIFICATION', 72, 560);

  bCtx.fillStyle = '#a1a1aa';
  bCtx.font = '22px "DM Sans", sans-serif';
  const noticeLines = [
    'This credential confirms engineering identity for Mansi Konde,',
    'specializing in creative engineering, interactive 3D computing,',
    'and performant distributed interface architecture.',
    '',
    'All intellectual property, project case studies, and engineering',
    'benchmarks are authenticated under active GitHub verification.',
  ];

  let ny = 620;
  for (const line of noticeLines) {
    bCtx.fillText(line, 72, ny);
    ny += 36;
  }

  // Contact & verified link
  bCtx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  bCtx.beginPath();
  bCtx.moveTo(72, 920);
  bCtx.lineTo(width - 72, 920);
  bCtx.stroke();

  bCtx.fillStyle = '#71717a';
  bCtx.font = '20px "IBM Plex Mono", monospace';
  bCtx.fillText('COMMUNICATION CHANNEL', 72, 970);
  bCtx.fillText('AUTHENTICATED REPOSITORY', 72, 1070);

  bCtx.fillStyle = '#00f0ff';
  bCtx.font = 'bold 26px "IBM Plex Mono", monospace';
  bCtx.fillText(profileData.email.address, 72, 1010);
  bCtx.fillText(profileData.socials[0]?.url || 'https://github.com/Mansi-2024', 72, 1110);

  // 2D QR / Matrix Placeholder in bottom corner
  const qrX = width - 240;
  const qrY = 1200;
  const qrSize = 160;
  bCtx.fillStyle = '#f4f4f7';
  bCtx.fillRect(qrX, qrY, qrSize, qrSize);
  bCtx.fillStyle = '#0a0a0f';
  bCtx.fillRect(qrX + 10, qrY + 10, qrSize - 20, qrSize - 20);

  // QR corner marks
  bCtx.fillStyle = '#00f0ff';
  bCtx.fillRect(qrX + 16, qrY + 16, 36, 36);
  bCtx.fillRect(qrX + qrSize - 52, qrY + 16, 36, 36);
  bCtx.fillRect(qrX + 16, qrY + qrSize - 52, 36, 36);

  // Convert to Three.js CanvasTextures
  const frontTexture = new THREE.CanvasTexture(frontCanvas);
  frontTexture.colorSpace = THREE.SRGBColorSpace;
  frontTexture.anisotropy = 8;

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
