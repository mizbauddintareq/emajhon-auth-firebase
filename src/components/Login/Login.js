import React from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

import "./Login.css";
const Login = () => {
  const { siningUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";

  const handleGoogleLogin = () => {
    siningUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" name="" id="" placeholder="enter email" />
          <br />
          <input type="password" name="" id="" placeholder="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <p>
          New to ema-jhon? <Link to="/register">Create an account</Link>
        </p>
        <div>----------or----------</div>
        <button className="btn-regular" onClick={handleGoogleLogin}>
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
