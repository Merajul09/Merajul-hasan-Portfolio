import SectionTitle from "../../components/Shared/SectionTitle";
import programmer from "../../assets/programmer.jpg";

const About = () => {
  return (
    <div id="about" className="pt-8">
      <SectionTitle title="About" subtitle="Me"></SectionTitle>
      <div className="text-white md:flex justify-center items-center gap-14">
        <div data-aos="fade-right" className="md:w-7/12">
          <p className="text-justify">
            I’m Merajul Hasan, a React developer passionate about crafting
            dynamic web applications that offer seamless user experiences.
            Currently, I’m diving deeper into advanced Node.js to expand my
            backend expertise and create impactful, full-stack software
            solutions. I thrive on learning new technologies, contributing to
            meaningful projects, and solving challenging problems. Let’s build
            something amazing together!
          </p>
          <div className="md:flex gap-4 mt-6">
            <div className="md:w-7/12 space-y-3">
              <h1 className="text-3xl font-semibold text-yellow-600">Myself</h1>
              <p>Name: Merajul Hasan</p>
              {/* <p>Education: Diploma in Food Science</p> */}
              <p>Language: Bangla, English, Hindi</p>
              <a
                href={
                  "https://drive.google.com/file/d/15HyJ8cRiC8ckrkR34sPqSxGti7XtvFH_/view?usp=sharing"
                }
                target="_blank"
                download="Resume - Merajul Hasan"
              >
                <button className="btn bg-white text-black font-semibold p-3 px-5 rounded mt-6 hover:bg-yellow-600 hover:text-white transition duration-300">
                  Download My Resume
                </button>
              </a>
            </div>
            <div className="md:w-5/12 mt-8 grid grid-cols-2 gap-4">
              <div className=" text-center p-4 border-2 border-yellow-600 rounded-full">
                <h1 className="text-4xl font-bold text-yellow-600">1+</h1>
                <p>Years of Experience</p>
              </div>
              <div className="text-center p-4 border-2 border-yellow-600">
                <h1 className="text-4xl font-bold text-yellow-600">5+</h1>
                <p>Complete Projects</p>
              </div>
              <div className="text-center p-4 border-2 border-yellow-600">
                <h1 className="text-4xl font-bold text-yellow-600">12+</h1>
                <p>Month of Professional Experience</p>
              </div>
              <div className="text-center p-4 border-2 border-yellow-600 rounded-full">
                <h1 className="text-4xl font-bold text-yellow-600">3+</h1>
                <p>Happy Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-5/12">
          <img data-aos="fade-left" src={programmer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
