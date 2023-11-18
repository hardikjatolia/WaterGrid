import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const handleDeleteClick = async (agentId) => {
    // Prompt the user before deleting the agent
    const confirmDelete = window.confirm('Are you sure you want to delete this agent?');

    if (confirmDelete) {
      // Perform the deletion if the user confirms
      try {
        const response = await fetch(`http://localhost:5000/agents/${agentId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Update the local state to reflect the deletion
          setAgents((prevAgents) => prevAgents.filter((agent) => agent.agent_id !== agentId));
          toast.success('Agent deleted successfully!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            style: { fontSize: '16px' }, // Adjust the font size here
          });
          navigate(`/`);
        } else {
          console.error('Failed to delete agent');
        }
      } catch (error) {
        console.error('Error deleting agent:', error);
      }
    }
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
          <button onClick={() => handleDeleteClick(agent.agent_id)}>Delete</button>
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
      <ToastContainer />
    </div>
  );
};

export default Main;
