import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,Routes,
  Route, Link} from 'react-router-dom'

import './App.css';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Main/>
 <Footer/>
    </Router>
   
   
    </>
  )
}

export default App;