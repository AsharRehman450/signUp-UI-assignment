import React from 'react'
import "../Components/Signup.css"

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="form-container">
          <h2 className="heading">Sign Up</h2>
          <p>Already have an account? <a href="#">Login here</a></p>
          <br />
          <form>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name here" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email id</label>
              <input type="email" id="email" placeholder="Enter your email id here" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password here" />
            </div>
            <div className='para'>
            <p><input type="checkbox" />By signing up you agree to reacive updates and offers </p>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="image-container">
          <img src="/src/assets/signUp.img" alt="Signup" /> 
        </div>
      </div>
    </div>
  )
}

export default Signup
