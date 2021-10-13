import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Heads from "./Head";
import PersonalProjects, { ClientsProjects } from "/public/json/Cards";
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
          <Tabs>
            <TabList className="tablist">
              <Tab>Personal</Tab>
              <Tab>Top Clients Projects</Tab>
            </TabList>

            <div className="projects">
              <TabPanel>
                <div className="project">{PersonalProjects.map(nPersonal)}</div>
              </TabPanel>
              <TabPanel>a</TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Projects;
