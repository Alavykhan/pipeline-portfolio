import video from '../../assets/demo.mp4'

const HeroSection = () => {
    return (
        <div className='w-full md:h-screen'>
            <video className='object-cover h-full w-full' src={video} autoPlay loop muted ></video>
        </div>
    );
};

export default HeroSection;