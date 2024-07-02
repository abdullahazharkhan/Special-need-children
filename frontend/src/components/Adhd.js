import React from 'react'
import DemoVideo from './Video'

function Adhd() {
  return (
    <div className='container my-2'>
      <p>
        <b>Attention-Deficit/Hyperactivity Disorder (ADHD)</b> is a neurodevelopmental condition marked by persistent patterns of inattention, hyperactivity, and impulsivity that can interfere with daily functioning. It often presents in childhood and can continue into adulthood, affecting academic, occupational, and social activities. Early diagnosis and appropriate interventions can help manage symptoms effectively.
      </p>
      <div>
        <DemoVideo
          video={{
            title: 'Adhd',
            description: 'This is related to Autism disorder'
          }
          } />
      </div>
    </div>
  )
}

export default Adhd
