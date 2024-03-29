import React from 'react'
import ProjectOverlay from './ProjectOverlay';

export default function ProjectCard({ name, skills, thumb, id, url, git }) {
  return (
    <div className='project-card'>
      <div className='project-thumb-container'>
        <img src={thumb} alt={name} />
        <ProjectOverlay 
          url={url}
          git={git}/>
      </div>
      <div className='project-name'>{name}</div>
      <div className='project-skills-container'>
        {skills.map((skill, i) => {
          return (
            <div className='project-skills' key={i}>{skill}</div>
          );
        })}
      </div>
    </div>
  )
}
