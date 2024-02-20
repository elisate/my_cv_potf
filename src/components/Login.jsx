import React from "react";
import "./Login.scss";


function Login() {
  return (
    <section className="login-container">
      <div className="log-form-image">
        <div className="form-login">
          <div className="text-head">Login Form</div>
          <div className="text-head1">
            Does n't have an account{" "}
            <span className="text-signup">
              <a href="/sign">sign up</a>
            </span>
          </div>
          <form className="form-container">
            <div className="username">
              <label className="form-container-label">username</label>
              <br />
              <input type="text" placeholder="info@gmail.com" />
            </div>
            <div className="password">
              <label className="form-container-label">password</label>
              <br />
              <input type="password" placeholder="12345678" />
            </div>
            <div className="submit-login">
              <button type="submit" className="button-login">Login</button>
            </div>
          </form>
        </div>
        <div className="image">
          <img src="login_svg.png" className="image-sv" />
        </div>
      </div>
    </section>
  );
}

export default Login;
