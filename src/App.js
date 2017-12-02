import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
    <div><h2>Home</h2></div>
)

const About = () => (
    <div><h2>About</h2></div>
)

const Contact = () => (
    <div><h2>Contact</h2></div>
)

const Nav = () => (
    <div className="Nav" style={{ background: 'pink', padding: '20px 10px' }}>Navbar</div>
)

//-- 描画 --//
const App = () => (
    <div>
        <Nav />
        <Router>
            <div style={{padding: '10px'}}>
                <p>
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/about">About</Link>&nbsp;
                    <Link to="/contact">Contact</Link>&nbsp;
                </p>
                <hr />
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
        </Router>
    </div>
)

export default App