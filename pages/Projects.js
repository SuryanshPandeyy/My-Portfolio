import Heads from "./Head";
import PersonalProjects, { ClientsProjects } from "/public/components/Cards";
import ProjectBox from "/public/components/ProjectBox";
const nPersonal = (val, key) => {
  return (
    <>
      <div className="cardPackage" key={key}>
        <ProjectBox title={val.title} image={val.image} />
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <Heads title="Suryansh Pandey - HireSupa: Projects" />
      <div className="suryansh_portfolio" id="body">
        <div id="projects" className="projects">
          <h2 className="card-container-heading">Projects</h2>
          <br />
          <div className="project">{PersonalProjects.map(nPersonal)}</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
