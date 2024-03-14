import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import Timelinelist from './Timelinelist';
const Resume = () => {
  return (
   <section>
    <header>
     <h2 className='h2 article-title'>Resume</h2>
     
    </header>
    <div className='timeline'>
     <div className='title-wrapper'>
      <div className='icon-box'>
       <FaBookOpen />
      </div>
      <h3 className='h3'> Education</h3>
     </div>
     <ol className='timeline-list'>
      <Timelinelist
       title='Gvr and s college of engineering'
       data='2018-2022'
       description='B.tech with CGPA of 7.0 with good communication skills and with app developement skills'
      
      />
      <Timelinelist
       title='BHAVAN JUNIOR COLLEGE'
       data='2016-2018'
       description='Intermediate with CGPA of 7.2 with good knowledge and with discipline'

      />
      <Timelinelist
       title='EETHRAM PUBLIC SCHHOL'
       data='2015-2016'
       description='Matriculation with CGPA of 8.8 with good knowledge and with discipline'

      />
     </ol>
    
     
     
     
    </div>
    <div className='timeline'>
     <div className='title-wrapper'>
      <div className='icon-box'>
       <FaBookOpen />
      </div>
      <h3 className='h3'>Work experience</h3>
     </div>
     <ol className='timeline-list'>
      <Timelinelist
       title='Numetry Technologies'
       data='27-09-2023-Present'
       address='Pune/india'
       description='Projects:School management system'
       skills='Django,React,postgre,Mysql,Restframework,Restapi,Docker,Kubernets,Microservices'

      />
      <Timelinelist
       title='Amity Technologies'
       data='21-04-2023-27-07-2023'
       address='Vijayawada/A.P'
       description='Projects:company Website'
       skills='Django,React,postgre,Mysql,Restframework,Restapi,Docker,Kubernets,Microservices'

      />
      <Timelinelist
       title='Udemy'
       data='21-09-2022-27-02-2023'
       address='Pune/india'
       description='Intenship:company Website'
       skills='Django,React,postgre,Mysql,Restframework,Restapi,Docker,Kubernets,Microservices'

      />
      
     </ol>




    </div>
    <div className='timeline'>
     <div className='title-wrapper'>
      <div className='icon-box'>
       <FaBookOpen />
      </div>
      <h3 className='h3'>Skills</h3>
     </div>
     <ol className='timeline-list'>
      <Timelinelist skills='Django' />
      <Timelinelist skills='Python' />
      <Timelinelist skills='Reactjs' />
      <Timelinelist skills='Mysql' />
      <Timelinelist skills='Postgre' />
      <Timelinelist skills='RestAPI' />
      <Timelinelist skills='Full stack web developement' />
     
      

     </ol>




    </div>
    </section>
  )
}

export default Resume