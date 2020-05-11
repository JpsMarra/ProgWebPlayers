import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import ListaJogadores from './pages/listaJogadores';
import InfoJogador from './pages/infoJogador';

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/jogadores' exact component={ListaJogadores} />
                    <Route path='/jogadores/:id' exact component={InfoJogador} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;