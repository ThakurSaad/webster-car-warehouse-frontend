import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import Header from "./Home/Header/Header";
import Home from "./Home/Home/Home";
import Register from "./Login/Register/Register";
import NotFound from "./NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login/Login/Login";
import RequireAuth from "./Login/RequireAuth/RequireAuth";
import UpdateInventoryDetail from "./Pages/UpdateInventoryDetail/UpdateInventoryDetail";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import AddNewCar from "./Pages/AddNewCar/AddNewCar";
import MyCars from "./Pages/MyCars/MyCars";
import AddMyCar from "./Pages/AddMyCar/AddMyCar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/updateinventorydetail/:inventoryId"
          element={
            <RequireAuth>
              <UpdateInventoryDetail></UpdateInventoryDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/addnewcar" element={<AddNewCar></AddNewCar>}></Route>
        <Route
          path="/mycars"
          element={
            <RequireAuth>
              <MyCars></MyCars>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addmycars/:addmycarsId"
          element={
            <RequireAuth>
              <AddMyCar></AddMyCar>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
