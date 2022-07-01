import React from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";

import { Header, Categories, Footer, ScrollToTop } from "./components";

import { Home, ItemPage } from "./pages";

import { Item1, Item2, Item3, Item4 } from "./pages";

function App() {
  // const [items, setItems] = React.useState([]);

  // React.useEffect(() => {
  // fetch("/items.json")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     setItems(json);
  //   });
  // console.log(items);

  // async function fetchAsync() {
  //   const response = await fetch("/items.json");
  //   const data = await response.json();
  //   await setItems(data);
  //   await console.log(items);
  // }
  // fetchAsync();

  //   axios.get("/items.json").then((response) => {
  //     setItems(response.data);
  //   });
  // }, []);

  return (
    <div className="App" id="top">
      <Header />
      <Categories />
      <Routes>
        <Route path="/" element={<Home />} exact />
        {/* <Route path="/item" element={<ItemPage />} exact /> */}
        <Route path="/item1" element={<Item1 />} exact />
        <Route path="/item2" element={<Item2 />} exact />
        <Route path="/item3" element={<Item3 />} exact />
        <Route path="/item4" element={<Item4 />} exact />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
