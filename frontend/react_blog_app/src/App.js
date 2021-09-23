import Home from "./Components/pages/Homepage/Home";
import SinglePost from "./Components/pages/SinglePost/SinglePost";
import Write from "./Components/pages/Write/Write";
import Topbar from "./Components/topbar/Topbar";
function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Home /> */}
      {/* <SinglePost /> */}
      <Write />
    </div>
  );
}

export default App;
