import React,{useState,useEffect} from 'react'
import Service from './Service'
import Testimonial from './Testimonial'


const servicedata =
  [
    {
      "title": "Web design",
      "icon": "/images/icon-design.svg",
      "description": "The most modern and high-quality design made at a professional level."
    },
    {
      "title": "Web development",
      "icon": "/images/icon-dev.svg",
      "description": "High-quality development of sites at the professional level."
    },
    {
      "title": "Django And React web development",
      "icon": "/images/icon-app.svg",
      "description": "Professional development of applications for iOS and Android."
    },
    {
      "title": "Full stack web developement",
      "icon": "/images/icon-photo.svg",
      "description": "I make high-quality websites with databases of any category at a professional level."
    }
  ]

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  
  return (
    <div>
      <header className='about active'>
        <h2 className='h2 article-title'>
          About
        </h2>
      </header>
      <section className='about-text'>
        <p>
          I'M Full stack web developer and front end developer from hyderabad,india and i am working web developement field .
          i am enjoying doing of complex and diffcult problems
        </p>
        <p>
          My job is bulid websites so it is functionally and user-friendly but the same time it also attractive and
          more i add my personal touch to the website it is eye-catching and easy to use it .and ready to do the different sites for every one as there perferences
          as<b className='bold'> Full stack python and react developer </b>  it is give me happiest thing to making of websites by my own
        </p>
      </section>
      < section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

        {servicedata.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}

      </ul>

      </section>
      <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

        </ul>

      </section>
      <section className='clients'>
        <h3 className='h3 clients-title'> Clients</h3>
        <ul className='clients-list has-scrollbar'>
          <li className='clients-item'>
            <a href='#'>
              <img src='/images/logo-1-color.png'/>
            </a>
          </li>
          <li className='clients-item'>
            <a>
              <img src='images/logo-2-color.png' />
            </a>
          </li>
          <li className='clients-item'>
            <a>
              <img src='images/logo-3-color.png' />
            </a>
          </li>
          <li className='clients-item'>
            <a>
              <img src='images/logo-4-color.png' />
            </a>
          </li>
          <li className='clients-item'>
            <a>
              <img src='images/logo-5-color.png' />
            </a>
          </li>
          <li className='clients-item'>
            <a>
              <img src='images/logo-6-color.png' />
            </a>
          </li>
          
        </ul>
      </section>
  

    </div>
  )
}

export default About