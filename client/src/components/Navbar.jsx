import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[100px] border-b-2 border-[#51291e] max-w-[1150px] mx-auto bg-[#abd1b5] p-5'>
        <div>
            <h1 className='text-3xl font-bold text-[#310104] border-b-2'>AlgoTutor</h1>
        </div>
        <div>
            <ul className='flex w-[200px] justify-between'>
                <li className='text-xl text-[#51291e] cursor-pointer'>Searching</li>
                <li className='text-xl text-[#51291e] cursor-pointer'>Sorting</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar