import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import CrudPost from "./Containers/CRUD-Post";
import  Login  from './Containers/Login/index';


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/crud-post" element ={<CrudPost/>}/>
      </Routes>
    </Router>

  )
}

export default App
