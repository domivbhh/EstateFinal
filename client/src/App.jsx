import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>

    </Routes>
  </BrowserRouter>


    

}

export default App
