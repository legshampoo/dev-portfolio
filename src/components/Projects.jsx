import React from 'react'
import ProjectCard from './ProjectCard'

import coinTracker from '../static/img/thumb/thumbnail-project-1-large.webp'
import dnbkr from '../static/img/thumb/thumbnail-project-2-large.webp'
import devPortfolio from '../static/img/thumb/thumbnail-project-3-large.webp'
import banana from '../static/img/thumb/thumbnail-project-4-large.webp'
import buyMeACoffee from '../static/img/thumb/thumbnail-project-5-large.webp'
import Thumb_6 from '../static/img/thumb/thumbnail-project-6-large.webp'

export default function Projects() {
  return (
    <div>
      <div className='projects-title'>Projects</div>
      <div className='projects-container'>
        <ProjectCard 
          name={'BUY ME A COFFEE (WITH CRYPTO)'}
          skills={['REACT', 'SOLIDITY', 'NEXTJS', 'ETHERS.JS', 'HARDHAT']}
          thumb={buyMeACoffee}
          id={1}
          url={'https://buy-me-a-coffee-gamma.vercel.app/'}
          git={'https://github.com/legshampoo/buy-me-a-coffee'}
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
          name={'CRYPTO TOKEN TRACKER'}
          skills={['REACT', 'HTML', 'CSS']}
          thumb={coinTracker}
          id={3}
          url={'https://coin-tracker-demo.vercel.app'}
          git={'https://github.com/legshampoo/coin-tracker-demo'}
        />
        <ProjectCard 
          name={'IMMERSIVE ART PORTFOLIO'}
          skills={['NODE', 'HTML', 'CSS']}
          thumb={dnbkr}
          id={4}
          url={'https://dnbkr.com'}
          git={'https://github.com/legshampoo/update.dnbkr.com'}
        />
        <ProjectCard 
          name={'THIS SITE!'}
          skills={['REACT', 'HTML', 'CSS', 'JAVASCRIPT']}
          thumb={devPortfolio}
          id={5}
          url={'https://danbaker.codes'}
          git={'https://github.com/legshampoo/dev-portfolio'}
        />
      </div>
    </div>
  )
}
