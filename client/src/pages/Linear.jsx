import React from 'react'
import Navbar from '../components/Navbar'

const Linear = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <div>
                <h2 className='text-2xl font-bold'>Overview:</h2>
                <p>Linear search is a great tool to use, but only in specific situations.  Linear search is when you iterate through a set of data, one by one, and check if the value matches the target.
                    This algorithm can work great but it takes a while.  Say you had an array of 10 integers, the max amount of iterations you would have is 10.  That's not bad right?  Now imagine you have an array of 1,000,000 integers.
                    That would have a max amount of 1,000,000 comparisons.  I think you can see where I'm going with this.  The best time to use linear search would be searching for a value in an small, unsorted set of data.
                </p>
                <h2 className='text-2xl font-bold'>Time Complexity:</h2>
                <p>O(n) or O(1) if the target is found on the first iteration.</p>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Linear