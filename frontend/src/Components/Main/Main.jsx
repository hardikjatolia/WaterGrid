import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.scss';

const Main = () => {
  const navigate = useNavigate();
  const [agents, setAgents] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Fetch agent data from your server when the component mounts
    fetch('http://localhost:5000/agents') // Update this URL to match your API endpoint
      .then((response) => response.json())
      .then((data) => setAgents(data));
  }, []);

  const handleCardClick = (agentId) => {
    navigate(`/agent/${agentId}`);
  };

  return (
    <div className="card-container">
      {agents.map((agent) => (
        <div
          className={`card ${hoveredCard === agent.agent_id ? 'active' : ''}`}
          key={agent.agent_id}
          onClick={() => handleCardClick(agent.agent_id)}
          onMouseEnter={() => setHoveredCard(agent.agent_id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2>Agent {agent.agent_id}</h2>
          <p>Click to view information about the agent</p>
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
