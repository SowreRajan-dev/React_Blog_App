import Home from "./Components/pages/Homepage/Home";
import Login from "./Components/pages/Login/Login";
import Register from "./Components/pages/Register/Register";
import Settings from "./Components/pages/Settings/Settings";
import SinglePost from "./Components/pages/SinglePost/SinglePost";
import Write from "./Components/pages/Write/Write";
import Topbar from "./Components/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  useEffect(() => {
    document.title = "BlogB";
  });
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Home />
          </Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/post/:id">
            <SinglePost />
          </Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
