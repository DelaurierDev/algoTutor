import React from 'react'
import Navbar from '../components/Navbar'

const Intp = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <div>
                <h1>Interpolation Search</h1>
                <h2 className='text-2xl font-bold'>Overview:</h2>
                <p>
                  Interpolation  search is an impovement over Binary Search for instances, where the values in asorted array are uniformly distributed . 
                  Interpoaltion search constructs new data points within the range of a discrete set of known data points.  Binary search always goes to the middle element to checvk.
                  On the other hand, interpolation search may go to different locations according to the value of the key being searched.
                </p>
                <h2 className='text-2xl font-bold'>Time Complexity:</h2>
                <p>O(log n) or O(1) if the target is found on the first iteration.</p>
                
            </div>
            
        </div>
    </div>
  )
}

export default Intp