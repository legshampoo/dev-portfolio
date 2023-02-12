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
          name={'CRYPTO TOKEN TRACKER'}
          skills={['REACT', 'HTML', 'CSS']}
          thumb={Thumb_1}
          id={1}
          url={'https://coin-tracker-demo.vercel.app'}
          git={'https://github.com/legshampoo/coin-tracker-demo'}
        />
        <ProjectCard 
          name={'IMMERSIVE ART PORTFOLIO'}
          skills={['NODE', 'HTML', 'CSS']}
          thumb={Thumb_2}
          id={2}
          url={'https://dnbkr.com'}
          git={'https://github.com/legshampoo/update.dnbkr.com'}
        />
        <ProjectCard 
          name={'DEVELOPER PORTFOLIO (THIS SITE!)'}
          skills={['REACT', 'HTML', 'CSS', 'JAVASCRIPT', 'NEXTJS']}
          thumb={Thumb_3}
          id={3}
          url={'https://danbaker.codes'}
          git={'https://github.com/legshampoo/dev-portfolio'}
        />
        {/* <ProjectCard 
          name={'ENTERTAINMENT WEB APP'}
          skills={['HTML', 'CSS', 'JAVASCRIPT']}
          thumb={Thumb_4}
          id={4}
        /> */}
        {/* <ProjectCard 
          name={'MEMORY GAME'}
          skills={['HTML', 'CSS', 'JAVASCRIPT']}
          thumb={Thumb_5}
          id={5}
        /> */}
        {/* <ProjectCard 
          name={'ART GALLERY SHOWCASE'}
          skills={['HTML', 'CSS', 'JAVASCRIPT']}
          thumb={Thumb_6}
          id={6}
        /> */}
      </div>
    </div>
  )
}
