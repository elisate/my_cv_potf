import React from 'react'
import './Signup.scss'
function Sign_up() {
  return (
    <section className="login-container-s">
      <div className="log-form-image-s">
        <div className="form-login-s">
          <div className="text-head-s">Sign up Form</div>

          <form className="form-container-s">
            <div className='user-n'>
              <label className="form-container-label-s">Username</label>
              <br />
              <input type="text" placeholder="mucyo Elive" />
            </div>
            <div className="email-s">
              <label className="form-container-label-s">Email</label>
              <br />
              <input type="email" placeholder="info@gmail.com" />
            </div>
            <div className='phone-s'>
              <label className="form-container-label-s">Phone number</label>
              <br />
              <input type="number" placeholder="+250-------------" />
            </div>
            <div className="password-s">
              <label className="form-container-label-s">password</label>
              <br />
              <input type="password" placeholder="---------" />
            </div>
            <div className="submit-login-s">
              <button type="submit" className="button-login-s">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="image-s">
          <img src="login_svg.png" className="image-sv" />
        </div>
      </div>
    </section>
  );
}

export default Sign_up