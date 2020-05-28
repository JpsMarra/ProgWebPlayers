import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { editJogador } from '../../redux/actions/jogadoresActions';
import SideBar from '../sideBar';
import TopBar from '../topBar';
class FormEditJogadores extends React.Component {

    submit (props, data, editJogador) {
        editJogador(data, props)
    }

    render() {
        console.log(this.props);
        
        
        const {handleSubmit} = this.props;

        return (
            <div className="container">
                <TopBar />
                <div className="row">
                    <div className="col-3">
                        <SideBar />
                    </div>
                    <div className="col-9">
                        <h1>Editar Jogador</h1>
                        <form onSubmit={handleSubmit((fields) => this.submit(this.props, fields, editJogador))}>
                            <div className="form-group">
                                <label>Nome</label>
                                <Field component="input" name="name" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Nacionalidade</label>
                                <Field component="input" name="country" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Biografia</label>
                                <Field component="textarea" name="bio" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Gravar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


FormEditJogadores = reduxForm({
    form: 'jogadores'
})(FormEditJogadores)

export default FormEditJogadores