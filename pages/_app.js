import "/styles/globals.css";
import "/styles/admin.css";
import { Provider } from "next-auth/client";
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
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
