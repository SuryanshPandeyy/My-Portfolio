import React from "react";
import Heads from "./Head";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Business from "/public/components/Templates/Business";
import TemplateBox from "/public/components/TemplateBox";

const nBusiness = (val, key) => {
  return (
    <>
      <div className="cardPackage" key={key}>
        <TemplateBox title={val.title} image={val.image} />
      </div>
    </>
  );
};

const Templates = () => {
  return (
    <>
      <Heads title="Templates" />
      <div className="suryansh_portfolio" id="body">
        <div id="templates">
          <h2 className="card-container-heading">Website Templates</h2>
          <div id="shape">
            <Tabs>
              <TabList className="tablist">
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
                <Tab>Title 3</Tab>
                <Tab>Title 4</Tab>
              </TabList>

              <div className="templates">
                <TabPanel>
                  <div className="cardPackage">{Business.map(nBusiness)}</div>
                </TabPanel>
                <TabPanel>
                  <div className="cardPackage">
                    <div className="packageCard">
                      <h1 className="title">Comming Soon 2</h1>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="cardPackage">
                    <div className="packageCard">
                      <h1 className="title">Comming Soon 3</h1>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="cardPackage">
                    <div className="packageCard">
                      <h1 className="title">Comming Soon 4</h1>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="cardPackage">
                    <div className="packageCard">
                      <h1 className="title">Comming Soon 5</h1>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
