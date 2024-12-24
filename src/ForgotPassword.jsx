import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${process.env.API_URL}/request-password-reset`, {
        email,
      });
      setMessageSent(true); // Show success message on successful submission
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          'Something went wrong. Please try again.',
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  if (messageSent) {
    return (
      <div className='success-message-container'>
        <div className='success-message-card'>
          <h1>Password Reset Sent</h1>
          <p>
            A password reset email has been sent to <strong>{email}</strong>.
            Please check your inbox and follow the instructions to reset your
            password.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='forgot-password-container'>
      <form onSubmit={handleSubmit} className='forgot-password-form'>
        <h2>Forgot Password</h2>
        <div className='form-group'>
          <label htmlFor='email'>Enter your email</label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='submit-button' disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
