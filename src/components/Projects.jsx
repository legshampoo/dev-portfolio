import React from 'react'
import ProjectCard from './ProjectCard'

import Thumb_1 from '../static/img/thumb/thumbnail-project-1-large.webp'
import Thumb_2 from '../static/img/thumb/thumbnail-project-2-large.webp'
import Thumb_3 from '../static/img/thumb/thumbnail-project-3-large.webp'
import Thumb_4 from '../static/img/thumb/thumbnail-project-4-large.webp'
import Thumb_5 from '../static/img/thumb/thumbnail-project-5-large.webp'
import Thumb_6 from '../static/img/thumb/thumbnail-project-6-large.webp'

export default function Projects() {
  return (
    <div>
      <div className='projects-title'>Projects</div>
      <div className='projects-container'>
        <ProjectCard 
          name={'DESIGN PORTFOLIO'}
          skills={['HTML', 'CSS']}
          thumb={Thumb_1}
          id={1}
        />
        <ProjectCard 
          name={'E-LEARNING LANDING PAGE'}
          skills={['HTML', 'CSS']}
          thumb={Thumb_2}
          id={2}
        />
        <ProjectCard 
          name={'TODO WEB APP'}
          skills={['HTML', 'CSS', 'JAVASCRIPT']}
          thumb={Thumb_3}
          id={3}
        />
        <ProjectCard 
          name={'ENTERTAINMENT WEB APP'}
          skills={['HTML', 'CSS', 'JAVASCRIPT']}
          thumb={Thumb_4}
          id={4}
        />
        <ProjectCard 
          name={'MEMORY GAME'}
          skills={['HTML', 'CSS', 'JAVASCRIPT']}
          thumb={Thumb_5}
          id={5}
        />
        <ProjectCard 
          name={'ART GALLERY SHOWCASE'}
          skills={['HTML', 'CSS', 'JAVASCRIPT']}
          thumb={Thumb_6}
          id={6}
        />
      </div>
    </div>
  )
}
