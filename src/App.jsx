import { Fragment } from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  const userName = "Abdulloh";
  return (
    <Fragment>
      {" "}
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
