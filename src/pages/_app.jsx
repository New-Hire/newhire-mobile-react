import React from "react";
import GlobalLayouts from "../layouts/global";

function App({ Component, pageProps }) {
  const display = ["LoginPage"].indexOf(Component.name) < 0;
  return (
    <React.Fragment>
      {display ? (
        <GlobalLayouts>
          <Component {...pageProps} />
        </GlobalLayouts>
      ) : (
        <Component {...pageProps} />
      )}
    </React.Fragment>
  );
}

export default App;
