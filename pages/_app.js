import "/styles/globals.css";
import "/styles/admin.css";
import { SessionProvider } from "next-auth/react";

// Import Swiper styles

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import Layout from "./Layout";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider  session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
