import React from 'react'

const Contact = () => {
  return (
   <section>
    <header>
     <h2 className='h2 article-title'>Contact</h2>
    </header>
    <section className='mapbox'>
     <figure  >
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.524767359955!2d78.5457428!3d17.4054906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb993fa15e3ca1%3A0x30f455321fb9b79!2sSai%20Sukha%20Vistas!5e0!3m2!1sen!2sin!4v1710422313233!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </figure>
    </section>
    <section className='contact-form'>
     <h3 className='h3 form-title'>Contact Form</h3>
     <form className='form'>
      <div className='input-wrapper'>
       <input type='text' name='fullname' id='fullname' className='form-input' placeholder='FullName'/>
       <input type='email' name='email' id='email' className='form-input' placeholder='Email Address' />
       <input type='text' name='address' id='address' className='form-input' placeholder='Your Address' />
      </div>
      <textarea name='message' className='form-input' placeholder='Your Message'></textarea>
      <button className='form-btn' type='submit'>Send Message</button>
     </form>
    </section>
   
   </section>
   
  )
}

export default Contact