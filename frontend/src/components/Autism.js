import React from 'react'
import DemoVideo from './Video'

function Autism() {
  return (
    <div className='container my-2'>
      <p>
        <b>Autism Spectrum Disorder (ASD)</b> is a neurodevelopmental condition characterized by challenges in social interaction, communication, and repetitive behaviors. Individuals with autism may have unique strengths and differences, and early intervention and tailored support can significantly improve their quality of life.
      </p>
      <div>
        <DemoVideo
          video={{
            title: 'Autism',
            description: 'This is related to Autism disorder'
          }
          } />
      </div>
    </div>
  )
}

export default Autism
