import React from 'react'

const ContactSection = () => {
  return (
    <>
    <div className='title'>CONTACT</div>
    <form>
      <input type='text' placeholder='Name' />
      <input type='email' placeholder='Email' />
      <textarea placeholder='Message' />
      <button type='submit'>Submit</button>
    </form>
  </>
  )
}

export default ContactSection