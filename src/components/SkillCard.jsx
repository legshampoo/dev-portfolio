import React from 'react'

export default function SkillCard({ skill, exp }) {
  return (
    <div className='skill-card'>
      <div className='skill-title'>{skill}</div>
      <div className='skill-exp'>{exp} Years Experience</div>
    </div>
  )
}
