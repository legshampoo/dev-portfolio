import React from 'react'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <div className='skills-container'>
      <SkillCard 
        skill={'React'}
        exp={5} />
      <SkillCard 
        skill={'Node'}
        exp={5} />
      <SkillCard 
        skill={'CSS'}
        exp={5} />
      <SkillCard 
        skill={'MongoDB'}
        exp={5} />
      <SkillCard 
        skill={'Web3'}
        exp={2} />
      <SkillCard 
        skill={'GraphQL'}
        exp={2} />
      <SkillCard 
        skill={'React Native'}
        exp={2} />
      <SkillCard 
        skill={'Solidity'}
        exp={1} />
    </div>
  )
}
