import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import cover from '/images/pipeline-cover.png'
import service from '/images/pipeline-service.jpg'
import icon1 from '/icon/video.png'
import icon2 from '/icon/brand.png'
import icon3 from '/icon/media.png'
import icon4 from '/icon/live-streaming.png'
import icon5 from '/icon/activation.png'
import icon6 from '/icon/animation.png'
import icon7 from '/icon/social-media.png'
import icon8 from '/icon/develoment.png'
const Services = () => {
    return (
        <div>
             <img src={cover} alt="" />
             <div className='md:px-20 px-10'>
             <div className="hero">
            <div className="hero-content flex ">
            <div className='bg-red-700 md:px-20 md:py-40 p-2 absolute md:left-16 left-3'>
                <h2 className="md:text-4xl font-bold uppercase text-center text-white">we help <br/> brands to<br/> <span className='text-black'>communicate</span></h2>
                </div>
                <img
                src={service}
                className="w-full rounded-lg shadow-2xl" />
            </div>
            </div>

            <h1 className='text-black md:text-5xl text-2xl my-5 font-semibold text-center'>Our <span className='text-red-700'>Services</span></h1>
             </div>
             <div className='bg-red-700'>
                <div className=' flex justify-center md:gap-44 gap-4 md:pt-20 pt-10'>
                <div className='flex flex-col justify-enter items-center text-center'>
                <img src={icon1} className='md:w-20 w-12' alt="" />
                <h3 className='text-white md:text-2xl mt-1'>Video Production</h3>
                </div>
                <div className='flex flex-col items-center text-center'>
                <img src={icon2} className='md:w-20 w-12' alt="" />
                <h3 className='text-white  md:text-2xl  mt-1'>Branding</h3>
                </div>
                <div className='flex flex-col items-center text-center'>
                <img src={icon3} className='md:w-20 w-12' alt="" />
                <h3 className='text-white  md:text-2xl mt-1'>Media Buying</h3>
                </div>
                <div className='flex flex-col items-center text-center'>
                <img src={icon4} className='md:w-20 w-12' alt="" />
                <h3 className='text-white  md:text-2xl mt-1'>Live Streaming <br/> Support</h3>
                </div>
                </div>
                <div className=' flex justify-center md:gap-44 gap-4 md:py-20 py-10'>
                <div className='flex flex-col items-center text-center'>
                <img src={icon6} className='md:w-20 w-12' alt="" />
                <h3 className='text-white  md:text-2xl mt-1'>Animation Video</h3>
                </div>
                <div className='flex flex-col items-center text-center'>
                <img src={icon5} className='md:w-20 w-12' alt="" />
                <h3 className='text-white  md:text-2xl mt-1'>Activation</h3>
                </div>
                <div className='flex flex-col items-center text-center'>
                <img src={icon8} className='md:w-20 w-12' alt="" />
                <h3 className='text-white  md:text-2xl mt-1'>Web Development</h3>
                </div>
                <div className='flex flex-col items-center text-center'>
                <img src={icon7} className='md:w-20 w-12' alt="" />
                <h3 className='text-white md:text-2xl mt-1'>Social Media <br/> Marketing</h3>
                </div>
                </div>
            </div>

            <div className="md:h-screen bg-black flex flex-col justify-center items-center py-10">
            <h3 className="md:text-9xl text-3xl text-white uppercase text-center font-black"> 
                Get <br/> best services <br/> for your brand
            </h3>
            <Link to='/contact'><button className="btn btn-active bg-red-700 uppercase text-white md:text-lg md:mt-10 mt-4">start the project <BsFillArrowUpRightCircleFill /></button></Link>
            <p className="text-white uppercase md:text-2xl my-3">or</p>
            <button className="btn btn-outline border-2 border-red-700 text-white uppercase md:text-md">pipeline.alavy@gmail.com <BsFillArrowUpRightCircleFill /></button>
        </div>

        </div>
    );
};

export default Services;