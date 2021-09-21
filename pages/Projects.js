import Image from "next/image";
import Link from "next/link";
// import Suryansh from './Suryansh';
import Links from "./Links";
import PersonalProjects, { ClientsProjects } from "/public/components/Cards";
import ProjectBox from "/public/components/ProjectBox";
const nPersonal = (val, key) => {
  return (
    <>
      <div className="cardPackage" key={key}>
        <ProjectBox
          title={val.title}
          image={val.image}
        />
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <div className="suryansh_portfolio" id="body">
        <div id="projects" className="projects">
          <div className="inside circles">
            <Links/>
          </div>
          <h2 className="card-container-heading">Projects</h2>
          <br />
          <div className="project">
            {PersonalProjects.map(nPersonal)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
