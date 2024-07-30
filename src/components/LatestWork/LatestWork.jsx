import { useEffect, useState } from "react";
import Video from "../Video/Video";

const LatestWork = () => {
    const [videos, setVideos] = useState([]);
   
    useEffect(()=>{
        fetch('/work.json')
        .then(res=>res.json())
        .then(data=>setVideos(data))
    },[]);

    return (
        <div className="md:mt-20 px-20">
            <h2 className="md:text-6xl font-semibold text-white">Latest Work</h2>
            <div className="grid md:grid-cols-2 md:gap-y-16 gap-y-5 gap-x-8 md:mt-12">
                {
                    videos.map(video=><Video
                    key={video.id}
                    video={video}></Video>)
                }
            </div>
        </div>
    );
};

export default LatestWork;