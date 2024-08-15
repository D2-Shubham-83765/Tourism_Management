import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [storedQuestion, setStoredQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      setLoading(true);
      axios.get(`http://localhost:8080/user/security-question?email=${email}`)
        .then(response => {
          setStoredQuestion(response.data.question);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching security question:', error);
          setStoredQuestion('');
          setLoading(false);
        });
    } else {
      setStoredQuestion('');
    }
  }, [email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    const data = {
      email,
      securityAnswer,
      newPassword
    };

    axios.post('http://localhost:8080/user/forget-password', data)
      .then(response => {
        if (response.data.success) {
          alert('Password changed successfully.');
          navigate('/'); // Redirect to homepage after successful password change
        } else {
          setError('Invalid email, security question, or answer.');
        }
      })
      .catch(error => {
        setError('Error processing request.');
        console.error('Error changing password:', error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="text-center font-weight-bold">Forgot Password</h2>
             
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <br />
                {loading && <p className="text-center">Loading security question...</p>}
                {storedQuestion && (
                  <div className="form-group">
                    <br />
                    <label htmlFor="securityQuestion">Security Question</label>
                    <input
                      type="text"
                      className="form-control"
                      id="securityQuestion"
                      value={storedQuestion}
                      readOnly
                    />
                  </div>
                )}
                {!storedQuestion && !loading && email && (
                  <p className="text-danger text-center">No security question found for this email.</p>
                )}
                <div className="form-group">
                  <label htmlFor="securityAnswer">Answer</label>
                  <input
                    type="text"
                    className="form-control"
                    id="securityAnswer"
                    placeholder="Enter your answer"
                    value={securityAnswer}
                    onChange={(e) => setSecurityAnswer(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-danger text-center">{error}</p>}
                <div className="d-flex justify-content-between mt-4">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          border-radius: 15px;
        }

        .card-body {
          padding: 2rem;
        }

        h2 {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .btn-primary {
          background-color: #007bff;
          border: none;
        }

        .btn-primary:hover {
          background-color: #0056b3;
        }

        .btn-secondary {
          background-color: #6c757d;
          border: none;
        }

        .btn-secondary:hover {
          background-color: #5a6268;
        }

        .text-danger {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
