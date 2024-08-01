import video from '../../assets/showreel.mp4'

const HeroSection = () => {
    return (
        <div className='w-full md:h-screen '>
            <video className='object-cover h-full w-full' src={video} autoPlay loop muted ></video>
            <div className='absolute w-full h-2/5 md:h-full  top-0 flex justify-center text-center items-center text-white md:text-9xl text-3xl uppercase font-bold bg-gradient-to-r from-[rgba(50, 50, 50, 50)] to-[rgba(21, 21, 21, 0)] md:top-20'>
                <h1>Welcome to <br/> <span className='text-red-700'>team Pipeline</span></h1>
            </div>
        </div>
    );
};

export default HeroSection;