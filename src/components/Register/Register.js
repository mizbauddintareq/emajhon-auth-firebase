import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Create an account</h2>
        <form>
          <input type="email" name="" id="" placeholder="enter email" />
          <br />
          <input type="password" name="" id="" placeholder="password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="re-enter password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <p>
          Already have an account? <Link to="/login">login</Link>
        </p>
        <div>----------or----------</div>
        <button className="btn-regular">Sign in with google</button>
      </div>
    </div>
  );
};

export default Register;
