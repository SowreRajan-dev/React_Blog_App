import Home from "./Components/pages/Homepage/Home";
import Login from "./Components/pages/Login/Login";
import Register from "./Components/pages/Register/Register";
import Settings from "./Components/pages/Settings/Settings";
import SinglePost from "./Components/pages/SinglePost/SinglePost";
import Write from "./Components/pages/Write/Write";
import Topbar from "./Components/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const currentUser = false;
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
          <Route path="/register">
            {currentUser ? <Home /> : <Register />}
          </Route>
          <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
          <Route path="/post/:id">
            <SinglePost />
          </Route>
          <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
          <Route path="/settings">
            {currentUser ? <Settings /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
