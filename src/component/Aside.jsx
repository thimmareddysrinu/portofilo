import React from 'react'
import Img from '../../public/images/profile.jpeg'
import { GiClawSlashes } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
const Aside = () => {
 return (
  <aside className='sidebar'>
   <div className='sidebar-info'>
    <figure className='avatar-box'>
     <img src={Img} alt='profile' width='80' />
    </figure>
    <div className='info-content'>
     <h1 className='name'>Srinivasreddy</h1>
     <p className='title'>WEB DEVELOPER</p>
    </div>
    <button className='info_more-btn'>
     <span> for more</span>
     <GiClawSlashes />
    </button>
   </div>
   <div className='sidebar-info_more'>
    <hr className='separator2 ' />
    <ul className='contacts-list'>
     <li className='contact-item'>
      <div className='icon-box'>
       <MdEmail />
      </div>
      <div className='contact-info'>
        <p className='contact-title'> EMAIL</p>
        <a href="mailto:thimmareddysrinu452@gmail.com" className='contact-link'>Thimmareddysrinu452@gmail.com</a>
      </div>
      
     </li>
     <li className='contact-item'>
      <div className='icon-box'>
       <FaPhone />
      </div>
      <div className='contact-info'>
       <p className='contact-title'> Phone number</p>
       <a href="tel:+918374535882" className='contact-link'>+91 8374535882</a>
      </div>

     </li>
     <li className='contact-item'>
      <div className='icon-box'>
       <FaBirthdayCake />
      </div>
      <div className='contact-info'>
       <p className='contact-title'> DOB</p>
       <p className='contact-link'>25/05/1999</p>
      </div>

     </li>
     <li className='contact-item'>
      <div className='icon-box'>
       <MdOutlineMyLocation />
      </div>
      <div className='contact-info'>
       <p className='contact-title'> Location</p>
       <a href="https://www.google.com/maps/place/Sai+Sukha+Vistas/@17.4054906,78.5457428,15z/data=!4m6!3m5!1s0x3bcb993fa15e3ca1:0x30f455321fb9b79!8m2!3d17.4054906!4d78.5457428!16s%2Fg%2F11c134zy00?entry=ttu" className='location'>Uppal/Hyderabad</a>
      </div>

     </li>
    </ul>

   </div>

  </aside>
 )
}

export default Aside