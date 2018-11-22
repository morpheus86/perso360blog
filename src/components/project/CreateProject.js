import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectAction'
import {connect} from 'react-redux'

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
    this.props.createProject(this.state)
  }
  render() {
    return (
  <div className='container'>
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
const mapDispatch = (dispatch)=> ({
  createProject: (project) => dispatch(createProject(project))
})

export default connect(null, mapDispatch)(CreateProject);