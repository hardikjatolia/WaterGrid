import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AgentDetail.scss'; // Import your stylesheet

const AgentDetail = () => {
  const { agentId } = useParams(); // Get the agentId from the URL

  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API call to fetch the agent's information based on agentId
    // Replace 'your-api-endpoint' with the actual API endpoint
    fetch(`http://localhost:5000/agents/${agentId}`)
      .then((response) => response.json())
      .then((data) => {
        setAgent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching agent data:', error);
        setLoading(false);
      });
  }, [agentId]);

  return (
    <div className="agent-detail-container">
      {loading ? (
        <p>Loading agent data...</p>
      ) : agent ? (
        <div className="agent-info-card">
          <h2>Agent {agent.agent_id}</h2>
          <p>Information about the agent</p>
          <p>Paragraph 1: {agent.paragraph1}</p>
          <p>Paragraph 2: {agent.paragraph2}</p>
          <p>Paragraph 3: {agent.paragraph3}</p>
          <p>Paragraph 4: {agent.paragraph4}</p>
        </div>
      ) : (
        <p>Agent not found</p>
      )}
    </div>
  );
};

export default AgentDetail;
