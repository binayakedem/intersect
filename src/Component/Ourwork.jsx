import React from 'react'

const Ourwork = () => {
    const items = [
        { name: 'Sunset', imageUrl: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png' },
        { name: 'Mountain', imageUrl: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png' },
        { name: 'Ocean', imageUrl: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png' },
        { name: 'Forest', imageUrl: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png' },
        { name: 'Sunset', imageUrl: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png' },
        { name: 'Mountain', imageUrl: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png' },
        { name: 'Ocean', imageUrl: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png' },
        { name: 'Forest', imageUrl: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997.png' }
      ];
  return (
    <div>
      <div className="relative lg:h-96 md:h-80 h-72 bg-cover bg-center" style={{ backgroundImage: `url('https://thumbs.dreamstime.com/b/lines-abstract-data-light-illustration-shapes-dark-background-intersect-movement-energy-lines-abstract-data-light-lines-abstract-321165562.jpg')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to our work section</h1>
      </div>
    </div>
    <div className='bg-[#66B848]'>
    <div className='flex flex-row overflow-x-scroll justify-between items-center  gap-6 py-6 mx-7 md:mx-10 lg:mx-28'>
    {items.map((item, index) => (
           <div key={index}>
           <div className='h-14 overflow-hidden w-14'>
                <img className='object-cover h-full w-full' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src={item.imageUrl} alt="logo" />
            </div>
            <p  data-aos="zoom-in-up" data-aos-duration="1200">{item.name}</p>
           </div>
            ))}

        </div>
            </div>
    <div className='mx-7 md:mx-10 lg:mx-28 py-4 md:py-6 lg:py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <h1 className='text-black font-bold text-2xl py-6'>Custom Design</h1>
                <p  data-aos="zoom-in-up" data-aos-duration="1200">All of our work is 100% custom. Designed for you in Figma. We never use pre-made templates. Ever.
We start with a Website Questionnaire, where we learn more about you, your company and customers. You will share other websites you like the look and feel of along with any fonts, colors or any other design directions you have.
We will then create a fully custom design, for free, based on your specifications.All of our work is 100% custom. Designed for you in Figma. We never use pre-made templates. Ever. We start with a Website Questionnaire, where we learn more about you, your company and customers. You will share other websites you like the look and feel of along with any fonts, colors or any other design directions you have. We will then create a fully custom design, for free, based on your specifications. Once we start working together you can take the design in any direction you would like. You will have plenty of rounds of revision to get the design exactly as you need
Once we start working together you can take the design in any direction you would like. You will have plenty of rounds of revision to get the design exactly as you need</p>
            </div>
            <div className='w-full h-96 overflow-hidden '>
                <img className='object-cover h-full w-full' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>

        </div>
        {/* this is second */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='w-full h-96 overflow-hidden '>
                <img className='object-cover h-full w-full' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div>
                <h1 className='text-black font-bold text-2xl py-6'>Custom Design</h1>
                <p  data-aos="zoom-in-up" data-aos-duration="1200">All of our work is 100% custom. Designed for you in Figma. We never use pre-made templates. Ever.
We start with a Website Questionnaire, where we learn more about you, your company and customers. You will share other websites you like the look and feel of along with any fonts, colors or any other design directions you have.
We will then create a fully custom design, for free, based on your specifications.All of our work is 100% custom. Designed for you in Figma. We never use pre-made templates. Ever. We start with a Website Questionnaire, where we learn more about you, your company and customers. You will share other websites you like the look and feel of along with any fonts, colors or any other design directions you have. We will then create a fully custom design, for free, based on your specifications. Once we start working together you can take the design in any direction you would like. You will have plenty of rounds of revision to get the design exactly as you need
Once we start working together you can take the design in any direction you would like. You will have plenty of rounds of revision to get the design exactly as you need</p>
            </div>
            

        </div>



        {/* this is third */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <h1 className='text-black font-bold text-2xl py-6'>Custom Design</h1>
                <p  data-aos="zoom-in-up" data-aos-duration="1200">All of our work is 100% custom. Designed for you in Figma. We never use pre-made templates. Ever.
We start with a Website Questionnaire, where we learn more about you, your company and customers. You will share other websites you like the look and feel of along with any fonts, colors or any other design directions you have.
We will then create a fully custom design, for free, based on your specifications.All of our work is 100% custom. Designed for you in Figma. We never use pre-made templates. Ever. We start with a Website Questionnaire, where we learn more about you, your company and customers. You will share other websites you like the look and feel of along with any fonts, colors or any other design directions you have. We will then create a fully custom design, for free, based on your specifications. Once we start working together you can take the design in any direction you would like. You will have plenty of rounds of revision to get the design exactly as you need
Once we start working together you can take the design in any direction you would like. You will have plenty of rounds of revision to get the design exactly as you need</p>
            </div>
            <div className='w-full h-96 overflow-hidden '>
                <img className='object-cover h-full w-full' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>

        </div>
        {/* this is fourth */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='w-full h-96 overflow-hidden '>
                <img className='object-cover h-full w-full' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div>
                <h1 className='text-black font-bold text-2xl py-6'>Custom Design</h1>
                <p  data-aos="zoom-in-up" data-aos-duration="1200">All of our work is 100% custom. Designed for you in Figma. We never use pre-made templates. Ever.
We start with a Website Questionnaire, where we learn more about you, your company and customers. You will share other websites you like the look and feel of along with any fonts, colors or any other design directions you have.
We will then create a fully custom design, for free, based on your specifications.All of our work is 100% custom. Designed for you in Figma. We never use pre-made templates. Ever. We start with a Website Questionnaire, where we learn more about you, your company and customers. You will share other websites you like the look and feel of along with any fonts, colors or any other design directions you have. We will then create a fully custom design, for free, based on your specifications. Once we start working together you can take the design in any direction you would like. You will have plenty of rounds of revision to get the design exactly as you need
Once we start working together you can take the design in any direction you would like. You will have plenty of rounds of revision to get the design exactly as you need</p>
            </div>
            

        </div>

        
    </div>
    </div>
  )
}

export default Ourwork