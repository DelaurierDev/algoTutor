import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[100px] border-b-2 border-[#51291e] max-w-[1150px] mx-auto bg-[#abd1b5] p-5'>
        <div>
            <Link to="/home"><h1 className='text-3xl font-bold text-[#310104] border-b-2'>AlgoTutor</h1></Link>
        </div>
        <div>
            <ul className='flex w-[200px] justify-between'>
                <Link to="/searching"><li className='text-xl text-[#51291e] cursor-pointer'>Searching</li></Link>
                <Link to="/sorting"><li className='text-xl text-[#51291e] cursor-pointer'>Sorting</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar