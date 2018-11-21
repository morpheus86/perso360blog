import React, { Component } from 'react';

class CreateProject extends Component {
  state = {
    title:'',
    content:'',
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
  <div class='container'>
      <form onSubmit={this.handleSubmit} className='white'>
      <div className='input-field'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' onChange={this.handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor='content'>Project Content</label>
        <textarea className='form-control' rows={7} placeholder='type here' id='content' onChange={this.handleChange} />
      </div>
      <button type="submit">SignUp</button>
      </form>
  </div>
    );
  }
}

export default CreateProject;