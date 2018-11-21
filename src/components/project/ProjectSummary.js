import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)' }} />
        <ul className="details">
          <li className="author"><a href="#">John Doe</a></li>
          <li className="date">Aug. 24, 2015</li>
       
        </ul>
      </div>
      <div className="description">
        <h1>{project.title}</h1>
        
        <p> {project.content}</p>
        <p className="read-more">
          <a href="#">Read More</a>
        </p>
      </div>
    </div>

  )
}

export default ProjectSummary