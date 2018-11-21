import React, { Component } from 'react';
import Notification from './Notification'
import ProjectList from '../project/ProjectList'

class Dashboard extends Component {
  render() {
    return (
      <div className='dahboard container'>
        <div className='row'>
          <div classNane='leftcolumn'>
            <ProjectList />
          </div>
          <div classNane='rightcolumn'>
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;