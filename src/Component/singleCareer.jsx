import React from 'react'
import { useParams,NavLink } from 'react-router-dom'
const singleCareer = () => {
    const data=[
        {
          "id": 1,
          "jobTitle": "Frontend Engineer",
          "vacancies": 4,
          "description": "Responsible for implementing visual elements that users see and interact with in a web application."
        },
        {
          "id": 2,
          "jobTitle": "Backend Developer",
          "vacancies": 2,
          "description": "Focuses on server-side development, databases, and application logic."
        },
        {
          "id": 3,
          "jobTitle": "UI/UX Designer",
          "vacancies": 3,
          "description": "Designs user interfaces and ensures a seamless user experience."
        },
        {
          "id": 4,
          "jobTitle": "Project Manager",
          "vacancies": 1,
          "description": "Oversees project planning, execution, and delivery within scope, time, and budget constraints."
        },
        {
          "id": 5,
          "jobTitle": "DevOps Engineer",
          "vacancies": 3,
          "description": "Facilitates collaboration between development and operations teams to deliver high-quality software."
        },
        {
          "id": 6,
          "jobTitle": "Quality Assurance Engineer",
          "vacancies": 5,
          "description": "Ensures the quality of software products through rigorous testing and debugging."
        },
        {
          "id": 7,
          "jobTitle": "Data Scientist",
          "vacancies": 2,
          "description": "Analyzes complex data sets to provide actionable insights and solutions."
        },
        {
          "id": 8,
          "jobTitle": "Product Manager",
          "vacancies": 1,
          "description": "Defines product vision, strategy, and roadmap to meet market needs and business objectives."
        },
        {
          "id": 9,
          "jobTitle": "Business Analyst",
          "vacancies": 4,
          "description": "Analyzes business processes and requirements to provide data-driven recommendations."
        },
        {
          "id": 10,
          "jobTitle": "Scrum Master",
          "vacancies": 2,
          "description": "Facilitates Scrum processes and ensures the team adheres to Agile principles."
        },
        {
          "id": 11,
          "jobTitle": "Technical Writer",
          "vacancies": 1,
          "description": "Creates clear and concise documentation for software applications and systems."
        },
        {
          "id": 12,
          "jobTitle": "Full Stack Developer",
          "vacancies": 3,
          "description": "Handles both front-end and back-end development tasks, ensuring smooth integration."
        }
      ]
      
    let {id}=useParams();
    const job = data.find(job => job.id === parseInt(id));
   
  return (
   <div>
    <div className=' bg-[#0849A8] text-center flex flex-col h-[50vh] w-full justify-center items-center'>
        <h1 className='font-bold text-3xl text-white'>Let us be your
             </h1>
             <h1 className='text-[#70BF44] font-bold text-3xl'> innovation partner!</h1>
      </div>
      <div className='mx-4 md:mx-12 lg:mx-24 my-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
          
            <div className='text-gray-700'>
          <div className=' my-6 flex flex-row justify-start items-center gap-2 font-bold text-2xl text-[#0047A9] mt-5'>
         <h1>Job Details</h1>
          </div>
          <hr className='w-full border border-black my-4'/>
          <div>
            <div className='flex flex-row gap-4'>
                <p className='font-bold text-lg'>Title:</p><p className='font-normal font-serif'>{job.jobTitle}</p>
            </div>
            <div className='flex flex-row gap-4'>
                <p className='font-bold text-lg'>Description:</p><p className='font-normal font-serif'>{job.description}</p>
            </div>
            <div className='flex flex-row gap-4'>
                <p className='font-bold text-lg'>Vacancy:</p><p className='font-normal font-serif'>{job.vacancies}</p>
            </div>
          </div>
           <div className='mt-20'>
          <NavLink className='bg-blue-600 text-white px-6 py-3 shadow rounded-lg' to='/applicationform'>Apply</NavLink>
           </div>
          
          
        </div>


          <div className='w-full h-full overflow-hidden'>
            <img className='h-full w-full object-cover' src="https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png" alt="" />
          </div>
        </div>
      </div>
   </div>
  )
}

export default singleCareer