import React from 'react';
import Notification from '../dashboard/Notification'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const CreateDetail = (props) => {
  
    // const {authorFirstName, authorLastName, content, title} = props.project
  // const authorFirstName = props.project.authorFirstName
  // const title = props.project.title
  const {project} = props;
  if(project){
    const {authorFirstName, authorLastName, title, content} = project
    return (
    <div className='container project details'>
      <div className="header">
        <h2> {title} </h2>
      </div>
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h5>{authorFirstName} {authorLastName}</h5>
            <p>{content}</p>
          </div>
        </div>
      </div>
      <div className="rightcolumn">
        <div className="card">
          <Notification />
        </div>
      </div>
    </div>
    )
  } else {
    return (<div>
      <p>Loading Project...</p>
    </div>)
  }
  
};

const mapState = (state, ownProps) => {
  // console.log(state)
  const id = ownProps.match.params.id //allows us to get the id from the route but on its own props which can be passed as a second parameter
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project

  }
}

export default compose(
  connect(mapState),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(CreateDetail);