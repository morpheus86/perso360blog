import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    firstName:'',
    lastName:'',
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
        <h1 className='grey-text text-darken-3'>Sign Up</h1>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" id="email" required onChange={this.handleChange}/>
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" id="password" required onChange={this.handleChange}/>
          <label htmlFor="firstName"><b>First Name</b></label>
          <input type="text" placeholder="Enter First Name" id="firstName" required onChange={this.handleChange}/>
          <label htmlFor="lastName"><b>Last Name</b></label>
          <input type="text" placeholder="Enter Last Name" id="lastName" required onChange={this.handleChange}/>
          <button type="submit">SignUp</button>
        </div>
      </form>
    );
  }
}

export default SignUp;