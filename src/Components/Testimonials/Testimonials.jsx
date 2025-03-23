import React from 'react'
import profilePic from './assets_test/test_image.png'
import Slider from "react-slick";

const TestimonialsData=[
    {
        id:1,
        name:"Abc Xyz",
        designation:"Abc at Xyz",
        img:profilePic,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quam rerum nobis ea porro illum maxime fugiat odio consectetur laborum temporibus consequatur ratione quasi, possimus beatae nihil quaerat, omnis fugit veritatis doloribus asperiores dignissimos quo! Doloribus ad itaque aspernatur minima similique. Suscipit iure hic natus.",
    },
    {
        id:2,
        name:"Abc Xyz",
        designation:"Abc at Xyz",
        img:profilePic,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quam rerum nobis ea porro illum maxime fugiat odio consectetur laborum temporibus consequatur ratione quasi, possimus beatae nihil quaerat, omnis fugit veritatis doloribus asperiores dignissimos quo! Doloribus ad itaque aspernatur minima similique. Suscipit iure hic natus.",
    },
    {
        id:3,
        name:"Abc Xyz",
        designation:"Abc at Xyz",
        img:profilePic,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quam rerum nobis ea porro illum maxime fugiat odio consectetur laborum temporibus consequatur ratione quasi, possimus beatae nihil quaerat, omnis fugit veritatis doloribus asperiores dignissimos quo! Doloribus ad itaque aspernatur minima similique. Suscipit iure hic natus.",
    },
]
const Testimonials = () => {
    const setting={
        dots:true,
        arrow:false,
        infinite:false,
        speed:500,
        slidetoScroll:1,
        autoPlaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2,
                },
                
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    }
  return (
    <div className='py-14 mb-10'>
        <div className='container'>
            <div className='space-y-4 p-6 text-center max-w-[600] mx-auto'>
                <h1 className='uppercase font-semibold text-white text-5xl'>TESTIMONIALS</h1>

            </div>
            <div>
                <Slider {...setting}>
                    {
                        TestimonialsData.map((item)=>{ 
                            return(
                                <div key={item.id}>
                                    <div className='flex  gap-4 p-8 bg-zinc-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 backdrop-saturate-100 backdrop-contrast-125 shadow-lg mx-4 rounded-xl' >
                                        {/* upper section */}
                                        <div className='flex flex-col justify-start items-center gap-5'>
                                            <img src={item.img} alt="" className='w-26 h-26 rounded-sm' />
                                            <div>
                                                <p className='text-xl font-bold text-gray-500'>{item.name}</p>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                        {/* bottom section  */}
                                        <div className='py-6 space-y-4'>
                                            <p className='text-xs text-gray-500 '>{item.text}</p>
                                        </div>
                                    </div>
                                   
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </div>
        <h3 className='text-6xl text-center mt-10'>******</h3>
    </div>
  )
}

export default Testimonials