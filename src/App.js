import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import Header from "./Home/Header/Header";
import Home from "./Home/Home/Home";
import Register from "./Login/Register/Register";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
