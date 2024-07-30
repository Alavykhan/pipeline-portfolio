import Marquee from "react-fast-marquee";

const TextAnimi = () => {
    return (
        <Marquee speed={100} className="bg-red-700 md:py-16 ">
        <p className="text-9xl font-extrabold uppercase text-white mx-5 ">we are team pipeline</p>
        <p className="text-9xl font-extrabold uppercase text-white mx-5">we are team pipeline</p>
        </Marquee>
    );
};

export default TextAnimi;