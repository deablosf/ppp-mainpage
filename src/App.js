import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <div>
      <header className="App-header">
        <div className="linkin">
        <h1>S & B</h1>
          <div className="topLinks"><Link to="/blog">BLOG</Link></div>
          <div className="topLinks"><Link to="/projects">PROJECT: Powerpunk</Link></div>
          <div className="topLinks"><Link to="/about">ABOUT</Link></div>
        </div>

        </header>
        <div className="title">

        </div>
         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
         <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route> 
        </Switch> 
      </div>
    </Router>
 
    <div className="footer">
    <p> <a className="footerLinks" href="">powered by puppyrecipe</a></p>
            <p><a className="footerLinks" href="">Built by Sam</a></p>
    </div>



  </div>
  );
}

export default App;
