import React from 'react';
import {HashRouter, Route, Switch } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Layout from "./Layout";
import Home from "./home";

const App=()=>{
  return(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Layout>
          <Route path="/second:id?" component={SecondPage}/>
          <Route exact path="/first" component={FirstPage}/>
          </Layout>
      </Switch>
    </HashRouter>
  );
}

export default App;
