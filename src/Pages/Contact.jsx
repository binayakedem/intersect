import React,{useState} from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone ,FaArrowRightLong, FaLocationArrow} from "react-icons/fa6";
import { FaFacebook,FaInstagram ,FaTwitter,FaYoutube } from "react-icons/fa";
const Contact = () => {
    const [user, setUser] = useState({
        name: '', email: '', subject: '',number:'', message: ''
    });
    const [botReply, setBotReply] = useState(''); 

    let name, value;
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject,number, message } = user;
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, subject,number, message
            })
        };

        const res = await fetch('https://intersect-id-default-rtdb.asia-southeast1.firebasedatabase.app/message.json', options);

        if (res) {
            alert("Message sent");
            setUser({ name: '', email: '', subject: '',number:'', message: '' });
            setBotReply(`Hi ${name}, thanks for reaching out! We have received your message and will get back to you shortly.`);
        } else {
            alert("Something went wrong!!");
        }
    };
  return (
    <div>
     <div className=' bg-blue-600 text-center flex flex-col h-[50vh] w-full justify-center items-center font-sans'>
        <h1 className='font-bold text-3xl text-white'>Let us be your
             </h1>
             <h1 className='text-[#FFCD03] font-bold text-3xl'> Contact us</h1>
      </div>
    <div className='mx-7 md:mx-10 lg:mx-28 lg:relative lg:top-[-100px] lg:z-20 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#70BF44] p-9 md:rounded-xl shadow' data-aos="flip-right" data-aos-duration="2000">
        
        <div className='flex flex-col gap-2 md:gap-5'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6'>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" placeholder='Full name' className='p-2 rounded-md text-black'value={user.name} required onChange={data} />
                    </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="email">Email</label>
                    <input type="email"  name="email" placeholder='Email' className='p-2 rounded-md text-black'value={user.email} required onChange={data}/>
                    </div>
                </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" placeholder='Subject' className='p-2 rounded-md text-black'value={user.subject} required onChange={data}/>
                    </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="Company Name">Phone Number</label>
                    <input type="number" name="number"  placeholder='Phone number' className='p-2 rounded-md text-black'value={user.number} required onChange={data}/>
                    </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="Message">Message</label>
                    <textarea  name="message" placeholder='Message' className='p-2 rounded-md text-black'value={user.message} required onChange={data}/>
                    </div>
                    <div>
                        <button className='flex flex-row items-center bg-[#2b5510] text-white gap-1 p-3 rounded-full'onClick={handleSubmit}><span>Send Message</span><FaArrowRightLong /></button>
                    </div>
                
            </div>
       
        <div className='flex flex-col gap-2 md:gap-6'>
                <div>
                    <h1 className='text-black'>For Product Information</h1>
                    <p className='flex flex-row gap-2 items-center text-white'><span><MdOutlineAttachEmail/></span><span>carreer@intersect.com</span></p>
                </div>
                <div>
                    <h1 className='text-black'>For Contact Information</h1>
                    <p className='flex flex-row gap-2 items-center text-white'><span><FaPhone /></span><span>9876543210</span></p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-black'>For Branch Information</h1>
                    <p className='flex flex-row gap-2 items-center text-white'><span><IoLocationSharp /></span><span>Kathmandu, Nepal</span></p>
                    <p className='flex flex-row gap-2 items-center text-white'><span><IoLocationSharp /></span><span>Jhapa, Nepal</span></p>
                    <p className='flex flex-row gap-2 items-center text-white'><span><IoLocationSharp /></span><span>Dolpa, Nepal</span></p>
                </div>
            </div>
          
        </div>
        <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d472.8095015057145!2d85.34084043398627!3d27.70040259506336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1729261861189!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='h-[50vh] my-4'
      />
        </div>
    </div>
    </div>
  )
}

export default Contact