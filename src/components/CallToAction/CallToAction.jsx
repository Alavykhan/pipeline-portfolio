import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <div className="md:h-screen bg-red-700 flex flex-col justify-center items-center py-10">
            <h3 className="md:text-9xl text-3xl text-white uppercase text-center font-black"> 
                ready <br/> to start <br/> the project?
            </h3>
            <Link to='contact'><button className="btn btn-active uppercase text-white md:text-lg md:mt-10 mt-4">start the project <BsFillArrowUpRightCircleFill /></button></Link>
            <p className="text-white uppercase md:text-2xl my-3">or</p>
            <button className="btn btn-outline border-2 border-black text-white uppercase md:text-md">pipeline.alavy@gmail.com <BsFillArrowUpRightCircleFill /></button>
        </div>
    );
};

export default CallToAction;