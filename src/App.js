import { useContext } from "react";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Route, Routes } from "react-router-dom";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
function App() {
  const { user } = useContext(Context);
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="register" index element={user ? <Home /> : <Register />} />
        <Route path="login" index element={user ? <Home /> : <Login />} />
        <Route path="write" index element={user ? <Write /> : <Register />} />
        <Route path="about" index element={<About />} />
        <Route path="contact" index element={<Contact />} />
        <Route
          path="settings"
          index
          element={user ? <Settings /> : <Register />}
        />
        <Route path="post/:postId" index element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
