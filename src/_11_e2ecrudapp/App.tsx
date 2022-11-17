import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Post } from "./pages/post/Post";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
