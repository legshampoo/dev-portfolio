import React from 'react'

export default function ProjectOverlay({ url, git }) {
  return (
    <div className='overlay'>
      <a href={url} target='_blank'>
        <div className='overlay-text'>VIEW PROJECT</div>
      </a>
      <a href={git} target='_blank'>
        <div className='overlay-text'>VIEW CODE</div>
      </a>
    </div>
  )
}
