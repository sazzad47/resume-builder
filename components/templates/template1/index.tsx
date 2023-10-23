import Image from 'next/image'
import React from 'react'
import {AiOutlineMail} from "react-icons/ai";
import {IoIosCall} from "react-icons/io";
import {FaLinkedin} from "react-icons/fa";
import {FaAddressCard} from "react-icons/fa";

const Template1 = () => {
  return (
    <div className='w-full min-h-screen bg-bg-primary text-gray-700 flex p-[3rem]'>
       
       {/* left side starts here */}

      <div className='w-1/2 mb-[3rem] px-5 border-r border-gray-400 max-h-full flex flex-col gap-2'>
        <div className='w-full flex flex-col items-center justify-center h-[18rem] mb-[3rem]'>
            <div className='relative w-[100px] h-[100px]'>
            <Image src="/template-1-logo.png" fill alt='' objectFit='contain' />
            </div>
            <h3 className='text-3xl uppercase font-heading font-bold'> Amir Hossen </h3>
            <p className='text-xl uppercase font-body font-normal mt-2'> Graphics Designer </p>
        </div>

        {/* contact section starts here */}

        <div className='w-full flex flex-col items-start justify-center'>
          <div className='h-0 w-full border-t-[3px] border-gray-400'></div>
            
            <h3 className='text-2xl uppercase font-heading font-bold mt-3'> Contact </h3>
            <div className='flex flex-col mt-4 gap-3'>

                <div className='flex items-center gap-2'>
                    <AiOutlineMail/>
                    <div>
                        example@gmail.com
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <IoIosCall/>
                    <div>
                        01222333344
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <FaLinkedin/>
                    <div>
                        amirhossen
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <FaAddressCard/>
                    <div>
                        Lahore, Pakistan
                    </div>
                </div>
            </div>
        </div>

         {/* contact section ends here */}

         {/* skills section starts here */}

        <div className='w-full flex flex-col items-start justify-center mt-[3rem]'>
          <div className='h-0 w-full border-t-[3px] border-gray-400'></div>
            
            <h3 className='text-2xl uppercase font-heading font-bold mt-3'> Skills </h3>
            
            <p className='text-lg uppercase font-heading font-semibold mt-3'> Software Proficiency </p>
            <div className='w-full flex flex-col mt-4 gap-3'>

                <div className='w-full flex items-center gap-2'>
                    <h3 className='flex-1 text-lg font-semibold'> Sketch </h3>
                    <div className="w-[50%] bg-gray-400 rounded-full h-full">
                      <div className="bg-gray-700 h-full rounded-full" style={{width: "45%"}} ></div>
                    </div>
                </div>
                <div className='w-full flex items-center gap-2'>
                    <h3 className='flex-1 text-lg font-semibold'> Figma </h3>
                    <div className="w-[50%] bg-gray-400 rounded-full h-full">
                      <div className="bg-gray-700 h-full rounded-full" style={{width: "45%"}} ></div>
                    </div>
                </div>
                <div className='w-full flex items-center gap-2'>
                    <h3 className='flex-1 text-lg font-semibold'> Adobe XD </h3>
                    <div className="w-[50%] bg-gray-400 rounded-full h-full">
                      <div className="bg-gray-700 h-full rounded-full" style={{width: "45%"}} ></div>
                    </div>
                </div>
                <div className='w-full flex items-center gap-2'>
                    <h3 className='flex-1 text-lg font-semibold'> InVision </h3>
                    <div className="w-[50%] bg-gray-400 rounded-full h-full">
                      <div className="bg-gray-700 h-full rounded-full" style={{width: "45%"}} ></div>
                    </div>
                </div>
                <div className='w-full flex items-center gap-2'>
                    <h3 className='flex-1 text-lg font-semibold'> Canva </h3>
                    <div className="w-[50%] bg-gray-400 rounded-full h-full">
                      <div className="bg-gray-700 h-full rounded-full" style={{width: "45%"}} ></div>
                    </div>
                </div>
                <div className='w-full flex items-center gap-2'>
                    <h3 className='flex-1 text-lg font-semibold'> AutoCAD </h3>
                    <div className="w-[50%] bg-gray-400 rounded-full h-full">
                      <div className="bg-gray-700 h-full rounded-full" style={{width: "45%"}} ></div>
                    </div>
                </div>

            </div>

            <p className='text-lg uppercase font-heading font-semibold mt-[3rem]'> Digital Media </p>
            <div className='w-full flex flex-col mt-4 gap-3'>

                <div className='w-full flex items-center gap-2'>
                    <h3 className='flex-1 text-lg font-semibold'> Video Editing </h3>
                    <div className="w-[50%] bg-gray-400 rounded-full h-full">
                      <div className="bg-gray-700 h-full rounded-full" style={{width: "45%"}} ></div>
                    </div>
                </div>
                <div className='w-full flex items-center gap-2'>
                    <h3 className='flex-1 text-lg font-semibold'> Animation </h3>
                    <div className="w-[50%] bg-gray-400 rounded-full h-full">
                      <div className="bg-gray-700 h-full rounded-full" style={{width: "45%"}} ></div>
                    </div>
                </div>
                <div className='w-full flex items-center gap-2'>
                    <h3 className='flex-1 text-lg font-semibold'> Motion Graphics </h3>
                    <div className="w-[50%] bg-gray-400 rounded-full h-full">
                      <div className="bg-gray-700 h-full rounded-full" style={{width: "45%"}} ></div>
                    </div>
                </div>
                <div className='w-full flex items-center gap-2'>
                    <h3 className='flex-1 text-lg font-semibold'> 3D Modeling </h3>
                    <div className="w-[50%] bg-gray-400 rounded-full h-full">
                      <div className="bg-gray-700 h-full rounded-full" style={{width: "45%"}} ></div>
                    </div>
                </div>
            </div>
        </div>

         {/* skills section ends here */}
      </div>
      
       {/* left side ends here */}

       {/* right side starts here */}

       <div className='w-1/2 mb-[3rem] px-5 max-h-full flex flex-col gap-2'>
        <div className='w-full flex flex-col items-center justify-center h-[18rem] mb-[3rem]'>
            <div className='relative w-full h-full'>
            <Image src="/template-1-photo.jpg" fill alt='' objectFit='contain' />
            </div>
        </div>

        {/* experience section starts here */}
          
          <div className='w-full flex items-center -mt-[0.3rem]'>
            <div className='h-0 w-full border-t-[3px] border-gray-400 '></div>
            <div className="h-0 w-0 border-t-[7px] border-t-transparent border-l-[14px] border-l-gray-400 border-b-[7px] border-b-transparent"></div>
          </div>
      
      
        <div className='w-full flex flex-col items-start justify-center'>

            <div className='w-full flex flex-col items-start'>
            <h3 className='text-2xl uppercase font-heading font-bold'> Experience </h3>
              <h5 className='text-lg uppercase font-heading font-semibold mt-5'> Package Designer </h5>
              <h5 className='text-lg font-heading font-semibold mt-2'> Google </h5>
              <p className='font-body'>
              Conceptualized and designed innovative packaging solutions for Google products, ensuring brand consistency and market competitiveness.
              Collaborated with cross-functional teams, including marketing, product development, and production, to understand project requirements and deliver design solutions that met business goals.
              </p>
            </div>

            <div className='w-full flex flex-col items-start'>
          
              <h5 className='text-lg uppercase font-heading font-semibold mt-5'> Production Artis </h5>
              <h5 className='text-lg font-heading font-semibold mt-2'> Apple </h5>
              <p className='font-body'>
              Conceptualized and designed innovative packaging solutions for Apple products, ensuring brand consistency and market competitiveness.
              Collaborated with cross-functional teams, including marketing, product development, and production, to understand project requirements and deliver design solutions that met business goals.
              </p>
            </div>

            <div className='w-full flex flex-col items-start'>
           
              <h5 className='text-lg uppercase font-heading font-semibold mt-5'> Art Director </h5>
              <h5 className='text-lg font-heading font-semibold mt-2'> Amazon </h5>
              <p className='font-body'>
              Conceptualized and designed innovative packaging solutions for Amazon products, ensuring brand consistency and market competitiveness.
              Collaborated with cross-functional teams, including marketing, product development, and production, to understand project requirements and deliver design solutions that met business goals.
              </p>
            </div>
            
        </div>

         {/* experience section ends here */}

        
         {/* skills section ends here */}
      </div>
       
    </div>
  )
}

export default Template1