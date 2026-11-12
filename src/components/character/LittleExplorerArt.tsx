import React from 'react';
import { ExplorerPose } from './types';

interface LittleExplorerArtProps {
  pose: ExplorerPose;
  className?: string;
  size?: number;
}

/**
 * Little Explorer — Original Handcrafted SVG Editorial Character
 * Designed specifically for Mansi Konde's Plum Editorial Portfolio.
 * Shared proportions, color tokens, and ink aesthetic across all 5 poses.
 */
export const LittleExplorerArt: React.FC<LittleExplorerArtProps> = ({
  pose,
  className = '',
  size = 110,
}) => {
  return (
    <svg
      viewBox="0 0 120 130"
      width={size}
      height={(size * 130) / 120}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none ${className}`}
      role="img"
      aria-label={`Little Explorer character in ${pose} pose`}
    >
      <defs>
        {/* Soft Lavender Glow */}
        <filter id="explorer-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* RENDER POSE */}
      {pose === 'exploring' && <PoseExploring />}
      {pose === 'observing' && <PoseObserving />}
      {pose === 'thinking' && <PoseThinking />}
      {pose === 'building' && <PoseBuilding />}
      {pose === 'celebrating' && <PoseCelebrating />}
    </svg>
  );
};

/* =========================================================================
   POSE 1: EXPLORING (In mid-stride with magnifying glass & field notebook)
   ========================================================================= */
const PoseExploring: React.FC = () => {
  return (
    <g id="pose-exploring">
      {/* Ground stride dust & shadow */}
      <ellipse cx="60" cy="122" rx="28" ry="4" fill="#211826" opacity="0.6" />
      <path d="M 32 121 Q 26 120 22 122" stroke="#B7AAB8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Back Leg (Right) — trailing back */}
      <path
        d="M 65 85 L 76 102 Q 78 114 86 114"
        stroke="#403344"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Back Boot */}
      <path
        d="M 74 108 L 86 109 Q 90 113 86 117 L 76 117 Z"
        fill="#302437"
        stroke="#403344"
        strokeWidth="1.5"
      />
      {/* Boot lace accent */}
      <line x1="79" y1="110" x2="81" y2="114" stroke="#D7A6B8" strokeWidth="1.2" />

      {/* Trailing Scarf Tail */}
      <path
        d="M 68 53 Q 86 50 92 57 Q 88 64 68 58 Z"
        fill="#D7A6B8"
        stroke="#403344"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Body / Explorer Coat (A-Line field jacket) */}
      <path
        d="M 48 56 Q 42 74 44 88 Q 60 92 74 86 Q 74 72 70 56 Z"
        fill="#211826"
        stroke="#403344"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Coat Center Stitch & Buttons */}
      <path d="M 59 56 L 59 89" stroke="#403344" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="59" cy="64" r="1.5" fill="#F3EAF0" />
      <circle cx="59" cy="73" r="1.5" fill="#F3EAF0" />
      <circle cx="59" cy="82" r="1.5" fill="#F3EAF0" />

      {/* Pocket on coat */}
      <rect x="47" y="72" width="7" height="8" rx="1.5" fill="#302437" stroke="#403344" strokeWidth="1" />
      <line x1="47" y1="74" x2="54" y2="74" stroke="#D7A6B8" strokeWidth="1" />

      {/* Crossbody Bag */}
      <line x1="48" y1="58" x2="68" y2="82" stroke="#B7AAB8" strokeWidth="1.75" />
      <rect x="66" y="74" width="11" height="12" rx="2" fill="#302437" stroke="#403344" strokeWidth="1.5" />
      <path d="M 66 77 Q 71.5 81 77 77" stroke="#D7A6B8" strokeWidth="1.2" fill="none" />
      <circle cx="71.5" cy="81" r="1" fill="#F3EAF0" />

      {/* Front Leg (Left) — stepping forward */}
      <path
        d="M 52 86 L 45 104 Q 42 116 33 116"
        stroke="#403344"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Front Boot */}
      <path
        d="M 43 110 L 31 111 Q 28 116 33 119 L 45 119 Z"
        fill="#302437"
        stroke="#403344"
        strokeWidth="1.5"
      />
      <line x1="37" y1="112" x2="39" y2="116" stroke="#D7A6B8" strokeWidth="1.2" />

      {/* Back Arm holding Field Journal */}
      <path d="M 67 58 Q 78 68 76 77" stroke="#211826" strokeWidth="4.5" strokeLinecap="round" />
      {/* Notebook */}
      <rect x="73" y="70" width="12" height="15" rx="1.5" fill="#B7AAB8" stroke="#403344" strokeWidth="1.5" transform="rotate(12 73 70)" />
      <line x1="75" y1="73" x2="83" y2="75" stroke="#211826" strokeWidth="1" />
      <line x1="74" y1="77" x2="82" y2="79" stroke="#211826" strokeWidth="1" />
      {/* Bookmark Ribbon */}
      <path d="M 80 84 Q 84 88 82 92" stroke="#D7A6B8" strokeWidth="1.5" strokeLinecap="round" />

      {/* Scarf Around Neck */}
      <path
        d="M 48 48 Q 59 54 70 48 Q 72 56 59 58 Q 46 56 48 48 Z"
        fill="#D7A6B8"
        stroke="#403344"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />

      {/* Head */}
      <ellipse cx="58" cy="36" rx="16" ry="15" fill="#F3EAF0" stroke="#403344" strokeWidth="1.75" />
      {/* Rosy Blush */}
      <circle cx="50" cy="40" r="3" fill="#D7A6B8" opacity="0.45" />
      <circle cx="67" cy="40" r="3" fill="#D7A6B8" opacity="0.45" />
      {/* Dot Eyes — gazing eager forward-left */}
      <circle cx="52" cy="35" r="2" fill="#211826" />
      <circle cx="51.5" cy="34.5" r="0.6" fill="#F3EAF0" />
      <circle cx="64" cy="35" r="2" fill="#211826" />
      <circle cx="63.5" cy="34.5" r="0.6" fill="#F3EAF0" />
      {/* Gentle curious smile */}
      <path d="M 56 41 Q 59 44 62 41" stroke="#403344" strokeWidth="1.25" strokeLinecap="round" />

      {/* Explorer Cap / Beret */}
      <path
        d="M 40 30 Q 58 14 78 26 Q 70 34 40 30 Z"
        fill="#B7AAB8"
        stroke="#403344"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M 42 30 Q 58 27 76 28" stroke="#302437" strokeWidth="2.5" strokeLinecap="round" />
      {/* Explorer Feather / Quill */}
      <path
        d="M 67 25 Q 73 13 80 11 Q 77 18 73 24 Z"
        fill="#D7A6B8"
        stroke="#403344"
        strokeWidth="1"
      />

      {/* Front Arm Reaching Forward with Magnifying Glass */}
      <path d="M 50 60 Q 38 64 30 55" stroke="#211826" strokeWidth="5" strokeLinecap="round" />
      {/* Hand */}
      <circle cx="30" cy="55" r="3" fill="#F3EAF0" stroke="#403344" strokeWidth="1" />
      {/* Magnifying Glass Handle & Frame */}
      <line x1="30" y1="55" x2="22" y2="47" stroke="#D7A6B8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="17" cy="42" r="9" stroke="#D7A6B8" strokeWidth="2" fill="#B9A7D0" fillOpacity="0.25" />
      <circle cx="17" cy="42" r="7.5" stroke="#F3EAF0" strokeWidth="0.75" strokeOpacity="0.6" />
      {/* Crosshair in Glass */}
      <line x1="17" y1="36" x2="17" y2="48" stroke="#B7AAB8" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
      <line x1="11" y1="42" x2="23" y2="42" stroke="#B7AAB8" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
      {/* Glass glint */}
      <path d="M 13 38 Q 16 35 19 36" stroke="#F3EAF0" strokeWidth="1" strokeLinecap="round" />
    </g>
  );
};

/* =========================================================================
   POSE 2: OBSERVING (Leaning keenly towards content with lens & focus arc)
   ========================================================================= */
const PoseObserving: React.FC = () => {
  return (
    <g id="pose-observing">
      {/* Ground Shadow */}
      <ellipse cx="60" cy="122" rx="26" ry="4" fill="#211826" opacity="0.6" />

      {/* Legs (Standing firmly, leaning forward) */}
      <path d="M 53 87 L 50 114" stroke="#403344" strokeWidth="6" strokeLinecap="round" />
      <path d="M 67 87 L 66 114" stroke="#403344" strokeWidth="6" strokeLinecap="round" />
      {/* Left Boot */}
      <path d="M 52 110 L 40 111 Q 38 116 43 119 L 54 119 Z" fill="#302437" stroke="#403344" strokeWidth="1.5" />
      <line x1="45" y1="112" x2="47" y2="116" stroke="#D7A6B8" strokeWidth="1.2" />
      {/* Right Boot */}
      <path d="M 68 110 L 58 111 Q 56 116 61 119 L 71 119 Z" fill="#302437" stroke="#403344" strokeWidth="1.5" />
      <line x1="63" y1="112" x2="65" y2="116" stroke="#D7A6B8" strokeWidth="1.2" />

      {/* Rolled Blueprint Under Arm */}
      <rect x="71" y="66" width="22" height="6" rx="2" fill="#B9A7D0" stroke="#403344" strokeWidth="1.2" transform="rotate(25 71 66)" />
      <ellipse cx="73" cy="69" rx="1.5" ry="3" fill="#D7A6B8" stroke="#403344" strokeWidth="1" transform="rotate(25 73 69)" />

      {/* Explorer Coat (leaning slightly left) */}
      <path
        d="M 47 56 Q 40 73 42 88 Q 58 92 72 87 Q 73 72 69 56 Z"
        fill="#211826"
        stroke="#403344"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M 57 56 L 56 89" stroke="#403344" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="57" cy="64" r="1.5" fill="#F3EAF0" />
      <circle cx="56.5" cy="74" r="1.5" fill="#F3EAF0" />
      <circle cx="56" cy="83" r="1.5" fill="#F3EAF0" />

      {/* Bag on hip */}
      <line x1="47" y1="57" x2="68" y2="82" stroke="#B7AAB8" strokeWidth="1.75" />
      <rect x="65" y="74" width="11" height="12" rx="2" fill="#302437" stroke="#403344" strokeWidth="1.5" />
      <path d="M 65 77 Q 70.5 81 76 77" stroke="#D7A6B8" strokeWidth="1.2" fill="none" />

      {/* Draped Scarf */}
      <path
        d="M 46 48 Q 57 54 69 48 Q 71 56 58 58 Q 44 56 46 48 Z"
        fill="#D7A6B8"
        stroke="#403344"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M 52 57 Q 50 67 48 72 Q 54 74 56 68 Z" fill="#D7A6B8" stroke="#403344" strokeWidth="1.2" />

      {/* Head — tilted left with keen gaze */}
      <ellipse cx="56" cy="35" rx="16" ry="15" fill="#F3EAF0" stroke="#403344" strokeWidth="1.75" />
      <circle cx="47" cy="39" r="3" fill="#D7A6B8" opacity="0.45" />
      <circle cx="64" cy="39" r="3" fill="#D7A6B8" opacity="0.45" />
      {/* Eyes looking far to the left */}
      <circle cx="48" cy="34" r="2.2" fill="#211826" />
      <circle cx="47" cy="33.5" r="0.7" fill="#F3EAF0" />
      <circle cx="60" cy="34" r="2.2" fill="#211826" />
      <circle cx="59" cy="33.5" r="0.7" fill="#F3EAF0" />
      {/* Curious rounded mouth */}
      <circle cx="53" cy="41" r="1.5" fill="#403344" />

      {/* Cap / Beret */}
      <path
        d="M 37 29 Q 55 13 76 25 Q 68 33 37 29 Z"
        fill="#B7AAB8"
        stroke="#403344"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M 39 29 Q 55 26 74 27" stroke="#302437" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 64 24 Q 70 12 77 10 Q 74 17 70 23 Z" fill="#D7A6B8" stroke="#403344" strokeWidth="1" />

      {/* Left Hand at Visor / Eyebrow Shade */}
      <path d="M 48 57 Q 36 50 36 34" stroke="#211826" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 34 34 Q 44 31 52 32" stroke="#F3EAF0" strokeWidth="3" strokeLinecap="round" />
      <path d="M 34 34 Q 44 31 52 32" stroke="#403344" strokeWidth="1" fill="none" />

      {/* Observation Focal Arcs & Rays (Looking left toward content) */}
      <path d="M 30 33 Q 16 31 4 34" stroke="#D7A6B8" strokeWidth="1.25" strokeDasharray="3 3" strokeLinecap="round" />
      <path d="M 32 38 Q 20 40 8 45" stroke="#B9A7D0" strokeWidth="1" strokeDasharray="2 3" strokeLinecap="round" opacity="0.8" />
      <circle cx="4" cy="34" r="1.5" fill="#D7A6B8" />
      <circle cx="8" cy="45" r="1.2" fill="#B9A7D0" />
    </g>
  );
};

/* =========================================================================
   POSE 3: THINKING (Sitting thoughtfully on drafting block with spark)
   ========================================================================= */
const PoseThinking: React.FC = () => {
  return (
    <g id="pose-thinking">
      {/* Ground Shadow */}
      <ellipse cx="60" cy="122" rx="30" ry="4" fill="#211826" opacity="0.6" />

      {/* Drafting Milestone Cube / Rock Seat */}
      <polygon
        points="32,95 56,87 84,95 60,103"
        fill="#302437"
        stroke="#403344"
        strokeWidth="1.5"
      />
      <polygon
        points="32,95 60,103 60,121 32,113"
        fill="#211826"
        stroke="#403344"
        strokeWidth="1.5"
      />
      <polygon
        points="60,103 84,95 84,113 60,121"
        fill="#100D16"
        stroke="#403344"
        strokeWidth="1.5"
      />
      {/* Cube coordinate label */}
      <text x="36" y="107" fill="#B7AAB8" fontSize="6" fontFamily="IBM Plex Mono" opacity="0.6">[0,0]</text>

      {/* Seated Crossed Legs */}
      <path
        d="M 44 92 Q 38 104 48 108 Q 62 108 66 100"
        stroke="#403344"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Boots resting */}
      <ellipse cx="50" cy="108" rx="6" ry="3.5" fill="#302437" stroke="#403344" strokeWidth="1.5" />
      <line x1="48" y1="107" x2="52" y2="109" stroke="#D7A6B8" strokeWidth="1" />

      {/* Seated Body / Coat */}
      <path
        d="M 48 60 Q 42 75 46 88 Q 60 92 72 87 Q 74 74 70 60 Z"
        fill="#211826"
        stroke="#403344"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="58" cy="67" r="1.5" fill="#F3EAF0" />
      <circle cx="58" cy="76" r="1.5" fill="#F3EAF0" />

      {/* Scarf Around Neck */}
      <path
        d="M 47 52 Q 58 58 69 52 Q 71 60 58 62 Q 44 60 47 52 Z"
        fill="#D7A6B8"
        stroke="#403344"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* Scarf Tail Draped Down */}
      <path d="M 64 59 Q 67 72 65 79 Q 60 80 61 74 Z" fill="#D7A6B8" stroke="#403344" strokeWidth="1.2" />

      {/* Left Arm Resting on Knee, Supporting Chin */}
      <path d="M 48 62 Q 38 72 44 82 Q 48 76 54 50" stroke="#211826" strokeWidth="4.5" strokeLinecap="round" />
      {/* Hand at Chin */}
      <circle cx="53" cy="48" r="3.2" fill="#F3EAF0" stroke="#403344" strokeWidth="1" />

      {/* Head — tilted slightly upward in thought */}
      <ellipse cx="58" cy="38" rx="16" ry="15" fill="#F3EAF0" stroke="#403344" strokeWidth="1.75" />
      <circle cx="49" cy="42" r="3" fill="#D7A6B8" opacity="0.45" />
      <circle cx="66" cy="42" r="3" fill="#D7A6B8" opacity="0.45" />
      {/* Dot Eyes — looking upward in contemplation */}
      <circle cx="54" cy="34" r="2" fill="#211826" />
      <circle cx="54" cy="33.3" r="0.6" fill="#F3EAF0" />
      <circle cx="65" cy="34" r="2" fill="#211826" />
      <circle cx="65" cy="33.3" r="0.6" fill="#F3EAF0" />
      {/* Small pensive mouth */}
      <line x1="56" y1="43" x2="61" y2="43" stroke="#403344" strokeWidth="1.2" strokeLinecap="round" />

      {/* Cap / Beret */}
      <path
        d="M 40 32 Q 58 16 78 28 Q 70 36 40 32 Z"
        fill="#B7AAB8"
        stroke="#403344"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M 42 32 Q 58 29 76 30" stroke="#302437" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 67 27 Q 73 15 80 13 Q 77 20 73 26 Z" fill="#D7A6B8" stroke="#403344" strokeWidth="1" />

      {/* Floating Constellation of Thought (Question Mark & Stars) */}
      <g filter="url(#explorer-glow)">
        {/* Hand-Drawn Question Mark */}
        <path
          d="M 72 13 Q 75 7 81 9 Q 86 11 83 17 Q 80 20 79 24"
          stroke="#D7A6B8"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="78.5" cy="27.5" r="1" fill="#D7A6B8" />

        {/* Thought Sparkles in Soft Lavender */}
        <path d="M 90 12 L 91.5 15 L 94.5 16.5 L 91.5 18 L 90 21 L 88.5 18 L 85.5 16.5 L 88.5 15 Z" fill="#B9A7D0" />
        <circle cx="68" cy="8" r="1.2" fill="#B9A7D0" />
        <circle cx="95" cy="26" r="1" fill="#F3EAF0" />
      </g>
    </g>
  );
};

/* =========================================================================
   POSE 4: BUILDING (Assembling abstract glowing interface & wireframe)
   ========================================================================= */
const PoseBuilding: React.FC = () => {
  return (
    <g id="pose-building">
      {/* Ground Shadow */}
      <ellipse cx="60" cy="122" rx="28" ry="4" fill="#211826" opacity="0.6" />

      {/* Legs (Broad, stable maker stance) */}
      <path d="M 50 87 L 44 114" stroke="#403344" strokeWidth="6" strokeLinecap="round" />
      <path d="M 70 87 L 76 114" stroke="#403344" strokeWidth="6" strokeLinecap="round" />
      {/* Boots */}
      <path d="M 46 110 L 34 111 Q 32 116 37 119 L 48 119 Z" fill="#302437" stroke="#403344" strokeWidth="1.5" />
      <line x1="39" y1="112" x2="41" y2="116" stroke="#D7A6B8" strokeWidth="1.2" />
      <path d="M 78 110 L 66 111 Q 64 116 69 119 L 80 119 Z" fill="#302437" stroke="#403344" strokeWidth="1.5" />
      <line x1="71" y1="112" x2="73" y2="116" stroke="#D7A6B8" strokeWidth="1.2" />

      {/* Body / Coat with Rolled Sleeves */}
      <path
        d="M 48 56 Q 42 73 44 88 Q 60 92 74 87 Q 75 73 70 56 Z"
        fill="#211826"
        stroke="#403344"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="59" cy="64" r="1.5" fill="#F3EAF0" />
      <circle cx="59" cy="74" r="1.5" fill="#F3EAF0" />
      <circle cx="59" cy="83" r="1.5" fill="#F3EAF0" />

      {/* Scarf */}
      <path
        d="M 48 48 Q 59 54 70 48 Q 72 56 59 58 Q 46 56 48 48 Z"
        fill="#D7A6B8"
        stroke="#403344"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />

      {/* Head — tilted slightly forward focusing on work */}
      <ellipse cx="58" cy="36" rx="16" ry="15" fill="#F3EAF0" stroke="#403344" strokeWidth="1.75" />
      <circle cx="50" cy="40" r="3" fill="#D7A6B8" opacity="0.45" />
      <circle cx="67" cy="40" r="3" fill="#D7A6B8" opacity="0.45" />
      {/* Focused Eyes gazing at hands */}
      <circle cx="53" cy="37" r="2" fill="#211826" />
      <circle cx="53" cy="37.5" r="0.6" fill="#F3EAF0" />
      <circle cx="64" cy="37" r="2" fill="#211826" />
      <circle cx="64" cy="37.5" r="0.6" fill="#F3EAF0" />
      {/* Determined focused line */}
      <path d="M 56 42 Q 59 43 62 42" stroke="#403344" strokeWidth="1.2" strokeLinecap="round" />

      {/* Cap / Beret */}
      <path
        d="M 40 30 Q 58 14 78 26 Q 70 34 40 30 Z"
        fill="#B7AAB8"
        stroke="#403344"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M 42 30 Q 58 27 76 28" stroke="#302437" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 67 25 Q 73 13 80 11 Q 77 18 73 24 Z" fill="#D7A6B8" stroke="#403344" strokeWidth="1" />

      {/* Arms Assembling the Floating Interface */}
      {/* Left Arm holding glowing block */}
      <path d="M 48 58 Q 36 68 32 62" stroke="#211826" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="32" cy="62" r="3" fill="#F3EAF0" stroke="#403344" strokeWidth="1" />

      {/* Right Arm with Drafting Stylus */}
      <path d="M 70 58 Q 78 68 68 62" stroke="#211826" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="68" cy="62" r="3" fill="#F3EAF0" stroke="#403344" strokeWidth="1" />
      {/* Stylus */}
      <line x1="68" y1="62" x2="56" y2="57" stroke="#D7A6B8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="56" cy="57" r="1.5" fill="#F3EAF0" />

      {/* The Floating Abstract Construction Artifact (Glowing Wireframe Cube & Nodes) */}
      <g filter="url(#explorer-glow)">
        {/* Isometric Wireframe Cube in Soft Lavender & Dusty Rose */}
        <polygon points="40,54 50,49 60,54 50,59" stroke="#B9A7D0" strokeWidth="1.25" fill="#B9A7D0" fillOpacity="0.2" />
        <polygon points="40,54 50,59 50,71 40,66" stroke="#D7A6B8" strokeWidth="1.25" fill="#D7A6B8" fillOpacity="0.25" />
        <polygon points="50,59 60,54 60,66 50,71" stroke="#F3EAF0" strokeWidth="1.25" fill="#F3EAF0" fillOpacity="0.2" />

        {/* Construction Coordinate Nodes */}
        <circle cx="40" cy="54" r="1.5" fill="#F3EAF0" />
        <circle cx="60" cy="54" r="1.5" fill="#F3EAF0" />
        <circle cx="50" cy="49" r="1.5" fill="#D7A6B8" />
        <circle cx="50" cy="71" r="1.5" fill="#B9A7D0" />

        {/* Alignment sparks */}
        <line x1="34" y1="52" x2="30" y2="50" stroke="#B9A7D0" strokeWidth="1" strokeDasharray="1 1" />
        <line x1="62" y1="50" x2="66" y2="48" stroke="#D7A6B8" strokeWidth="1" strokeDasharray="1 1" />
      </g>
    </g>
  );
};

/* =========================================================================
   POSE 5: CELEBRATING (Arms raised with glowing compass nova & content smile)
   ========================================================================= */
const PoseCelebrating: React.FC = () => {
  return (
    <g id="pose-celebrating">
      {/* Ground Shadow */}
      <ellipse cx="60" cy="122" rx="26" ry="4" fill="#211826" opacity="0.6" />

      {/* Legs (Standing straight, heels together) */}
      <path d="M 54 87 L 54 114" stroke="#403344" strokeWidth="6" strokeLinecap="round" />
      <path d="M 66 87 L 66 114" stroke="#403344" strokeWidth="6" strokeLinecap="round" />
      {/* Left Boot */}
      <path d="M 56 110 L 44 111 Q 42 116 47 119 L 58 119 Z" fill="#302437" stroke="#403344" strokeWidth="1.5" />
      <line x1="49" y1="112" x2="51" y2="116" stroke="#D7A6B8" strokeWidth="1.2" />
      {/* Right Boot */}
      <path d="M 74 110 L 62 111 Q 60 116 65 119 L 76 119 Z" fill="#302437" stroke="#403344" strokeWidth="1.5" />
      <line x1="67" y1="112" x2="69" y2="116" stroke="#D7A6B8" strokeWidth="1.2" />

      {/* Flared Scarf Tails on both sides */}
      <path d="M 46 51 Q 32 50 28 57 Q 34 62 46 56 Z" fill="#D7A6B8" stroke="#403344" strokeWidth="1.5" />
      <path d="M 72 51 Q 86 50 90 57 Q 84 62 72 56 Z" fill="#D7A6B8" stroke="#403344" strokeWidth="1.5" />

      {/* Body / Coat */}
      <path
        d="M 48 56 Q 42 73 44 88 Q 60 92 74 88 Q 75 73 70 56 Z"
        fill="#211826"
        stroke="#403344"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="59" cy="64" r="1.5" fill="#F3EAF0" />
      <circle cx="59" cy="74" r="1.5" fill="#F3EAF0" />
      <circle cx="59" cy="83" r="1.5" fill="#F3EAF0" />

      {/* Scarf Around Neck */}
      <path
        d="M 48 48 Q 59 54 70 48 Q 72 56 59 58 Q 46 56 48 48 Z"
        fill="#D7A6B8"
        stroke="#403344"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />

      {/* Raised Arms in V of Joy */}
      <path d="M 48 57 Q 34 46 36 28" stroke="#211826" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="36" cy="28" r="3" fill="#F3EAF0" stroke="#403344" strokeWidth="1" />

      <path d="M 70 57 Q 84 46 82 28" stroke="#211826" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="82" cy="28" r="3" fill="#F3EAF0" stroke="#403344" strokeWidth="1" />

      {/* Head — tilted straight and proud */}
      <ellipse cx="59" cy="38" rx="16" ry="15" fill="#F3EAF0" stroke="#403344" strokeWidth="1.75" />
      <circle cx="50" cy="42" r="3.2" fill="#D7A6B8" opacity="0.5" />
      <circle cx="68" cy="42" r="3.2" fill="#D7A6B8" opacity="0.5" />
      {/* Happy Curved Crescent Eyes ^ ^ */}
      <path d="M 50 37 Q 53.5 33 57 37" stroke="#211826" strokeWidth="1.75" strokeLinecap="round" fill="none" />
      <path d="M 61 37 Q 64.5 33 68 37" stroke="#211826" strokeWidth="1.75" strokeLinecap="round" fill="none" />
      {/* Joyful open smile */}
      <path d="M 55 42 Q 59 47 63 42 Z" fill="#D7A6B8" stroke="#403344" strokeWidth="1" />

      {/* Cap / Beret */}
      <path
        d="M 41 32 Q 59 16 79 28 Q 71 36 41 32 Z"
        fill="#B7AAB8"
        stroke="#403344"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M 43 32 Q 59 29 77 30" stroke="#302437" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 68 27 Q 74 15 81 13 Q 78 20 74 26 Z" fill="#D7A6B8" stroke="#403344" strokeWidth="1" />

      {/* The Accomplishment Emblem: Glowing Compass Nova */}
      <g filter="url(#explorer-glow)">
        {/* Nova Ray Lines */}
        <line x1="59" y1="2" x2="59" y2="22" stroke="#D7A6B8" strokeWidth="1.25" />
        <line x1="49" y1="12" x2="69" y2="12" stroke="#D7A6B8" strokeWidth="1.25" />
        <line x1="52" y1="5" x2="66" y2="19" stroke="#B9A7D0" strokeWidth="0.75" />
        <line x1="52" y1="19" x2="66" y2="5" stroke="#B9A7D0" strokeWidth="0.75" />

        {/* Central Core Star */}
        <polygon
          points="59,6 61.5,10.5 66,12 61.5,13.5 59,18 56.5,13.5 52,12 56.5,10.5"
          fill="#F3EAF0"
          stroke="#D7A6B8"
          strokeWidth="1"
        />

        {/* Celebration Sparkles */}
        <circle cx="28" cy="18" r="1.5" fill="#B9A7D0" />
        <circle cx="90" cy="18" r="1.5" fill="#B9A7D0" />
        <circle cx="38" cy="10" r="1" fill="#D7A6B8" />
        <circle cx="80" cy="10" r="1" fill="#D7A6B8" />
      </g>
    </g>
  );
};
