import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import container1 from './components/container1';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={container1} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

