import './App.css';
import Header from './Components/Header';
import About from './Pages/About ';
import Home from './Pages/Home';
import SignIn from './Pages/Sign In';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
