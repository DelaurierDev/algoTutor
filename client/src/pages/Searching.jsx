import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

const Searching = () => {
  return (
    <div>
      <Navbar/>
      <div className='p-5 text-xl w-[80%] mx-auto max-w-[1000px]'>
        <p>Being able to search through a set of data is a very important thing to know how to do.  <strong>Click</strong> between the buttons below to view different searching algorithms.</p>
      </div>
      <div className='h-[600px] flex flex-col items-center justify-center '>
        <Link to ="/search/linear" >
          <button className='h-[70px] w-[300px] bg-[#310104] font-bold rounded text-[#edf4ed] my-7'>Linear Search</button>
        </Link>
        <Link to ="/search/binary" >
          <button className='h-[70px] w-[300px] bg-[#310104] font-bold rounded text-[#edf4ed] my-7'>Binary Search</button>
        </Link>
        <Link to ="/sorting" >
          <button className='h-[70px] w-[300px] bg-[#310104] font-bold rounded text-[#edf4ed] my-7'>Interpolation Search</button>
        </Link>
        <Link to ="/sorting" >
          <button className='h-[70px] w-[300px] bg-[#310104] font-bold rounded text-[#edf4ed] my-7'>Jump Search</button>
        </Link>
        </div>
       
    </div>

  )
}

export default Searching