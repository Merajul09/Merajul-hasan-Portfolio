import SectionTitle from "../../components/Shared/SectionTitle";

const Projects = () => {
    //     const [projects, setProjects] = useState([]);
    //   const [selectedProject, setSelectedProject] = useState(null);

    //   const openModal = (project) => {
    //     setSelectedProject(project);
    //   };

    //   const closeModal = () => {
    //     setSelectedProject(null);
    //   };

    return (
        <div id="portfolio" className="py-8">
            <div>
                <SectionTitle title='Portfolio'></SectionTitle>
            </div>
            <p className="text-white">projects coming soon...</p>
            <div>
                {/* <div className="grid md:grid-cols-3 gap-5">
        {projects.map(project => (
          <div
            data-aos="zoom-in-left"
            key={project._id}
            className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 hover:scale-90 transform transition-all duration-300 cursor-pointer"
            onClick={() => openModal(project)}
          >
            {/* Image */}
                {/*  <figure className="relative">
              <img
                src={project.image}
                alt="card image"
                className="aspect-video w-full h-72"
              />
              <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 p-6 text-white">
                <h3 className="text-lg font-medium bg-slate-900 px-3 inline-block rounded-sm">{project.name}</h3>
                <p className="text-sm opacity-75">{project.short_description.slice(0, 40)}....</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
      {/* Modal */}
                {/* {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black text-white rounded p-8  w-7/12">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img src={selectedProject.image} alt="" />
                <div className='flex gap-4 mt-4'>
                  <Link title="Live link" to={selectedProject.live_link}><FaLink className=' border p-2 rounded-full text-4xl hover:text-yellow-600 transition duration-300'></FaLink></Link>
                  <Link title="github client" to={selectedProject.github_client_link}><AiFillGithub className=' border p-1 rounded-full text-4xl hover:text-yellow-600 transition duration-300'></AiFillGithub></Link>
                  <Link title="github server" to={selectedProject.github_server_link}><AiFillGithub className=' border p-1 rounded-full text-4xl hover:text-yellow-600 transition duration-300'></AiFillGithub></Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">{selectedProject.name}</h2>
                <p className="text-sm opacity-75 mb-2">{selectedProject.short_description}</p>
                {
                  selectedProject.technology_used.map(technology => <p className="text-sm border inline-block px-2 m-2 rounded-full">{technology}</p>)
                }
                {
                  selectedProject.top_features.map((feature, index) => <p className="text-sm mt-2">{index + 1}. {feature}</p>)
                }
              </div>
            </div>
            <button
              className="btn-sm bg-white text-black mt-5 font-semibold p-3 px-5 rounded hover:bg-yellow-600 hover:text-white transition duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
            </div>
        </div>
    )
};

export default Projects;