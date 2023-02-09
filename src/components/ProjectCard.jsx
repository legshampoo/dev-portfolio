import React from 'react'

export default function ProjectCard({ name, skills, thumb, id }) {
  return (
    <div className='project-card'>
      <div className='project-thumb-container'>
        <img src={thumb} alt={name} />
      </div>
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>{name}</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {skills.map((skill, i) => {
          return (
            <div style={{ fontSize: '14px', marginRight: '10px', color: '#D9D9D9'}} key={i}>{skill}</div>
          );
        })}
      </div>
    </div>
  )
}
