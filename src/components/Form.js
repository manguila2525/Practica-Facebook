import React, { Component } from "react"
import axios from 'axios'
export default class Form extends Component {

    state = {
        registros : [],
        nombre : '',
        apellido:'',
        email: '',
        usuario:'',
        contraseña: '',
        contraseñaVerificar: ''
    }

   
  async componentDidMount(){
     const res= await axios.get('http://localhost:4000/api/registro');
     this.setState({registros:res.data})
     console.log(this.state.registros)
    }
     onChangeRegistro = (e)=>{
        this.setState({
            nombre: e.target.value
        })
        console.log(this.state.nombre)
    }  
    onChangeRegistroApellido = (e)=>{
        this.setState({
            apellido: e.target.value
        })
        console.log(this.state.apellido)
    }  
    onChangeRegistroEmail = (e)=>{
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }  

    onChangeUsuario = (e)=>{
      this.setState({
          usuario: e.target.value
      })
      console.log(this.state.usuario)
  }  

  onChangeContraseña = (e)=>{
    this.setState({
        contraseña: e.target.value
    })
    console.log(this.state.contraseña)
}  


onChangeContraseñaVerificar = (e)=>{

this.setState({
      contraseñaVerificar: e.target.value
  })
  console.log(this.state.contraseñaVerificar)
  if (this.state.contraseña === this.state.contraseñaVerificar ) {
    console.log('Contraseñas iguales')
  }else{
    console.log('contraseñas no son iguales')
  }
}  


    onSubmit = async e =>{
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/api/registro',{
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email,
            usuario: this.state.usuario,
            contraseña: this.state.contraseña
        })
        console.log(res)
    }

  render() {
    return (
      <>
      
        <div className="mb-5"></div>
        <div className="container col-md-5 col-sm-12  my-5">
         
                <form onSubmit={this.onSubmit}>
                   <div className="card">
                    <div className="card-header text-center">
                      <h2>Registrar Cuenta</h2>
                    </div>

                    <div className="card-body">
                      <div
                        className="alert alert-success alert-dismissible alerta"
                        id="alerta"
                    
                      >
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                        >
                          &times;
                        </button>
                        <strong>Success!</strong> Indicates a successful or
                        positive action.
                      </div>
                      <div
                        className="alert alert-danger alerta"
                        id="alerta2"
                        role="alert"
                      ></div>
                      <div className="form-row">
                        <div className="col-6 form-group">
                          <input
                            type="text"
                            placeholder="Nombre."
                            id="nombre"
                            className="form-control"
                            onChange={this.onChangeRegistro}
                          />
                        </div>

                        <div className="col-6 form-group">
                          <input
                            type="text"
                            placeholder="Apellido."
                            id="apellido"
                            className="form-control"
                            onChange={this.onChangeRegistroApellido}
                          />
                        </div>
                        <div className="col-12 form-group">
                          <input
                            type="email"
                            placeholder="Email."
                            id="email"
                            className="form-control"
                            onChange={this.onChangeRegistroEmail}
                          />
                        </div>

                        <div className="col-8 form-group">
                          <input
                            type="text"
                            placeholder="Nombre de usuario."
                            id="usuario"
                            className="form-control"
                            onChange = {this.onChangeUsuario}
                          />
                        </div>

                        <div className="col-6 form-group">
                          <input
                            type="password"
                            placeholder="Contraseña."
                            id="contraseña"
                            className="form-control"
                            onChange = {this.onChangeContraseña}
                          />
                        </div>

                        <div className="col-6 form-group">
                          <input
                            type="password"
                            placeholder="Repetir contraseña."
                            id="contraseña2"
                            className="form-control"
                            onChange = {this.onChangeContraseñaVerificar}
                          />
                        </div>
                 
      
                       
                        <div className="col-12 form-group">
                          <div className="container col-6">
                            <input
                              type="submit"
                              id="boton"
                              className="form-control btn btn-primary"
                              value="Registrar."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </form>
                  
                </div>        
      </>
    );
  }
}
