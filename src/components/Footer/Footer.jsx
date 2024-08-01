import { Link } from "react-router-dom";
import logo from "../../assets/pipeline.png"
import icon1 from '/icon/linkedin.png'
import icon2 from '/icon/facebook-app.png'
import icon3 from '/icon/youtube.png'

const Footer = () => {
    return (
      <footer className="md:px-20 bg-base-200 text-white p-10">
      <div className="flex justify-between gap-5 items-center mb-5">
      <aside>
        <Link><img src={logo} className="w-24" alt="" /></Link>
        <p className="font-bold mt-3">
        House:8/11, Block: B, Lalmatia, Dhaka-1205. <br/> Office Phone: +8801817609707
        </p>
      </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <Link to='https://www.linkedin.com/company/pipelineorg' target="blank"><img src={icon1} className="w-10" alt="" /></Link>
      <Link to='https://www.facebook.com/pipelinebd' target="blank"><img src={icon2} className="w-10" alt="" /></Link>
      <Link to='https://www.youtube.com/channel/UCQL8YnW1AXCGimknu16UMZQ' target="blank"><img src={icon3} className="w-10" alt="" /></Link>
    </div>
  </nav>
      </div>
      <aside className="text-center text-white">
    <p>Copyright © {new Date().getFullYear()} - All right reserved <Link className="font-bold">AK</Link></p>
  </aside>
</footer>
    );
};

export default Footer;