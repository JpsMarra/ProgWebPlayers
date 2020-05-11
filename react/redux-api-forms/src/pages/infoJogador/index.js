import React from 'react'
import TopBar from '../topBar';
import SideBar from '../sideBar';

class InfoJogador extends React.Component {

    componentDidMount() {
        console.log(this.props);        
    }

    render() {
        return (
            <div className="container">
                <TopBar />
                <div className="row">
                    <div className="col-3">
                        <SideBar />
                    </div>
                    <div className="col-9">
                        <h1>Dados do Jogador</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoJogador;