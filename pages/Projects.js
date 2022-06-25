import React from "react";
import Heads from "/public/components/Head";
import PersonalProjects, { ClientsProjects } from "/public/json/Cards";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";
import Button from "@material-ui/core/Button";
const myLoader = ({ src, width, quality }) => {
  return `${src}?width=${width}&quality=${quality}`;
};

const nPersonal = (val, i) => {
  return (
    <div className="packageCard" key={i}>
      <div className="packageBlocker"></div>
      <div className="CardImg">
        <Image
          className="cardimg"
          loader={myLoader}
          src={val.image}
          alt={val.image}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="Carddetails">
        <div className="Cardtitle">{val.title}</div>
        <div className="view">
          <Button href={val.link} target="blank">
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <React.Fragment>
      <Heads title="Suryansh Pandey - HireSupa: Projects" />
      <div className="suryansh_portfolio" id="body">
        <div id="projects" className="projects">
          <Tabs>
            <div className="fixed">
              {/* <h3>Projects</h3> */}
              <br />
              <TabList className="tablist">
                <Tab>Independent Projects</Tab>
                <Tab>Clone Projects</Tab>
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
    </React.Fragment>
  );
};

export default Projects;
