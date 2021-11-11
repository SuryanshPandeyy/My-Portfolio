// import useSWR from "swr";
import { NextSeo } from "next-seo";
import Links from "./Links";
import Footer from "./Footer";
import Head from "next/head";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hiresupa.com/" />
        <meta
          name="description"
          content="Hire Suryansh for Full Stack Web Development {Next.JS, MongoDB}, SEO optimization, Web and UI Design. - HireSuPa"
        />
        <meta
          name="keywords"
          content="HireSuPa, hire, suryansh, portfolio, business, html, css, javascript, react, next, js, php, mongodb, blogs, templates, projects, pallavi, website"
        />
        {/* <meta name="color-scheme" content="dark light" /> */}
        <meta property="fb:admins" content="suryanshpandeyy" />
        <meta property="og:title" content="Suryansh Pandey - HireSuPa" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hiresupa.com/" />
        <meta
          property="og:image"
          content="/public/images/favicons/favicon.ico"
        />
        <meta
          property="og:description"
          content="Hire Suryansh for Full Stack Web Development {Next.JS, MongoDB}, SEO optimization, Web and UI Design. - HireSuPa"
        />
        <link rel="shortcut icon" href="/images/favicons/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicons/mstile-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <NextSeo
        title="Suryansh Pandey - HireSuPa"
        description="Hire Suryansh for Full Stack Web Development {Next.JS, MongoDB}, SEO optimization, Web and UI Design. - HireSuPa"
      />

      <div className="inside circles">
        <Links />
      </div>
      <main>{children}</main>

      <Menu />
      <div className="footerDiv">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
