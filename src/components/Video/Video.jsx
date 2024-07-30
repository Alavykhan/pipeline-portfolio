import { Link } from "react-router-dom";
import './video.css';
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
const Video = ({video}) => {
    const {name, img, company, videoY} = video
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="zoom-container">
              <Link to={`${videoY}`} target="blank"> <img 
                src={img}
                alt="pipeline-poster"/></Link>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                </h2>
                <p>{company}</p>
                <div className="card-actions justify-end">
                <Link to={`${videoY}`} target="blank"><button className="btn btn-outline text-lg ">Watch Now <BsFillArrowUpRightCircleFill /></button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Video;