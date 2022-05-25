import React from 'react'

function TestimonialItem({texto}:any) {
  return (
    <div className='bg-blue-600 p-8 rounded-xl max-w-xl mx-auto '>
      <img className='w-60 h-60 rounded-full mx-auto' src="/chuck-img.png"/>
        <div className='pt-6 text-center space-y-4 text-lg font-semibold'>
          {texto}  
        </div>
        
    </div>
  )
  }
export default TestimonialItem