import React from 'react';
import Notification from '../dashboard/Notification'

const CreateDetail = (props) => {
  const id = props.match.params.id
  return (
    <div className='container project details'>
      <div className="header">
        <h2>Title {id}</h2>
      </div>
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h5>Title description, Dec 7, 2017</h5>
            <p>Some text..</p>
          </div>
        </div>
      </div>
      <div className="rightcolumn">
        <div className="card">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default CreateDetail;