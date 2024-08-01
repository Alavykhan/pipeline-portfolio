import { useEffect, useState } from 'react';
import cover from '/images/pipeline-cover.png'
import Video from '../Video/Video';
const Work = () => {

        const [videos, setVideos] = useState([]);
       
        useEffect(()=>{
            fetch('/work.json')
            .then(res=>res.json())
            .then(data=>setVideos(data))
        },[]);

    return (
        <div>
            <img src={cover} alt="" />
            <div className='px-20'>
            <h1 className='text-black md:text-5xl text-2xl my-5 font-semibold text-center'>Featured <span className='text-red-700'>Work</span></h1>
            <div className="grid md:grid-cols-2 md:gap-y-16 gap-y-5 gap-x-8 md:my-12">
                {
                    videos.map(video=><Video
                    key={video.id}
                    video={video}></Video>)
                }
            </div>
            </div>
        </div>
    );
};

export default Work;