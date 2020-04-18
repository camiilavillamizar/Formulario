import React from 'react';
import '../styles/Form.css';

import burbuja from '../images/Burbuja.png';
class Form extends React.Component{
    state = 
    {Nombre:"",
    Apellido:"",
    Edad:"",
    Correo: "",
    Caricatura_favorita: ""
    };

    changes = ({name, value}) =>{
        this.setState(()=>{
            return {[name]:value};
        });
    };

    handleClick = e => {
        console.log(JSON.stringify(this.state,null, 4))
    };
    render(){
        return <div className= "box">
            <h1>Formulario</h1>
            <form>
                <div className="campo">
                    <label> Nombre: </label>
                    <input onChange={event => this.changes(event.target)}
                    type="text" 
                    name="Nombre"/>
                </div>
                
                <div className="campo">
                    <label>Apellido: </label>
                    <input onChange={event => this.changes(event.target)}
                    type="text" 
                    name="Apellido"/>
                </div>

                <div className="campo">
                    <label>Edad: </label>
                    <input onChange={event => this.changes(event.target)}
                    type="number" 
                    name="Edad"/>
                </div>

                <div className="campo">
                    <label>Correo: </label>
                    <input onChange={event => this.changes(event.target)}
                    className="form-cotrol" 
                    type="email" 
                    name="Correo"/>
                </div>

                <div className="campo">
                    <label>Caricatura favorita: </label>
                    <input onChange={event => this.changes(event.target)}
                    className="form-cotrol" 
                    type="text" 
                    name="Caricatura_favorita"/>
                </div>

                    <button onClick={this.handleClick} className="btn btn-primary">
                    Enviar
                    </button>
            </form>

            <img src = {burbuja}/>

        </div>
    } 
}

export default Form;