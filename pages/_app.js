import React from "react";
import "../scss/style.scss";
function MyApp({ Component, pageProps }) {
  return <React.StrictMode>
    <Component {...pageProps} />
  </React.StrictMode>;
}

export default MyApp;
