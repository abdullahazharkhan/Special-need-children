import React from 'react'

const tempData = [
  { id: '22K-1234', name: 'Hamdan Vohra', email: 'email123@gmail.com', image: `${process.env.PUBLIC_URL}/tempPics/pic.jpeg` },
  { id: '22K-1234', name: 'Abdullah', email: 'email123@gmail.com', image: `${process.env.PUBLIC_URL}/tempPics/pic.jpeg` },
  { id: '22K-1234', name: 'Hammad', email: 'email123@gmail.com', image: `${process.env.PUBLIC_URL}/tempPics/pic.jpeg` },
  { id: '22K-1234', name: 'Taha Khan', email: 'email123@gmail.com', image: `${process.env.PUBLIC_URL}/tempPics/pic.jpeg` }
]

const data = [
  { name: 'ADHD', value: [...tempData] },
  { name: 'Autism', value: [...tempData] },
  { name: 'Downsyndrome', value: [...tempData] },
  { name: 'Dyslexia', value: [...tempData] }
]

// The above is temporary data and would be fetched with an API

function Board(props) {
  return (
    data.map((group, ind) => (

      <div id={`group-${`${group.name}-${ind}-${props.id}`}`}>
        <h2>
          <span className='badge border text-light position-absolute translate-middle start-50 bg-dark opacity-100'>{group.name}</span>
        </h2>
        <div className="row row-cols-1 row-cols-md-4 g-5 border border-2 rounded my-5 ">
          {
            group && group.value &&

            group.value.map((ele, index) => (
              <div className="col-sm" id={`${ele.id}-${index}-${props.id}`}>
                <div className="card mb-3">
                  <img src={ele.image} className="card-image-top " alt="Not available" />
                  <div className="card-body">
                    <h5 className="card-title">{ele.name}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    {ele.email && <li className="list-group-item">{ele.email}</li>}
                    {ele.id && <li className="list-group-item">{ele.id}</li>}
                  </ul>
                </div>
              </div>

            ))
          }

        </div>
      </div>
    ))

  )
}

export default Board
