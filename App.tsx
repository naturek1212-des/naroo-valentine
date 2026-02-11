import React, { useState } from 'react';
import ProposalCard from './components/ProposalCard';
import SuccessView from './components/SuccessView';

// =================================================================
// [내 이미지 적용하기]
// 1. 가지고 계신 사진 파일의 이름을 아래와 같이 변경해주세요.
//    - 장미꽃 든 사진 이름: naru_flower.jpg
//    - 뽀뽀하는 사진 이름: naru_kiss.jpg
// 2. 변경한 사진 파일들을 이 프로젝트 폴더(public 폴더)에 넣어주세요.
// =================================================================

// 질문 화면 이미지 (로컬 파일)
const PROPOSAL_IMG = "./naru_flower.jpg"; 

// 성공 화면 이미지 (로컬 파일)
const SUCCESS_IMG = "./naru_kiss.jpg";   

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