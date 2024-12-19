import SectionTitle from "../../components/Shared/SectionTitle";
import programmer from "../../assets/programmer.png";

const About = () => {
  return (
    <div id="about" className="pt-8">
      <SectionTitle title="About" subtitle="Me" />
      <div className="text-white flex flex-col md:flex-row items-center gap-14">
        {/* About Description */}
        <div className="md:w-7/12 space-y-6" data-aos="fade-right">
          <p className="text-justify">
            I’m Merajul Hasan, a React developer passionate about crafting
            dynamic web applications. Currently, I’m exploring advanced Node.js
            to build impactful, full-stack software solutions. I enjoy learning
            new technologies, contributing to meaningful projects, and solving
            challenging problems. Let’s create something amazing together!
          </p>
          <div className="flex items-center gap-2">
            <div className="w-3/5 space-y-3 flex flex-col">
              <h1 className="text-3xl font-semibold text-yellow-600">Myself</h1>
              <p>Name: Merajul Hasan</p>
              <p>Languages: Bangla, English, Hindi</p>
              <a
                href="https://drive.google.com/file/d/1iLfIVrQN9ijrwiUvN3SvV05uZhuZvKob/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white w-max text-black font-semibold p-3 px-5 rounded hover:bg-yellow-600 hover:text-white transition"
              >
                Download My Resume
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 w-2/5">
              {[
                { count: "1+", label: "Years of Experience" },
                { count: "5+", label: "Complete Projects", round: "true" },
                { count: "12+", label: "Months of Experience", round: "true" },
                { count: "3+", label: "Happy Projects" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`text-center p-4 border-2 border-yellow-600 ${
                    item.round ? "" : "rounded-full"
                  }`}
                >
                  <h1 className="text-4xl font-bold text-yellow-600">
                    {item.count}
                  </h1>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-5/12">
          <img
            data-aos="fade-left"
            src={programmer}
            alt="Programmer"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
