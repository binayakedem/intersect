import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { RiHandbagFill } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Career = () => {
  const data=[
    {
      "id": 1,
      "jobTitle": "Frontend Engineer",
      "vacancies": 4
    },
    {
      "id": 2,
      "jobTitle": "Backend Developer",
      "vacancies": 2
    },
    {
      "id": 3,
      "jobTitle": "UI/UX Designer",
      "vacancies": 3
    },
    {
      "id": 4,
      "jobTitle": "Project Manager",
      "vacancies": 1
    },
    {
      "id": 5,
      "jobTitle": "DevOps Engineer",
      "vacancies": 3
    },
    {
      "id": 6,
      "jobTitle": "Quality Assurance Engineer",
      "vacancies": 5
    },
    {
      "id": 7,
      "jobTitle": "Data Scientist",
      "vacancies": 2
    },
    {
      "id": 8,
      "jobTitle": "Product Manager",
      "vacancies": 1
    },
    {
      "id": 9,
      "jobTitle": "Business Analyst",
      "vacancies": 4
    },
    {
      "id": 10,
      "jobTitle": "Scrum Master",
      "vacancies": 2
    },
    {
      "id": 11,
      "jobTitle": "Technical Writer",
      "vacancies": 1
    },
    {
      "id": 12,
      "jobTitle": "Full Stack Developer",
      "vacancies": 3
    }
  ]
  
  return (
    <div >
      <div className=' bg-[#29589f] text-center flex flex-col h-[50vh] w-full justify-center items-center'>
        <h1 className='font-bold text-3xl text-white'>Find Your best job
             </h1>
             <h1 className='text-[#70BF44] font-bold text-3xl'> Get ready to join!</h1>
      </div>
      <div className='mx-4 md:mx-12 lg:mx-24 my-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            data.map((d)=>(
              
          <Link to={`/career/${d.id}`} data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
            <div className='h-20 rounded transform hover:translate-y-[-10px] duration-500 ease-in-out bg-[#70BF44] flex flex-row justify-between items-center px-10 '>
          <RiHandbagFill />
          <div>
            <h1 className='text-xl font-semibold text-black'>{d.jobTitle}</h1>
            <p className='font-normal text-gray-800'>{d.vacancies} positions vacancy</p>
          </div>
          <FaGreaterThan   className='cursor-pointer'/>
          </div>
          </Link>
        ))
      }
        </div>
        
        </div>
      </div>
 
  );
};

export default Career;
