import React, { useEffect, useState } from 'react'

// const tempData = [
//   { id: '22K-1234', name: 'Hamdan Vohra', email: 'email123@gmail.com', image: `${process.env.PUBLIC_URL}/tempPics/pic.jpeg` },
//   { id: '22K-1234', name: 'Abdullah', email: 'email123@gmail.com', image: `${process.env.PUBLIC_URL}/tempPics/pic.jpeg` },
//   { id: '22K-1234', name: 'Hammad', email: 'email123@gmail.com', image: `${process.env.PUBLIC_URL}/tempPics/pic.jpeg` },
//   { id: '22K-1234', name: 'Taha Khan', email: 'email123@gmail.com', image: `${process.env.PUBLIC_URL}/tempPics/pic.jpeg` }
// ]

// const data = [
//   { name: 'ADHD', value: [...tempData] },
//   { name: 'Autism', value: [...tempData] },
//   { name: 'Downsyndrome', value: [...tempData] },
//   { name: 'Dyslexia', value: [...tempData] }
// ]

// The above is temporary data and would be fetched with an API

function Board(props) {

  // let data = [];
  // const [members,setMem] = useState([]);
  const [data,setData] = useState([]);
  
  const host = 'http://localhost:3000/api';

  const updateData = (members) => {
  let temp = null;  
    if(props.id !== 'experts'){
      
        temp = [
          {name : 'ADHD', value : members.filter(ele => ele.category === 'ADHD')},
          {name : 'Autism', value : members.filter(ele => ele.category === 'Autism')},
          {name : 'Downsyndrome', value : members.filter(ele => ele.category === 'Downsyndrome')},
          {name : 'Dyslexia', value : members.filter(ele => ele.category === 'Dyslexia')}
        ]
      
      }

    else{
      temp = [{name : null, value : [...members]}];
    }

    setData(temp);
      
  }

  useEffect(()=>{

    async function fetchMembers(){
      const membersReq = await fetch(`${host}/members/team/${props.id}`,{
        method : 'GET',
      });
    
      const result = await membersReq.json();
      
      if (result.status){
        updateData(result.members);
        alert(result.msg);
      }
      else{
        setData([]);
        alert(result.error);
      }
    }
    
    fetchMembers();
    
// eslint-disable-next-line
  },[props.id]);
  
  return (
    data.length > 0 ?
    data.map((group, ind) => (

      group.value.length > 0 && <div className='mx-4' id={`${props.id}-${group.name}-${ind}`}>
        <h2>
          <span className='badge border text-light position-absolute translate-middle start-50 bg-dark opacity-100'>{group.name}</span>
        </h2>
        <div className="row row-cols-1 row-cols-md-4 g-5 border border-2 rounded my-5">
          {
            group && group.value &&

            group.value.map((ele, index) => (
              <div className="col-sm" id={`${ele.id}`}>
                <div className="card mb-3">
                  <img src={ele.image ? ele.image : `${process.env.PUBLIC_URL}/tempPics/pic.jpeg`} className="card-image-top " alt="Not available" />
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
    : <p>No member found</p>

  )
}

export default Board
