import Marquee from "react-fast-marquee";

import logo1 from '../../../public/client/actionaid.png'
import logo2 from '../../../public/client/bill.png'
import logo3 from '../../../public/client/british.png'
import logo4 from '../../../public/client/eu.png'
import logo5 from '../../../public/client/gov.png'
import logo6 from '../../../public/client/ict.png'
import logo7 from '../../../public/client/JHC.png'
import logo8 from '../../../public/client/jica.png'
import logo9 from '../../../public/client/p4d.png'
import logo10 from '../../../public/client/pa.png'
import logo11 from '../../../public/client/pouroshoba.png'
import logo12 from '../../../public/client/ulab.png'
import logo13 from '../../../public/client/us-aid.png'
import logo14 from '../../../public/client/wateraid.png'
import logo15 from '../../../public/client/wf.png'
import logo16 from '../../../public/client/wv.png'

const Clients = () => {
    return (
        <div className="mt-20 px-20">
            <h2 className="md:text-5xl text-center font-semibold text-black mb-12">Our <span className="text-red-700">Clients</span></h2>
        <Marquee speed={100}>
        <img className="mx-1 w-2/4" src={logo1} alt="" />
        <img className="mx-1 w-2/4" src={logo2} alt="" />
        <img className="mx-1 w-2/4" src={logo3} alt="" />
        <img className="mx-1 w-2/4" src={logo4} alt="" />
        <img className="mx-1 w-2/4" src={logo5} alt="" />
        <img className="mx-1 w-2/4" src={logo6} alt="" />
        <img className="mx-1 w-2/4" src={logo7} alt="" />
        <img className="mx-1 w-2/4" src={logo8} alt="" />
        <img className="mx-1 w-2/4" src={logo9} alt="" />
        <img className="mx-1 w-2/4" src={logo10} alt="" />
        <img className="mx-1 w-2/4" src={logo11} alt="" />
        <img className="mx-1 w-2/4" src={logo12} alt="" />
        <img className="mx-1 w-2/4" src={logo13} alt="" />
        <img className="mx-1 w-2/4" src={logo14} alt="" />
        <img className="mx-1 w-2/4" src={logo15} alt="" />
        <img className="mx-1 w-2/4" src={logo16} alt="" />
        </Marquee>
        </div>
    );
};

export default Clients;