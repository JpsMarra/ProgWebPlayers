import React from 'react'

import './listaJogadores.css'

import TopBar from '../topBar'
import SideBar from '../sideBar'
import { connect } from 'react-redux'
import { listarJogadores } from '../../redux/actions/jogadoresActions'
import { Link } from 'react-router-dom'

class ListaJogadores extends React.Component {

    componentDidMount() {
        this.props.dispatch(listarJogadores())
    }

    render() {
        const { error, loading, jogadores } = this.props;


        if (loading) {
            return <div>Carregando</div>
        }

        if (error) {
            return <div>Erro na requisição</div>
        }

        return (
            <div className="container">
                <TopBar />
                <div className="row">
                    <div className="col-3">
                        <SideBar />
                    </div>
                    <div className="col-9">
                        <h1>Lista de Jogadores</h1>
                        Quantidade de jogadores: {jogadores.length}

                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Nacionalidade</th>
                                    <th scope="col">Clube</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    jogadores.map((jogador) => (
                                        <tr key={jogador.id}>
                                            <td> {jogador.name} </td>
                                            <td> {jogador.country} </td>
                                            <td> {jogador.team_name} - {jogador.team_country}</td>
                                            <td>
                                                <Link className="btn btn-info" to={{pathname: '/jogadores/' + jogador.id}}>Detalhes</Link>
                                                <button className="btn btn-warning">Editar</button>
                                                <button className="btn btn-danger">Excluir</button>
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStatetoProps(store) {
    return {
        error: store.jogador.error,
        jogadores: store.jogador.dados,
        loading: store.jogador.loading
    }
}

export default connect(mapStatetoProps)(ListaJogadores)