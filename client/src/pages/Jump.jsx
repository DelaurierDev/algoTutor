import React from 'react'
import Navbar from '../components/Navbar'

const Jump = () => {
  return (
    <div>
      <Navbar/>
      <h1>Jump Search</h1>
                <h2 className='text-2xl font-bold'>Overview:</h2>
                <p> Jump search is a searching algorithm meant to be used on sorted arrays.  You jump in intervals throughout the array.  If the value
                  at the index you are on is greater than the target.  If it is you preform a linear search from the previous
                  index.  This method is better than linear search but worse than binary search.

                </p>
                <h2 className='text-2xl font-bold'>Time Complexity:</h2>
                <p>O(root(n))</p>
    </div>
  )
}

export default Jump