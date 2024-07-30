import Clients from "../Clients/Clients";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../HeroSection/HeroSection";
import LatestWork from "../LatestWork/LatestWork";
import TextAnimi from "../TextAnimi/TextAnimi";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <TextAnimi/>
            <LatestWork/>
            <Gallery/>
            <Clients/>
        </div>
    );
};

export default Home;