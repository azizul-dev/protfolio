'use client';

import { useState, useEffect } from 'react';

const Typewriter = ({ 
  words = ["Frontend Developer", "Problem Solver", "Next.js Learner"],
  className = "text-3xl md:text-5xl font-black text-primary",
  cursorClassName = "text-3xl md:text-5xl font-light text-primary animate-pulse ml-1"
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(200);
        
        if (currentText === fullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(100);
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

  return (
    <div className="inline-block">
      <span className={className}>
        {currentText}
      </span>
      <span className={cursorClassName}>|</span>
    </div>
  );
};

export default Typewriter;
