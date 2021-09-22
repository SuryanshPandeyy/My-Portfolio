// import useSWR from "swr";
import Links from "./Links";
import Footer from "./Footer";
import Head from 'next/head';

const Layout = ({ children }) => {

  return (
    <>
      <div className="inside circles">
        <Links />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
