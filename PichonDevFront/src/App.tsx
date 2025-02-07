import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import  Login  from './Containers/Login/index';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/login" element ={<Login/>}/>
      </Routes>
    </Router>

  )
}

export default App
