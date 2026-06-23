import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    document.title = 'Login | Workout Buddy';
  }, []);

  if (user) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter an email and password.');
      return;
    }

    const sessionUser = {
      email: email.trim(),
    };

    dispatch({ type: 'LOGIN', payload: sessionUser });
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-copy">
          <p className="eyebrow">Workout Buddy</p>
          <h1>Sign in to your training dashboard</h1>
          <p>
            Track workouts, update progress, and keep your routine organized in one place.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
          </label>

          {error && <div className="error">{error}</div>}

          <button type="submit">Log in</button>

          <p className="login-note">
            This app uses a local demo login. Any non-empty email and password will sign you in.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;