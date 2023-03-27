import {Routes,Route} from "react-router-dom"
import Layout from "./component/Layout";
import Login from "./component/Login";
import Register from "./component/Register";
import IndexPage from "./page/IndexPage";
import PlacesFormPage from "./page/PlacesFormPage";
import Profile from "./page/Profile";
import "./App.css"
import LayoutOwner from "./component/LayoutOwner";
import SingalPlace from "./page/SingalPlace";
import Dashboard from "./page/Dashboard";
import OwnerPro from "./page/OwnerPro";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getProfileData} from "./services/auth/authSlice"
import Hotel from "./page/Hotel";

function App() {
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getProfileData())
  },[])

  return (
    <div className="">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<IndexPage/>}/>
                <Route path="/place/:id" element={<SingalPlace/>}/>
                <Route path="/signup" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile/:subpage?" element={<Profile/>}/>
                <Route path="/profile/creact" element={<PlacesFormPage/>}/>
            </Route>
            <Route path="/owner" element={<LayoutOwner/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="/owner/hotel" element={<Hotel/>}/>
              <Route path="/owner/add" element={<PlacesFormPage/>}/>
              <Route path="/owner/user" element={<OwnerPro/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
