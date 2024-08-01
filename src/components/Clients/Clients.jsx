import Marquee from "react-fast-marquee";

import logo1 from '/client/actionaid.png'
import logo2 from '/client/bill.png'
import logo3 from '/client/british.png'
import logo4 from '/client/eu.png'
import logo5 from '/client/gov.png'
import logo6 from '/client/ict.png'
import logo7 from '/client/JHC.png'
import logo8 from '/client/jica.png'
import logo9 from '/client/p4d.png'
import logo10 from '/client/pa.png'
import logo11 from '/client/pouroshoba.png'
import logo12 from '/client/ulab.png'
import logo13 from '/client/us-aid.png'
import logo14 from '/client/wateraid.png'
import logo15 from '/client/wf.png'
import logo16 from '/client/wv.png'

const Clients = () => {
    return (
        <div className="md:my-20 my-10 md:px-20 px-5">
            <h2 className="md:text-5xl text-center font-semibold text-black mb-12">Our <span className="text-red-700">Clients</span></h2>
        <Marquee speed={100}>
        <img className=" w-1/4 md:w-2/4" src={logo1} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo2} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo3} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo4} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo5} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo6} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo7} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo8} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo9} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo10} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo11} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo12} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo13} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo14} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo15} alt="" />
        <img className=" w-1/4 md:w-2/4" src={logo16} alt="" />
        </Marquee>
        </div>
    );
};

export default Clients;