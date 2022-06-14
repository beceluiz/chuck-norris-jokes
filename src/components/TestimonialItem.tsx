import React from 'react'

function TestimonialItem({texto}:any) {
  return (
    <div className='mt-10 mb-2'>
     
      <img className='mb-4 w-60 h-60 rounded-full  mx-auto bg-sky-100 ' src="/chuck-img.png"/> 
    <div className='mt-2 bg-sky-100 pt-4 p-8 rounded-xl max-w-xl mx-auto'>
      
        <div className='pt-6 text-center space-y-4 text-lg font-semibold font-sans'> {texto}
        </div>
        
    </div>
    </div>
  )
  }
export default TestimonialItem