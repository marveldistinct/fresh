import React from 'react'

const ContactForm = () => {
  return (
    <form>
      <h2 className='text-2xl font-bold md-5 text-white'>Contact Me</h2>
      <div className='mb-3'>
            <input 
            type="text"
            placeholder='name'
            name='name'
            className='w-ful px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
            />
      </div>
      <div className='mb-3'>
            <input 
            type="email"
            placeholder='Email'
            name='email'
            className='w-ful px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
            />
      </div>
      <div className='mb-3'>
            <input 
            placeholder='Your message'
            name='message'
            className='w-ful px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
            />
      </div>
      <button className='px-6 md-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400'>
        Send a message
      </button>
    </form>
  )
}

export default ContactForm
