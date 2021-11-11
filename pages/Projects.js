import Heads from "./Head";
import PersonalProjects, { ClientsProjects } from "/public/json/Cards";
import ProjectBox from "/public/components/ProjectBox";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const nPersonal = (val, key) => {
  return (
    <>
      <div className="cardPackage" key={key}>
        <ProjectBox title={val.title} image={val.image} link={val.link} />
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
          <Tabs>
            <div className="fixed">
              <h2 className="card-container-heading">Projects</h2>
              <TabList className="tablist">
                <Tab>Top Clients Projects</Tab>
                <Tab>Personal</Tab>
              </TabList>
            </div>

            <div className="projectsTab">
              <TabPanel>
                <div className="project">{ClientsProjects.map(nPersonal)}</div>
              </TabPanel>
              <TabPanel>
                <div className="project">{PersonalProjects.map(nPersonal)}</div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Projects;
