import React from 'react'
import {  Outlet, NavLink } from 'react-router-dom'

function People() {

  return (
    <div className='container my-5'>
      <h1>Our Team</h1>
      <p>The dedicated members of NUCES-FAST Khi are working coperatively to help the students with special needs. Our enthusiast team can be categorized into three classes Experts Panel, AI team, and Development team</p>
      <hr />
      <h1 className='mt-7'>Meet our members</h1>

      <div className='mt-3'>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <NavLink className={({isActive}) => `nav-link text-secondary ${isActive ? 'active' : ''}`} aria-current="page" to="/people/experts" >Experts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => `nav-link text-secondary ${isActive ? 'active' : ''}`} to="/people/aiTeam" >AI team</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => `nav-link text-secondary ${isActive ? 'active' : ''}`} to="/people/devTeam" >Development Team</NavLink>
          </li>
        </ul>
        <Outlet/>
      </div>
        

    </div>
  )
}

export default People
