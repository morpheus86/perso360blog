import React from 'react'
import ProjectSummary from './ProjectSummary';

const ProjectList = ({project}) => {
  return (
    <div className='project-list section'>
      {
        project && project.map(project => {
          return(
            <ProjectSummary project={project} key={project.id} />
          )
        })
      }
    </div>
  );
}
export default ProjectList
