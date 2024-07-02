import React from 'react'
import DemoVideo from './Video'

function Downsyndrome() {
  return (
    <div className='container my-2'>
      <p>
        <b>Down syndrome</b> is a genetic disorder caused by the presence of an extra copy of chromosome 21, leading to developmental and intellectual delays. Individuals with Down syndrome may experience unique physical features and health challenges, but with early intervention and support, they can lead fulfilling and productive lives.
      </p>
      <div>
        <DemoVideo
          video={{
            title: 'Downsyndrome',
            description: 'This is related to Downsyndrome disorder'
          }
          } />
      </div>
    </div>
  )
}

export default Downsyndrome
