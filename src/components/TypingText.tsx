'use client';

import { useState, useEffect } from 'react';

interface TypingTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypingText({
  phrases,
  typingSpeed = 55,
  deletingSpeed = 30,
  pauseDuration = 2800,
  className = '',
}: TypingTextProps) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    const getTypingDelay = () => typingSpeed + Math.floor(Math.random() * 25) - 12;

    switch (phase) {
      case 'typing':
        if (charIndex < currentPhrase.length) {
          timer = setTimeout(() => {
            setText(currentPhrase.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          }, getTypingDelay());
        } else {
          setPhase('pausing');
        }
        break;

      case 'pausing':
        timer = setTimeout(() => {
          setPhase('deleting');
        }, pauseDuration);
        break;

      case 'deleting':
        if (charIndex > 0) {
          timer = setTimeout(() => {
            setText(currentPhrase.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          }, deletingSpeed);
        } else {
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setPhase('typing');
        }
        break;
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [charIndex, phase, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <span 
        className="inline-block w-[2px] h-[0.9em] bg-orange-400 ml-0.5 align-middle animate-cursor"
        aria-hidden="true"
      />
    </span>
  );
}
