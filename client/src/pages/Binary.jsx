import React from 'react'
import Navbar from '../components/Navbar'
const Binary = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <div>
                <h2 className='text-2xl font-bold'>Overview:</h2>
                <p>Binary search
                </p>
                <h2 className='text-2xl font-bold'>Time Complexity:</h2>
                <p>O(log n) or O(1) if the target is found on the first iteration.</p>
                
            </div>
            
        </div>
    </div>
  )
}

export default Binary