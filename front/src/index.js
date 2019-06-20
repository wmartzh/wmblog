import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import './js/sidebar';
import './index.css';
import App from './App';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing=(
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/projects" component={Projects}/>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
