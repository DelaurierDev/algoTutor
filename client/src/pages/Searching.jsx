import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

const Searching = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-[600px] flex flex-col items-center justify-center '>
        <Link to ="/searching" >
          <button className='h-[70px] w-[300px] bg-[#310104] font-bold rounded text-[#edf4ed] my-7'>Searching Algos</button>
        </Link>
        <Link to ="/sorting" >
          <button className='h-[70px] w-[300px] bg-[#310104] font-bold rounded text-[#edf4ed] my-7'>Sorting Algos</button>
        </Link>
        </div>
       
    </div>

  )
}

export default Searching