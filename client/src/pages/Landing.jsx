import React from 'react'

const Landing = () => {
  return (
    <div className=' h-[100%] flex items-center justify-center flex-col'>
      <div className=' h-[600px] w-[80%] sm:w-[60%] bg-[#abd1b5] rounded my-40 p-8 flex flex-col max-w-[500px] justify-around items-center shadow-2xl'>
        <div>
          <p>Welcome to</p>
          <p className='text-4xl font-bold text-[#310104] border-b-2 my-4'>AlgoTutor</p>
          <p className='text-xl text-[#310104]'>Your one stop shop for all things algos. Here you can learn new algorithms, or refresh old skills. Whether you know nothing or are getting ready for a job interview, AlgoTutor is for you! Click below to start learning.</p>
          <p></p>          
        </div>

        <button className='h-[70px] w-[300px] bg-[#310104] font-bold rounded text-[#edf4ed]'>Get Started!</button>
        </div>
      
    </div>

  )
}

export default Landing