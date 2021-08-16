import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} style={{background: "black"}}/>;
}

export default MyApp;