const pool = require('./db'); // Import your PostgreSQL connection pool

pool.query('SELECT * FROM agents', (error, results) => {
    if (error) {
      console.error('Error querying the database:', error);
      return;
    }
  
    // Data retrieved from the 'agents' table
    const agentsData = results.rows;
  
    if (agentsData.length === 0) {
      console.log('No data found in the "agents" table.');
    } else {
      // Print the retrieved data
      console.log('Agents Data:');
      agentsData.forEach((agent) => {
        console.log(`Agent ID: ${agent.agent_id}`);
        console.log(`Paragraph 1: ${agent.paragraph1}`);
        console.log(`Paragraph 2: ${agent.paragraph2}`);
        console.log(`Paragraph 3: ${agent.paragraph3}`);
        console.log(`Paragraph 4: ${agent.paragraph4}`);
        console.log('---');
      });
    }
  });
  