import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e)=> {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e)=> {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <form action="action_page.php" onSubmit={this.handleSubmit}>
        <div className="container">
          <label htmlFor="uname"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" id="email" required onChange={this.handleChange}/>
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" id="password" required onChange={this.handleChange}/>
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
          </label>
        </div>
        <div className="container" style={{backgroundColor: '#f1f1f1'}}>
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    );
  }
}

export default SignIn;