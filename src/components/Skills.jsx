import React from 'react'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <div className='skills-container'>
      <SkillCard 
        skill={'HTML'}
        exp={8} />
      <SkillCard 
        skill={'CSS'}
        exp={8} />
      <SkillCard 
        skill={'Javascript'}
        exp={8} />
      <SkillCard 
        skill={'Accessibility'}
        exp={4} />
      <SkillCard 
        skill={'React'}
        exp={3} />
      <SkillCard 
        skill={'Sass'}
        exp={3} />
    </div>
  )
}
