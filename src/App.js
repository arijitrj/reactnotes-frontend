import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NotesList from './components/NotesList';
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navbar/>
        <div >
          <Switch>
            <Route exact path = "/" component ={NotesList}/>
            <Route exact path ="*" component = {NotFound}/>
          </Switch>
        </div>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
