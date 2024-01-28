import React from 'react'
import Navbar from '../components/Navbar'

const Intp = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <div>
                <h2 className='text-2xl font-bold'>Overview:</h2>
                <p>Binary search is a nice quick way to find a target in a sorted set of data.  To use binary search you must be able to access any element of th data structure in constant time, and the data structure must be sorted.
                    Binary search started by setting the minimum to the first element of the data, and maximum as the last element of the data.  It then sets the medium as the halfway point between the index of the maximum and the index of the minimum.
                    It then checks if the midpoint matches the target.  If it is higher then the target, the midpoint becomes the new high.  If it is lower, the midpoint becomes the new low.  There is then a new midpoint found, and the process repeats until the target is found.

                </p>
                <h2 className='text-2xl font-bold'>Time Complexity:</h2>
                <p>O(log n) or O(1) if the target is found on the first iteration.</p>
                
            </div>
            
        </div>
    </div>
  )
}

export default Intp