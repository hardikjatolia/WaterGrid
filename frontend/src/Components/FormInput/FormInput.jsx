// FormInput.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './FormInput.scss'; // Import your CSS file

const FormInput = () => {
  const [formData, setFormData] = useState({
    paragraph1: '',
    paragraph2: '',
    paragraph3: '',
    paragraph4: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Node.js server to add the data to the database
      const response = await axios.post('http://localhost:5000/agents', formData);
      console.log('Agent added:', response.data);

      // Clear the form after successful submission
      setFormData({
        paragraph1: '',
        paragraph2: '',
        paragraph3: '',
        paragraph4: '',
      });
    } catch (error) {
      console.error('Error adding agent:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Create New Agent</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Paragraph 1:</label>
          <textarea
            name="paragraph1"
            value={formData.paragraph1}
            onChange={handleChange}
            placeholder="Enter text for paragraph 1"
          />
        </div>
        <div className="form-group">
          <label>Paragraph 2:</label>
          <textarea
            name="paragraph2"
            value={formData.paragraph2}
            onChange={handleChange}
            placeholder="Enter text for paragraph 2"
          />
        </div>
        <div className="form-group">
          <label>Paragraph 3:</label>
          <textarea
            name="paragraph3"
            value={formData.paragraph3}
            onChange={handleChange}
            placeholder="Enter text for paragraph 3"
          />
        </div>
        <div className="form-group">
          <label>Paragraph 4:</label>
          <textarea
            name="paragraph4"
            value={formData.paragraph4}
            onChange={handleChange}
            placeholder="Enter text for paragraph 4"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit here
        </button>
      </form>
    </div>
  );
};

export default FormInput;
