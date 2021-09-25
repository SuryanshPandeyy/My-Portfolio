import React from "react";
import Heads from "./Head";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Business from "/public/json/Templates/Business";
import Portfolio from "/public/json/Templates/Portfolio";
import Blogs from "/public/json/Templates/Blogs";
import Landing from "/public/json/Templates/Landing";
import TemplateBox from "/public/components/TemplateBox";

const nTemplate = (val, key) => {
  return (
    <>
      <div className="cardPackage" key={key}>
        <TemplateBox id={val.id} title={val.title} desc={val.desc} image={val.image} price1={val.price1} price2={val.price2} price3={val.price3} price4={val.price4} price5={val.price5} price6={val.price6} />
      </div>
    </>
  );
};

const Templates = () => {
  return (
    <>
      <Heads title="Suryansh Pandey - HireSupa: Templates" />
      <div className="suryansh_portfolio" id="body">
        <div id="templates">
          <h2 className="card-container-heading">Website Templates</h2>
          <div id="shape">
            <Tabs>
              <TabList className="tablist">
                <Tab>Business</Tab>
                <Tab>Portfolio</Tab>
                <Tab>Blogs</Tab>
                <Tab>Landing Page</Tab>
              </TabList>

              <div className="templates">
                <TabPanel>
                  <div className="cardPackage">{Business.map(nTemplate)}</div>
                </TabPanel>
                <TabPanel>
                  <div className="cardPackage">{Portfolio.map(nTemplate)}</div>
                </TabPanel>
                <TabPanel>
                  <div className="cardPackage">{Blogs.map(nTemplate)}</div>
                </TabPanel>
                <TabPanel>
                  <div className="cardPackage">{Landing.map(nTemplate)}</div>
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
