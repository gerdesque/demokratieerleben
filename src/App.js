import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./helper/Nav";
const Intro = lazy(() => import("./routes/Intro"));
const Family = lazy(() => import("./routes/Family"));
const LocalGroup = lazy(() => import("./routes/LocalGroup"));
const Way = lazy(() => import("./routes/Way"));
const Republic = lazy(() => import("./routes/Republic"));
const Children = lazy(() => import("./routes/Children"));
const Routine = lazy(() => import("./routes/Routine"));
const Food = lazy(() => import("./routes/Food"));
const Imprint = lazy(() => import("./routes/Imprint"));

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
            <Route path='/children' component={Children} />
            <Route path='/routine' component={Routine} />
            <Route path='/food' component={Food} />
            <Route path='/imprint' component={Imprint} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
