import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,Routes,
  Route, Link} from 'react-router-dom'

import './App.css';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
    <Router>
    <Main/>
 <Footer/>
    </Router>
   
   
    </>
  )
}

export default App;