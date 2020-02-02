import React from "react";
// import Header from "./components/Header/Header";
// import Home from './components/Home/Home'

import "./App.css";
import { HashRouter } from "react-router-dom";
import routes from "./routes";

class App extends React.Component {
  constructor() {
    super();
    this.state={}
  }

  render() {
    return (
      <HashRouter>
        <div>
          {/* <Header /> */}
          {routes}
        </div>
      </HashRouter>
    );
  }
}
export default App;
