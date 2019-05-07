import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signup from './Signup';

// Re-usable components
import Header from './Header';
import BurgerMenu from './BurgerMenu';
import Dashboard from './Dashboard/index';


class App extends Component {
    render() {
        return (
            <div>
                 <BrowserRouter>
                <Header />
                    <div>
                    <Route path="/" exact component={Signup} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    </div>
                <BurgerMenu />
                </BrowserRouter>
            </div>
          
        )
    }
}

export default App;