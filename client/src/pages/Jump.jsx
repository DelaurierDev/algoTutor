import React from 'react'
import Navbar from '../components/Navbar'

const Jump = () => {
  return (
    <div>
      <Navbar/>
      <h1>Jump Search</h1>
                <h2 className='text-2xl font-bold'>Overview:</h2>
                <p>

                </p>
                <h2 className='text-2xl font-bold'>Time Complexity:</h2>
                <p>O(log n) or O(1) if the target is found on the first iteration.</p>
    </div>
  )
}

export default Jump