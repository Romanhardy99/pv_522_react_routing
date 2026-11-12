import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import NavMenu from './Components/NavMenu';
import Home from './Components/Home';
import About from './Components/About';
import Articles from './Components/Articles';
import { Route, Routes, NavLink } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            {/* <NavMenu/> */}
            {/* <Routes>
                <Route path="/"             element={<Home />}      />
                <Route path="about"         element={<About />}     />
                <Route path="articles"      element={<Articles />}  />
            </Routes> */}
            <Routes>
                <Route path="/" element={<NavMenu />} >
                    <Route index                element={ <Home/> }      />
                    <Route path="about"         element={<About /> }     />
                    <Route path="articles"      element={<Articles /> }  />
                </Route>
            </Routes>
            
        </div >
    );
}

export default App;
