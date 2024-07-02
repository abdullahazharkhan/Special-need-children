import React from 'react'
import DemoVideo from './Video'

function Dyslexia() {
  return (
    <div className='container my-2'>
      <p>
        <b>Dyslexia</b> is a learning disorder characterized by difficulties with accurate and/or fluent word recognition, spelling, and decoding abilities. Despite these challenges, individuals with dyslexia often possess unique strengths, such as creativity and problem-solving skills. Early identification and targeted interventions can significantly improve reading and writing skills.
      </p>
      <div>
        <DemoVideo
          video={{
            title: 'Dyslexia',
            description: 'This is related to Dyslexia disorder'
          }
          } />
      </div>
    </div>
  )
}

export default Dyslexia
