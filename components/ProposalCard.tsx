import React, { useState, useEffect } from 'react';
import { ButtonPosition } from '../types';

interface ProposalCardProps {
  onYes: () => void;
  incrementNo: () => void;
  noCount: number;
  imageUrl: string | null;
  isLoading: boolean;
}

const phrases = [
  "No",
  "진짜?",
  "다시 생각해봐",
  "제발...",
  "꽃도 준비했는데",
  "너무해 ㅠㅠ",
  "김나루!!!",
  "안돼 못가",
  "심장 아파...",
  "거절은 거절한다"
];

const ProposalCard: React.FC<ProposalCardProps> = ({ 
  onYes, 
  incrementNo, 
  noCount, 
  imageUrl,
  isLoading 
}) => {
  const [noButtonPos, setNoButtonPos] = useState<ButtonPosition>({ top: 'auto', left: 'auto', position: 'static' });
  const [yesTextSize, setYesTextSize] = useState(16);

  useEffect(() => {
    setYesTextSize(16 + noCount * 20);
  }, [noCount]);

  const handleNoHover = () => {
    incrementNo();
    
    // Calculate random position
    // We use fixed to ensure it can go anywhere in the viewport
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);

    setNoButtonPos({
      position: 'fixed',
      left: randomX,
      top: randomY,
    });
  };

  const getNoText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 overflow-hidden relative">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl flex flex-col items-center max-w-lg w-full z-10 transition-all duration-300">
        
        {/* Image Section */}
        <div className="mb-8 w-64 h-64 md:w-72 md:h-72 relative rounded-2xl overflow-hidden shadow-md bg-gray-50 flex items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center text-pink-400">
              <svg className="animate-spin h-10 w-10 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-sm font-medium">고양이 데려오는 중...</p>
            </div>
          ) : imageUrl ? (
            <img src={imageUrl} alt="Shy Cat" className="w-full h-full object-cover animate-float" />
          ) : (
            <div className="text-6xl">😿</div> // Fallback if API fails
          )}
        </div>

        {/* Question */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center handwritten">
          나루야 나랑 결혼할래?
        </h1>

        {/* Buttons Container */}
        <div className="flex flex-wrap gap-4 justify-center items-center w-full relative">
          
          {/* YES Button */}
          <button
            onClick={onYes}
            className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-150 shadow-lg z-20"
            style={{
              fontSize: `${yesTextSize}px`,
              padding: `${yesTextSize * 0.5 + 10}px ${yesTextSize + 20}px`
            }}
          >
            Yes
          </button>

          {/* NO Button */}
          <button
            onMouseEnter={handleNoHover}
            onClick={handleNoHover} // Mobile fallback
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-200"
            style={noButtonPos.position === 'fixed' ? {
              position: 'fixed',
              top: noButtonPos.top,
              left: noButtonPos.left,
              zIndex: 50,
              transition: 'top 0.2s ease, left 0.2s ease' // Smooth movement
            } : {}}
          >
            {getNoText()}
          </button>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute bottom-4 text-pink-300 text-sm">
        "No" seems a bit shy 😈
      </div>
    </div>
  );
};

export default ProposalCard;