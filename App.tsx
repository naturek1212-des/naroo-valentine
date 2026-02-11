import React, { useState } from 'react';
import ProposalCard from './components/ProposalCard';
import SuccessView from './components/SuccessView';

// Placeholder URLs for the "Attached Images".
// Since I cannot access your local files directly, I have set up these constants.
// Please replace these URLs with the actual paths or URLs of the images you want to use.
// For example: import PROPOSAL_IMG from './assets/proposal.jpg';
const PROPOSAL_IMG = "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=800&q=80"; // Placeholder for Cat with flower/box
const SUCCESS_IMG = "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?w=800&q=80";   // Placeholder for Cats kissing

const App: React.FC = () => {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const handleYes = () => {
    setYesPressed(true);
  };

  const handleIncrementNo = () => {
    setNoCount((prev) => prev + 1);
  };

  return (
    <div className="antialiased text-gray-900">
      {yesPressed ? (
        <SuccessView imageUrl={SUCCESS_IMG} />
      ) : (
        <ProposalCard 
          onYes={handleYes} 
          incrementNo={handleIncrementNo} 
          noCount={noCount} 
          imageUrl={PROPOSAL_IMG}
        />
      )}
    </div>
  );
};

export default App;