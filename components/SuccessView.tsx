import React from 'react';

interface SuccessViewProps {
  imageUrl: string | null;
}

const SuccessView: React.FC<SuccessViewProps> = ({ imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 text-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        {/* Simple CSS confetti/hearts */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-4xl animate-bounce opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8 font-cheonlima animate-float z-10">
        Yay! 사랑해! ❤️
      </h1>
      
      <div className="relative z-10 p-4 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl">
        {imageUrl ? (
            <img 
            src={imageUrl} 
            alt="Happy Cats" 
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
            />
        ) : (
             <div className="w-64 h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">😻</span>
             </div>
        )}
      </div>
      
      <p className="mt-8 text-xl text-pink-800 z-10 max-w-md font-bold">
        천년만년 사랑해~
      </p>
    </div>
  );
};

export default SuccessView;