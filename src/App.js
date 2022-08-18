import Chat from "./Chat";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Login from "./Login"
import { useStateValue } from "./StateProvider";

function App() {
  const [{user},dispatch]= useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ):(
        <div className="appbody">
        <Router>
            <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
            <Chat />
            </Route>
            <Route path="/">
              {/* <Chat /> */}
            </Route>
          </Switch>
        </Router>
      </div>
      )}
      
    </div>
  );
}

export default App;
