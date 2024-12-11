import React, { useState } from 'react';

function EmailValidationForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);

    if (!validateEmail(e.target.value)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      alert('Email is valid: ' + email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="email-text"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default EmailValidationForm;
