import { useEffect } from "react";
import Banner from "./Banner";
import About from "./About";
import MySkills from "./MySkills";
import GetInTouch from "./GetInTouch";
// import { ScrollContainer } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="bg-black px-5 md:px-14">
            <Banner></Banner>
            <About></About>
            <MySkills></MySkills>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;