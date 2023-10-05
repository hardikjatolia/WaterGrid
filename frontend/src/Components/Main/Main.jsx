import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.scss'; // Import your SCSS file for styling

const Main = () => {
    const navigate = useNavigate(); // Use useNavigate hook to get the navigation function

    const handleCardClick = () => {
      navigate('/forms'); // Navigate to the Forms page
    };
  const [activeCard] = useState(null);

  const cardData = [
    { id: 1, title: 'Agent 1', description: 'This is the first Agent.' },
    { id: 2, title: 'Agent 2', description: 'This is the second Agent.' },
    { id: 3, title: 'Agent 3', description: 'This is the third card.' },
    // Add more card data as needed
  ];

  return (
    <div className="card-container">
      {cardData.map(card => (
        <div
          className={`card ${card.id === activeCard ? 'active' : ''}`}
          key={card.id}
          onClick={() => handleCardClick(card.id)}
        >
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;
