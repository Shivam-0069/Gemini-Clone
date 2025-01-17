import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoIosCompass } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaCodepen } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
const MainContent = () => {
  return (
    <div className='flex-1 min-h-screen pb-[15vh] relative'>
        <div className='flex items-center justify-between text-xl p-5 text-slate-700'>
            <p className=''>Gemini</p>
            <FaUser />
        </div>
        <div className='max-w-[900px] mx-auto'>
            <div className='my-12 text-[56px] text-slate-500 font-semibold p-5 '>
                <p>
                    <span className='bg-gradient-to-r from-[#1fb5cf] to-[#ff5546] bg-clip-text text-transparent'>Hello ,Learner</span>

                </p>
                <p className='text-gray-400'>How can I help you today?</p>
            </div>
            <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5'>
                <div className='h-[200px] p-4  bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300'>
                    <p className='text-slate-700 text-lg'>
                        suggest me a course
                    </p>
                    <IoIosCompass className='text-4xl p-1 absolute bottom-2 right-2' />
                </div>
                <div className='h-[200px] p-4  bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300'>
                    <p className='text-slate-700 text-lg'>
                        Loops in JS
                    </p>
                    <FaLightbulb className='text-4xl p-1 absolute bottom-2 right-2' />
                </div>
                <div className='h-[200px] p-4  bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300'>
                    <p className='text-slate-700 text-lg'>
                      Data Structure in Python
                    </p>
                    <MdMessage className='text-4xl p-1 absolute bottom-2 right-2' />
                </div>
                <div className='h-[200px] p-4  bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300'>
                    <p className='text-slate-700 text-lg'>
                       Machine Learning
                    </p>
                    <FaCodepen  className='text-4xl p-1 absolute bottom-2 right-2' />
                </div>
            </div>
            <div className='absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5'>
                <div className='flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full'>
                    <input type="text" placeholder='Enter the prompt here..' className='flex-1 bg-transparent border-none outline-none p-2 text-lg' />
                    <div className='flex  gap-4 items center'>
                    <IoMdPhotos className='text-2xl cursor-pointer'/>
                    <FaMicrophone  className='text-2xl cursor-pointer'/>
                    <IoMdSend className='text-2xl cursor-pointer'/>

                    </div>
                </div>
                <p className='text-sm  my-4 mx-auto text-center font-[500] text-slate-600'>
                    Gemini may display inaccurate info,including about people so double-check its responses.</p>
            </div>
        </div>
    </div>
  )
}

export default MainContent