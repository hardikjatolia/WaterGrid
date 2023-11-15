import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.scss';

const Main = () => {
  const navigate = useNavigate();
  const [agents, setAgents] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Fetch agent data from your server when the component mounts
    fetch('/api/agents') // Update this URL to match your API endpoint
      .then((response) => response.json())
      .then((data) => setAgents(data));
  }, []);

  const handleCardClick = (agentId) => {
    navigate(`/forms/${agentId}`);
  };

  return (
    <div className="card-container">
      {agents.map((agent) => (
        <div
          className={`card ${hoveredCard === agent.id ? 'active' : ''}`}
          key={agent.id}
          onClick={() => handleCardClick(agent.id)}
          onMouseEnter={() => setHoveredCard(agent.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2>{agent.name}</h2>
          <p>{agent.description}</p>
        </div>
      ))}
      <div
        className={`card add-agent-card ${hoveredCard === 'add' ? 'active' : ''}`}
        onClick={() => navigate('/FormInput')}
        onMouseEnter={() => setHoveredCard('add')}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <h2>Add Agent</h2>
        <p>Click to add a new agent</p>
      </div>
    </div>
  );
};

export default Main;
