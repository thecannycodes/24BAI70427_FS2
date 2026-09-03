import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">Message: </label>
          <input id="message" type="text" placeholder="Enter message" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
