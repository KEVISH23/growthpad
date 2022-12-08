import BeforeLoginHomePage from "./components/BeforeLoginHomePage";
import Login from "./components/Login";
import HomeForAll from "./components/HomeForAll";
import Signup from "./components/Signup";
// import Home from "./components/Teacher/Home";
import Home from "./components/Student/Home";
function App() {
  return (
    <>
    {/* <HomeForAll/> */}
    <BeforeLoginHomePage/>
      {/* <Login title="GrowthPad" details={[]}/> */}
      {/* <Signup/>  */}
      {/* <Home/> */}
      {/* <Home title="GrowthPad"/> */}
    </>
  );
}

export default App;
