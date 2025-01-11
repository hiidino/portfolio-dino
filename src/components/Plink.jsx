import React from 'react'

const Plink = () => {
  return (
    <div className='mt-6 mx-5'>
      <div className='flex flex-wrap gap-6 justify-center'>
        <a 
          href="https://github.com/hiidino" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='p-2 px-4 bg-[#b8af9c] hover:bg-blue-900 text-white rounded-md flex items-center w-xs sm:w-auto'>
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/dino-raj-200a2524a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='p-2 px-4 bg-[#b8af9c] hover:bg-blue-900 text-white rounded-md flex items-center w-xs sm:w-auto'>
          LinkedIn
        </a>
        <a 
          href="https://leetcode.com/u/hiidino/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='p-2 px-4 bg-[#b8af9c] hover:bg-blue-900 text-white rounded-md flex items-center w-xs sm:w-auto'>
          LeetCode
        </a>
      </div>
    </div>
  )
}

export default Plink
