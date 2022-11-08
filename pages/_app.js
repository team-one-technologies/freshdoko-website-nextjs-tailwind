import "../styles/globals.css";
import MainLayout from "../components/layout/MainLayout";
function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
