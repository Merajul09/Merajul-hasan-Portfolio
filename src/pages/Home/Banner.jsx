import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      id="home"
      className="md:h-screen md:flex items-center justify-center gap-10 bg-black text-white md:w-10/12 mx-auto"
    >
      <div className="md:w-5/12">
        <img
          data-aos="zoom-in"
          className="h-72 w-72 rounded-full border-2 p-2 border-white md:ml-20"
          src={profile}
          alt=""
        />
      </div>
      <div className="md:w-7/12">
        <h1
          data-aos="fade-left"
          className="name text-3xl mt-8 md:mt-0 md:text-5xl font-bold"
        >
          Merajul Hasan
        </h1>
        <div className="my-3 text-yellow-600 text-xs md:text-5xl font-semibold">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "MERN-Stack Developer",
              "Front-End Developer",
              "JavaScript Developer",
              "React Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p data-aos="fade-left" className="md:w-10/12 mb-5">
          Passionate about MERN development, I thrive on pushing boundaries,
          embracing challenges, and delivering cutting-edge solutions that
          exceed expectations.
        </p>
        <div data-aos="fade-up" className="flex gap-8">
          <Link to="https://www.facebook.com/merajulhasan09/">
            <FaFacebook className="text-3xl hover:text-yellow-600 transition duration-300"></FaFacebook>
          </Link>
          <Link to="https://www.linkedin.com/in/merajulhasan09/">
            <FaLinkedin className="text-3xl hover:text-yellow-600 transition duration-300"></FaLinkedin>
          </Link>
          <Link to="https://github.com/Merajul09">
            <FaGithub className="text-3xl hover:text-yellow-600 transition duration-300"></FaGithub>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
