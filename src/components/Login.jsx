import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { googleSignIn } from '../redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleGoogleLogin = () => {
    dispatch(googleSignIn());
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin} disabled={loading}>
        {loading ? 'Signing in...' : 'Sign in with Google'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
