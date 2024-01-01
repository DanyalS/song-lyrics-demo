import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import SongLyrics from "./components/SongLyrics";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/song-lyrics" component={SongLyrics} /> 
    </Switch>
  </Router>,
  document.getElementById("root")
);
 