import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      {/* 👇 Starting to do routing here (all elements inside can access internally defined `Routes`) */}
      <Router>
        {/* Component have access internally to defined `Routes` */}
        <NavBar />

        {/* Define all routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<AnyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

// NavBar component
const NavBar = (): JSX.Element => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

// Other components
const Home = (): JSX.Element => <h1>Home page</h1>;
const Menu = (): JSX.Element => <h1>Menu page</h1>;
const Contact = (): JSX.Element => <h1>Contact page</h1>;
const AnyPage = (): JSX.Element => <h1>Page not found 404</h1>;

export default App;
