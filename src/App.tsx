// import StudentInfo from "./componenets/test";
// import StudentCard from "./componenets/studentone";
// import StudentCardTwo from "./componenets/studenttwo";
// import Greetings from "./componenets/greetings";
// import ProfileCard from "./componenets/profilecard";
// import Calculator from "./componenets/Calculator";
// import Passfail from "./componenets/Pasfail";
// import Idcarddetails from "./componenets/Idcarddetails";
// import Bookcarddetails from "./componenets/Bookcarddetails";
// import AlertButton from "./componenets/button";
// import Multibutton from "./componenets/Multibutton";
//import Counter from "./componenets/Counter"
  // import Counter from "./componenets/Counterusestate";
  // import LightSwitch from "./componenets/Toggle";
// import Countswitcher from "./componenets/Countswitcher";
// import Counterapp from "./componenets/Counterapp";
// import Liveinput from "./componenets/Liveinput";
// import LoginInput from "./componenets/Multistates";
// import ScoreTracker from "./componenets/ScoreTracker";
// import LikeToggle from "./componenets/LikeToggle";
// import Charcount from "./componenets/Charcount";
// import NameInput from "./componenets/NameInput";
// import Counter from "./componenets/Counterevents";
// import ConditionalRendering from "./componenets/conditionalrendring";
// import ToggleButton from "./componenets/Togglebutton"
// import Objectmapping from "./componenets/Objectmapping"
// import Pagetitle from  "./componenets/useeffect"
// import SubjectList from "./componenets/SubjectList"
// import FruitSearch from "./componenets/FruitSearch"
import {BrowserRouter, Routes,Route } from "react-router";
// import Apifetch from "./componenets/Apifetch"
import Home from "./componenets/Home"
import Aboutus from "./componenets/Aboutus"
import Contactus from "./componenets/Contactus"
import Navbar from "./componenets/Navbar"
function App() {
  return (
    <>
      {/* <Greetings/>
      <ProfileCard/>
      <Calculator/> 
      <Passfail/> */}
      {/* <Idcarddetails/> */}
      {/* <Bookcarddetails/>
      <AlertButton/>
      <Multibutton/> */}
      {/* <Counter/>
      <LightSwitch/> */}
      {/* <Countswitcher/>
      <Counterapp/>
      <Liveinput/> */}
      {/* <LoginInput/> */}
      {/* <ScoreTracker/>
      <LikeToggle/>
      <Charcount/>
      <NameInput/>
      <Counter/> */}
      {/* <ConditionalRendering/>
      <ToggleButton/>
      <Objectmapping/>
      <Pagetitle/> */}
      {/* <SubjectList/>
      <FruitSearch/> */}
      {/* <Apifetch/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Aboutus/>}></Route>
        <Route path="/contact" element={<Contactus/>}></Route>
      </Routes>
      </BrowserRouter>


    </>   
  )
}
export default App;