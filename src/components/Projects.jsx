import React from 'react'
import ProjectCard from './ProjectCard'

import coinTracker from '../static/img/thumb/thumbnail-project-1-large.webp'
import dnbkr from '../static/img/thumb/thumbnail-project-2-large.webp'
import devPortfolio from '../static/img/thumb/thumbnail-project-3-large.webp'
import banana from '../static/img/thumb/thumbnail-project-4-large.webp'
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
          thumb={coinTracker}
          id={1}
          url={'https://coin-tracker-demo.vercel.app'}
          git={'https://github.com/legshampoo/coin-tracker-demo'}
        />
        <ProjectCard 
          name={'NFT LANDING PAGE'}
          skills={['REACT', 'REACT FIBER', 'THREEJS']}
          thumb={banana}
          id={2}
          url={'https://banana-landing-page.vercel.app/'}
          git={'https://github.com/legshampoo/dev-portfolio'}
        />
        <ProjectCard 
          name={'IMMERSIVE ART PORTFOLIO'}
          skills={['NODE', 'HTML', 'CSS']}
          thumb={dnbkr}
          id={3}
          url={'https://dnbkr.com'}
          git={'https://github.com/legshampoo/update.dnbkr.com'}
        />
        <ProjectCard 
          name={'THIS SITE!'}
          skills={['REACT', 'HTML', 'CSS', 'JAVASCRIPT', 'NEXTJS']}
          thumb={devPortfolio}
          id={4}
          url={'https://danbaker.codes'}
          git={'https://github.com/legshampoo/dev-portfolio'}
        />
      </div>
    </div>
  )
}
