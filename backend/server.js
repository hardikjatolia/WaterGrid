const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// ROUTES

// Create an agent
app.post("/agents", async (req, res) => {
  try {
    const { paragraph1, paragraph2, paragraph3, paragraph4 } = req.body;
    const newAgent = await pool.query(
      "INSERT INTO agents (paragraph1, paragraph2, paragraph3, paragraph4) VALUES($1, $2, $3, $4) RETURNING *",
      [paragraph1, paragraph2, paragraph3, paragraph4]
    );
    res.json(newAgent.rows[0]);
    console.log(req.body);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Get all agents
app.get("/agents", async (req, res) => {
  try {
    const allAgents = await pool.query("SELECT * FROM agents");
    res.json(allAgents.rows);
    // console.log(allAgents.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Get a specific agent by ID
app.get("/agents/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const agent = await pool.query("SELECT * FROM agents WHERE agent_id = $1", [id]);
    res.json(agent.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Update an agent by ID
app.put("/agents/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { paragraph1, paragraph2, paragraph3, paragraph4 } = req.body;
    const updatedAgent = await pool.query(
      "UPDATE agents SET paragraph1 = $1, paragraph2 = $2, paragraph3 = $3, paragraph4 = $4 WHERE agent_id = $5 RETURNING *",
      [paragraph1, paragraph2, paragraph3, paragraph4, id]
    );
    res.json(updatedAgent.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Delete an agent by ID
app.delete("/agents/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM agents WHERE agent_id = $1", [id]);
    res.json("Agent deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});


app.listen(5000, () => {
    console.log("server has started on port 5000");
});
