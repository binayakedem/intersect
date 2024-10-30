import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Aos from 'aos';
import { FaLinkedin } from "react-icons/fa6";
Aos.init();
const About = () => {
    const data=[
        {
          "id": 1,
          "name": "John Doe",
          "position": "Software Engineer",
          "image": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "position": "Project Manager",
          "image": "https://www.shutterstock.com/image-photo/picture-female-face-cut-half-260nw-174341075.jpg"
        },
        {
          "id": 3,
          "name": "Michael Brown",
          "position": "UI/UX Designer",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkc5TIFfGcpiWQmzif1Qp2fbou1SUfZx7FBA&s"
        },
        {
          "id": 4,
          "name": "Emily Davis",
          "position": "Backend Developer",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQi2Mm5P8j09P4hPKa1B-t9eIOHzHmR7IBkw&usqp=CAU"
        },
        {
          "id": 5,
          "name": "David Wilson",
          "position": "DevOps Engineer",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhcH8Rs3YXSOuU2ky2ondk4hFLr88GOnaEYscXkDAvay4uP1Hk7rjbrJWC5cFxm73zcY&usqp=CAU"
        },
        {
          "id": 6,
          "name": "Sophia Martinez",
          "position": "Product Owner",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UpX-WS_egeab0sDSIdnJ1rf9lmshRMk1ZpXVryRMNeMkulfI5Rmt9WBjkCsq_mLmntU&usqp=CAU"
        },
        {
          "id": 7,
          "name": "Daniel Anderson",
          "position": "QA Engineer",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGPo2YeRm2aSXUfxKxKQbnAGF1pd9kz1PJNHR-zsIvMor2sYMbG7DfwmCmBaDqShZrdc&usqp=CAU"
        },
        {
          "id": 8,
          "name": "Olivia Thomas",
          "position": "Business Analyst",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8S6BUNXN0umKvTVTsIlLgVchZmzvJdKsvqA5e_VQJW4ZWL6eJd1rzQ3Ne-52Ay2N7hFw&usqp=CAU"
        },
        {
          "id": 9,
          "name": "James Taylor",
          "position": "Scrum Master",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVigN-6fscM_DZn9IvhzxFOIwNqbzsEBo_d-8c7HOr7z4OYKcGhzaRXPuwBNgVVCCrqrE&usqp=CAU"
        },
        {
          "id": 10,
          "name": "Ava Moore",
          "position": "Frontend Developer",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdRE0i2XbC4agjg7e7RY6PECIramxIa1OlF9rBv-I4tRNeNt4q9speAFNcNBCAbTvMfM&usqp=CAU"
        },
        {
          "id": 11,
          "name": "William Jackson",
          "position": "Technical Lead",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZZYSsnncqDhroX4Ud9rgHCxpDeyLSN5PdG71BuDAk-ulL4CQCFtjL4lKVH26UIW9EOo&usqp=CAU"
        },
        {
          "id": 12,
          "name": "Isabella White",
          "position": "Marketing Specialist",
          "image": "https://thumbs.wbm.im/pw/small/f1594a827664fd77fd90860cba761015.jpg"
        }
      ]
      
  return (
    <div >
      <div className=' bg-blue-600 text-center flex flex-col h-[50vh] w-full justify-center items-center font-sans'>
        <h1 className='font-bold text-3xl text-white'>Let us be your
             </h1>
             <h1 className='text-[#FFCD03] font-bold text-3xl'> innovation partner!</h1>
      </div>
      <div className='mx-4 md:mx-12 lg:mx-24 my-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
          <div className='flex flex-col gap-5 text-gray-800' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h1 className='mt-6 flex flex-row justify-start items-center gap-2 font-bold text-2xl text-[#0047A9] '>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a explicabo numquam! Explicabo, commodi. Id autem quae animi deleniti voluptatem cupiditate ipsa maiores aut harum velit, saepe deserunt dolorum reprehenderit sed facere debitis sequi accusantium molestias nam eum labore adipisci impedit reiciendis dolore? Placeat quidem necessitatibus, nobis iste animi aliquid numquam saepe facere alias repellat aspernatur fugit minus, unde veritatis, quod quae sit ipsa nam reprehenderit veniam esse dolorem delectus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quos necessitatibus eveniet, nam consequatur tenetur rem quam, voluptate nesciunt cum maxime saepe itaque. Perferendis voluptatem, dolore odio eveniet esse culpa.</p>
            </div>
            <div className='text-gray-700'>
          <div className=' my-6 flex flex-row justify-start items-center gap-2 font-bold text-2xl text-[#0047A9] mt-5'>
          <FaLocationDot /> <h1>Thanks for visiting us!</h1>
          </div>
          <hr className='w-full border border-black my-4'/>
          <div data-aos="zoom-out-up" data-aos-duration='1200' className='overflow-hidden'>
            <img className='h-full w-full object-cover' src="https://thumbs.dreamstime.com/b/digital-transformation-technology-strategy-ideas-adoption-business-age-enhancing-global-capabilities-215266548.jpg" alt="image" />
          </div>
            </div>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-6'>
            <div  data-aos="zoom-out-up" data-aos-duration='1200' className='overflow-hidden'> <p className='text-4xl font-bold text-blue-600 text-center mb-3'>Founder</p>
                <img className='h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgX61ijdrvTrrjLcst5evzaJQFoSpnKOdJ0kPfll5J3qVJdGSVakF9zKQEdX4ofjqrGFM&usqp=CAU" alt="founder" />
            </div>
            <div data-aos="zoom-out-up" className='font-normal text-gray-800 font-mono mt-8'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero animi saepe corrupti, est laudantium architecto, ea cum enim quos, minus ut praesentium obcaecati consequatur facere voluptas! Adipisci consequuntur animi eum magnam quam repellat dolorum vero eveniet voluptatum, dolorem fuga voluptatem eius iure ullam, aperiam dignissimos nesciunt perferendis, modi quasi placeat iste. Delectus corporis velit veritatis eum hic ex accusantium labore?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias eos sit aspernatur! Delectus, illum. Quia, dicta impedit distinctio consectetur saepe sapiente recusandae magnam asperiores voluptate ad quidem tempora blanditiis, architecto eos nobis qui dolore accusantium suscipit non deleniti. Sequi voluptatem aspernatur ipsum ipsam minus, incidunt distinctio, est voluptatibus ullam deleniti consequuntur? Dignissimos quisquam placeat reiciendis illum aliquam in, vitae doloremque ducimus sit? Nihil tenetur quae sapiente vitae earum iure facere ratione, expedita natus pariatur inventore eaque deleniti non dignissimos ex possimus cumque autem nemo amet laudantium! Expedita, earum vero.</p>
            </div>

        </div>
        <div>
            <h1 className='text-3xl font-bold text-blue-600 text-center my-6'>Leadership Team</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
            {
                data.map((d)=>(
                    
            <div key={d.id}>
                <div className='relative h-60 w-auto' data-aos="flip-left" data-aos-duration="1200">
                    <img className='h-full rounded-2xl w-full object-cover hover:scale-105 duratio-500 ease-in-out cursor-pointer' src={d.image} alt="profile" />
                    <div className='absolute inset-0 text-blue-600 text-xl flex justify-end items-end'>
                    <a href="https://www.linkedin.com/"><FaLinkedin size={30}/></a>
                    </div>

                </div>
                <h1 className='text-xl font-semibold font-mono'>{d.name}
                </h1>
                <p className='font-normal text-gray-800'>
               {d.position}
                </p>

            </div>
            
        ))
    }

        </div>
        <div>
          </div>
          
        </div>
        </div>
      

  );
};

export default About;
