import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./helper/Nav";
import Intro from "./routes/Intro";
const Family = lazy(() => import("./routes/Family"));
const LocalGroup = lazy(() => import("./routes/LocalGroup"));
const Way = lazy(() => import("./routes/Way"));
const Republic = lazy(() => import("./routes/Republic"));

function App() {
  return (
    <BrowserRouter basename='/demokratieerleben'>
      <div className='App'>
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={Intro} />
            <Route path='/family' component={Family} />
            <Route path='/localgroup' component={LocalGroup} />
            <Route path='/way' component={Way} />
            <Route path='/republic' component={Republic} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
