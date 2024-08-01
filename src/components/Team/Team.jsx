import cover from '/images/pipeline-cover.png'
import joy from '/team/joy.jpg'
import rabbi from '/team/rabbi.jpg'
import alavy from '/team/alavy khan.jpg'
import tanvir from '/team/tanvir.jpg'
import sakib from '/team/sakib.jpg'
import brinto from '/team/brinto.jpg'
import shohag from '/team/shohag.jpg'
import ismail from '/team/ismail.jpg'
import pial from '/team/pial.jpg'
import dipu from '/team/dipu.jpg'

const Team = () => {
    return (
        <div className='mb-5'>
            <img src={cover} alt="" />
            <div className='md:px-20 px-5'>
            <h1 className='text-black md:text-5xl text-2xl my-5 font-semibold text-center md:mb-10'>Team <span className='text-red-700'>Pipeline</span></h1>


          <div className='flex justify-center md:my-8'>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src={joy}
                alt="joy" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">SauraJoy Chowdhury</h2>
                <p className='font-semibold'>CEO</p>
                <p>pipeline.joy@gmail.com</p>
            </div>
            </div>
          </div>


        <div className='grid md:grid-cols-4 gap-5 justify-center md:my-8'>
            <div></div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
            <figure>
                <img
                src={rabbi}
                alt="rabbi" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">Toufiqul Islam Khan</h2>
                <p className='font-semibold'>Production Director</p>
                <p>pipeline.rabbi@gmail.com</p>
            </div>
            </div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
            <figure>
                <img
                src={alavy}
                alt="alavy" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">Alavy Khan</h2>
                <p className='font-semibold'>Sr. Communication Manager</p>
                <p>pipeline.alavy@gmail.com</p>
            </div>
            </div>
                <div></div>
        </div>


                <div className='grid md:grid-cols-3 gap-5 justify-center md:my-8'>
                <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
            <figure>
                <img
                src={tanvir}
                alt="tanvir" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">Tanvir Ahmed</h2>
                <p className='font-semibold'>Director of Photograph</p>
                <p>pipeline.tanvir@gmail.com</p>
            </div>
            </div>

            <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
            <figure>
                <img
                src={sakib}
                alt="sakib" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">MD Nazmul Rahaman Sakib</h2>
                <p className='font-semibold'>Chief Asst. Director</p>
                <p>pipeline.sakib@gmail.com</p>
            </div>
            </div>

            <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
            <figure>
                <img
                src={brinto}
                alt="brinto" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">Lohitto Kabir Brinto</h2>
                <p className='font-semibold'>Executive Editor</p>
                <p>pipeline.brinto13@gmail.com</p>
            </div>
            </div>
                </div>



                <div className='grid md:grid-cols-4 gap-5 justify-center md:my-8'>

                <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
            <figure>
                <img
                src={shohag}
                alt="Shohag" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">Shohag Chowdhury</h2>
                <p className='font-semibold'>Cinematographer</p>
                <p>pipeline.shohag@gmail.com</p>
            </div>
            </div>

            <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
            <figure>
                <img
                src={ismail}
                alt="Ismail" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">Ismail Hossain</h2>
                <p className='font-semibold'>Video Editor & Colorist</p>
                <p>pipeline.ismail@gmail.com</p>
            </div>
            </div>

            <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
            <figure>
                <img
                src={pial}
                alt="pial" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">Shahed Pial</h2>
                <p className='font-semibold'>Post Production Director</p>
                <p>pipeline.pial@gmail.com</p>
            </div>
            </div>

            <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
            <figure>
                <img
                src={dipu}
                alt="dipu" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">Dipu Kumer Dey</h2>
                <p className='font-semibold'>Post Production Coordinator</p>
                <p>pipeline.dipu@gmail.com</p>
            </div>
            </div>
                </div>

            </div>
        </div>
    );
};

export default Team;