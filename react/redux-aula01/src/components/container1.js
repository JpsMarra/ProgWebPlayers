import React from 'react';
import * as ACTIONS from '../actions';
import { connect } from 'react-redux';
import { buscaJogadores } from '../actions/jogadoresActions';

class Container1 extends React.Component {

    componentDidMount() {
        this.props.dispatch(buscaJogadores())
    }

    render() {
        console.log(this.props);
        const { error, loading, jogadores } = this.props;
        
        if (loading) {
            return <div>Carregando</div>
        }

        if (error) {
            return <div>Erro no carregamento</div>
        }

        return (
 
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nacionalidade</th>
                            <th>Clube</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jogadores.map((jogador) => (
                                <tr key={jogador.id}>
                                    <td>{jogador.name}</td>
                                    <td>{jogador.country}</td>
                                    <td>{jogador.team_name} - {jogador.team_country} </td>
                                    <td>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>
                    
                </table>
                
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        error: store.jogadorReducer.error,
        jogadores: store.jogadorReducer.dados,
        espera: store.jogadorReducer.loading
    }
}

export default connect(mapStateToProps)(Container1)
