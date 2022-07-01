import React from "react";
import "./scss/App.scss";

import ScrollToTop from './components/ScrollToTop' 

import { Home, ItemPage} from "./pages";

function App() {
  return (
    <div className="App" id="top">
      <Home />
      {/* <ItemPage /> */}
      <ScrollToTop />
    </div>
  );
}

export default App;
