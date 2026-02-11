import React, { useState, useEffect } from 'react';
import ProposalCard from './components/ProposalCard';
import SuccessView from './components/SuccessView';
import { generateCatImage } from './services/geminiService';

const App: React.FC = () => {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      // Start generating image immediately
      const url = await generateCatImage();
      setImageUrl(url);
      setIsLoading(false);
    };

    fetchImage();
  }, []);

  const handleYes = () => {
    setYesPressed(true);
  };

  const handleIncrementNo = () => {
    setNoCount((prev) => prev + 1);
  };

  return (
    <div className="antialiased text-gray-900">
      {yesPressed ? (
        <SuccessView imageUrl={imageUrl} />
      ) : (
        <ProposalCard 
          onYes={handleYes} 
          incrementNo={handleIncrementNo} 
          noCount={noCount} 
          imageUrl={imageUrl}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default App;