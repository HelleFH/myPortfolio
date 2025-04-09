import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import Images from '../../assets/images';

const IndexArticle = () => {
      const navigate = useNavigate(); // Hook to handle navigation
    
  return (
    <div className="article">
      <h1 className="article-title">Green Data Centers: Market Growth and Key Drivers

</h1>
      <img src={Images.ServicesArticleImage2} alt="Cloud Computing" className="article-image" />
      <div className='article-text'>
<p>
      The global Green Data Centers market, valued at USD 50.21 billion in 2022, is projected to reach USD 187.71 billion by 2030, 
      growing at a robust CAGR of 19.52%. This growth is fueled by increasing environmental concerns, advancements in energy efficiency, 
      and rising government policies encouraging sustainability.
      </p>
      <p>Green data centers focus on using renewable energy sources and environmentally-friendly 
      practices, 
      making them a key solution for businesses seeking to reduce their carbon footprint.
      </p> 
      </div>
      <button className="learn-more-btn" onClick={() => navigate('/resources')}>
       Find out More
        </button>
    </div>
  );
};

export default IndexArticle;
