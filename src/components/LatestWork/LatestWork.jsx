import { useEffect, useState } from "react";
import Video from "../Video/Video";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const LatestWork = () => {
    const [videos, setVideos] = useState([]);
   
    useEffect(()=>{
        fetch('/work.json')
        .then(res=>res.json())
        .then(data=>setVideos(data))
    },[]);

    return (
        <div className="md:mt-20 px-20 bg-white">
            <h2 className="md:text-5xl font-semibold text-black">Latest <span className="text-red-700">Work</span></h2>
            <div className="grid md:grid-cols-2 md:gap-y-16 gap-y-5 gap-x-8 md:mt-12">
                {
                    videos.map(video=><Video
                    key={video.id}
                    video={video}></Video>)
                }
            </div>
            <div className="text-center mt-10">
            <Link to=''><button className="btn text-white bg-red-700 text-lg">See More <BsFillArrowUpRightCircleFill /></button></Link>
            </div>
        </div>
    );
};

export default LatestWork;