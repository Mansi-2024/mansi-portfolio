import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { LittleExplorerArt } from './LittleExplorerArt';
import { ExplorerPose, SECTION_POSES } from './types';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Sparkles, X, MessageSquare, ChevronUp, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface LittleExplorerCompanionProps {
  className?: string;
}

export const LittleExplorerCompanion: React.FC<LittleExplorerCompanionProps> = ({
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  const [currentPose, setCurrentPose] = useState<ExplorerPose>('exploring');
  const [currentMessage, setCurrentMessage] = useState<string>('Curiosity brought me here.');
  const [currentLabel, setCurrentLabel] = useState<string>('Origin // Exploring');
  const [isBubbleVisible, setIsBubbleVisible] = useState<boolean>(true);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const prefersReducedMotion = useReducedMotion();

  // Watch for active case study modal to avoid overlapping
  useEffect(() => {
    const checkModal = () => {
      setIsModalActive(!!document.querySelector('[role="dialog"]'));
    };

    checkModal();
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // Helper to trigger speech bubble with automatic timed dismissal (4.5s)
  const showBubbleWithAutoDismiss = useCallback(
    (message: string, durationMs: number = 4800) => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      setCurrentMessage(message);
      setIsBubbleVisible(true);

      timerRef.current = window.setTimeout(() => {
        setIsBubbleVisible(false);
      }, durationMs);
    },
    []
  );

  // Initial speech greeting on page mount (only if user starts at the top)
  useEffect(() => {
    const greetingTimer = window.setTimeout(() => {
      if (window.scrollY < 200) {
        showBubbleWithAutoDismiss('Curiosity brought me here.', 4500);
      }
    }, 500);

    return () => {
      window.clearTimeout(greetingTimer);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [showBubbleWithAutoDismiss]);

  // Handle section pose transition with subtle GSAP feedback
  const handleSectionTransition = useCallback(
    (pose: ExplorerPose, message: string, label: string) => {
      setCurrentPose(pose);
      setCurrentLabel(label);
      showBubbleWithAutoDismiss(message);

      if (!prefersReducedMotion && characterRef.current) {
        gsap.fromTo(
          characterRef.current,
          { scale: 0.92, y: 4 },
          { scale: 1, y: 0, duration: 0.45, ease: 'back.out(2)' }
        );
      }
    },
    [prefersReducedMotion, showBubbleWithAutoDismiss]
  );

  // Set up ScrollTrigger listeners for each portfolio section
  useGSAP(
    () => {
      // 1. Hero / Origin Return
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: '600px top',
        onEnterBack: () => {
          handleSectionTransition(
            'exploring',
            'Curiosity brought me here.',
            'Origin // Exploring'
          );
        },
      });

      // 2. Section Triggers
      const sectionConfigs: { id: string; pose: ExplorerPose; message: string; label: string }[] = [
        {
          id: 'work',
          pose: 'observing',
          message: "Let's see what this became.",
          label: 'Archive // Observing',
        },
        {
          id: 'about',
          pose: 'thinking',
          message: 'Every good build starts with a question.',
          label: 'Philosophy // Thinking',
        },
        {
          id: 'capabilities',
          pose: 'building',
          message: 'Tools change. Curiosity stays.',
          label: 'Workshop // Building',
        },
        {
          id: 'contact',
          pose: 'celebrating',
          message: 'Have something interesting in mind?',
          label: 'Dialogue // Celebrating',
        },
      ];

      sectionConfigs.forEach(({ id, pose, message, label }) => {
        const el = document.getElementById(id);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: id === 'contact' ? 'top 85%' : 'top 75%',
          end: id === 'contact' ? 'bottom bottom' : 'bottom 25%',
          onEnter: () => handleSectionTransition(pose, message, label),
          onEnterBack: () => handleSectionTransition(pose, message, label),
        });
      });
    },
    { scope: containerRef, dependencies: [handleSectionTransition] }
  );

  // Manual character click handler: toggles speech bubble or cycles pose for playful discovery
  const handleCharacterClick = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setIsBubbleVisible(true);
      return;
    }

    if (!isBubbleVisible) {
      showBubbleWithAutoDismiss(currentMessage, 4500);
    } else {
      // Cycle through to next pose on explicit click for interactive exploration
      const currentIndex = SECTION_POSES.findIndex((p) => p.pose === currentPose);
      const nextIndex = (currentIndex + 1) % SECTION_POSES.length;
      const nextConfig = SECTION_POSES[nextIndex];
      handleSectionTransition(nextConfig.pose, nextConfig.message, nextConfig.label);
    }
  };

  return (
    <aside
      ref={containerRef}
      aria-label="Little Explorer interactive portfolio companion"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 select-none transition-all duration-300 ${
        isModalActive ? 'opacity-0 pointer-events-none invisible translate-y-4' : 'opacity-100'
      } ${className}`}
    >
      {/* Minimized Pill State */}
      {isMinimized ? (
        <button
          type="button"
          onClick={() => {
            setIsMinimized(false);
            setIsBubbleVisible(true);
          }}
          className="group flex items-center gap-2 px-3 py-2 rounded-full border border-border-plum bg-aubergine/90 text-warm-ivory shadow-xl hover:border-dusty-rose transition-all duration-200"
          aria-label="Expand Little Explorer companion"
        >
          <span className="w-2 h-2 rounded-full bg-dusty-rose animate-pulse" />
          <span className="font-mono text-[10px] tracking-wider uppercase text-ash-mauve group-hover:text-warm-ivory">
            Little Explorer
          </span>
          <ChevronUp className="w-3.5 h-3.5 text-dusty-rose" />
        </button>
      ) : (
        /* Full Companion Dock */
        <div className="relative flex flex-col items-end">
          {/* Editorial Speech Bubble */}
          <div
            ref={bubbleRef}
            role="status"
            aria-live="polite"
            className={`absolute bottom-full right-0 mb-3 w-64 max-w-[calc(100vw-2.5rem)] transition-all duration-300 transform ${
              isBubbleVisible
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="relative p-3 rounded-lg border border-dusty-rose/50 bg-aubergine/95 backdrop-blur-md shadow-2xl shadow-midnight-plum/90 text-left">
              {/* Top Bubble Header Bar */}
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-border-plum/50 font-mono text-[9px] text-ash-mauve">
                <span className="flex items-center gap-1 text-dusty-rose font-medium">
                  <Sparkles className="w-2.5 h-2.5 text-dusty-rose" aria-hidden="true" />
                  <span>EXPLORER DIALOGUE</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsBubbleVisible(false)}
                  className="p-0.5 rounded hover:bg-raised-plum text-ash-mauve hover:text-warm-ivory transition-colors"
                  aria-label="Dismiss speech bubble"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>

              {/* Speech Message */}
              <p className="font-sans text-xs text-warm-ivory leading-snug">
                &ldquo;{currentMessage}&rdquo;
              </p>

              {/* Speech Bubble Arrow */}
              <div
                className="absolute -bottom-1.5 right-8 w-3 h-3 rotate-45 border-r border-b border-dusty-rose/50 bg-aubergine/95"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Interactive Character Stage */}
          <div className="flex flex-col items-end gap-1">
            {/* Companion Meta Pill / Pose Badge */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-border-plum/70 bg-midnight-plum/90 font-mono text-[9px] text-ash-mauve shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
              <span className="tracking-wider uppercase text-[8.5px] text-ash-mauve">
                {currentLabel}
              </span>
              <button
                type="button"
                onClick={() => setIsMinimized(true)}
                className="ml-1 p-0.5 rounded hover:text-dusty-rose transition-colors"
                aria-label="Minimize companion"
                title="Minimize companion"
              >
                <ChevronDown className="w-2.5 h-2.5" />
              </button>
            </div>

            {/* Clickable Character Figure */}
            <button
              type="button"
              onClick={handleCharacterClick}
              className="relative p-1 rounded-xl bg-aubergine/40 hover:bg-aubergine/80 border border-border-plum/40 hover:border-dusty-rose/60 transition-all duration-200 cursor-pointer focus-visible:outline-none group shadow-xl"
              title="Click Little Explorer to speak or cycle pose"
              aria-label={`Little Explorer companion (${currentPose} pose). Click to interact.`}
            >
              <div ref={characterRef} className="transition-transform duration-200 group-hover:scale-105">
                <LittleExplorerArt pose={currentPose} size={78} />
              </div>

              {/* Dialogue indicator dot */}
              <div
                className={`absolute -top-1 -right-1 p-1 rounded-full bg-aubergine border border-dusty-rose text-dusty-rose transition-opacity ${
                  isBubbleVisible ? 'opacity-0' : 'opacity-100'
                }`}
                title="Click for dialogue"
              >
                <MessageSquare className="w-2.5 h-2.5" />
              </div>
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default LittleExplorerCompanion;
