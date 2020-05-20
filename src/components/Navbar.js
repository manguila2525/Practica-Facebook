import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
export default class Navbar extends Component {

  state = {
    registros : [],
    usuario:'',
    contraseña: ''
}


async componentDidMount(){
 const res= await axios.get('http://localhost:4000/api/registro');
 this.setState({registros:res.data})
 console.log(this.state.registros)
}
  onChangeUsuario=(e)=>{
    this.setState({
        usuario: e.target.value
    })  
    console.log(e.target.value)
  }

  onSubmit = (e)=>{
    e.preventDefault();
   
  //  if(this.state.registros.map(user => user.usuario) === this.state.usuario){
  //    console.log('usuario correcto')
  //  }else{
  //    console.log('usuario incorrecto')
  //  }
    
  }

  render() {

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
          <div className="container-fluid">
            <Link className="navbar-brand btn btn-primary" to="/"><i className="fas fa-home"></i></Link>
            <button
              className="navbar-toggler"
              data-target="#my-nav"
              data-toggle="collapse"
              aria-controls="my-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
             <form onSubmit= {this.onSubmit}>
            <div id="my-nav" className="collapse navbar-collapse">
           
              
            
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <input
                    type="text"
                    className=" form-control "
                    placeholder="Enter User"
                    onChange = {this.onChangeUsuario}
                  ></input>
                </li>
                <li className="nav-item mx-2">
                  <input
                    type="text"
                    className=" form-control "
                    placeholder="Enter Password"
                    onChange = {this.onChangeContraseña}
                  ></input>
                </li>
                <li className="nav-item mr-2">
                  <input
                    type="submit"
                    className=" form-control btn btn-primary"
                    value="Start"
                  ></input>
                </li>
                <li className="nav-item">
                  <Link
                    className=" btn btn-primary "
                    to="create"
    
                  >
                    Create Account
                  </Link>
                </li>
              </ul>
            </div>
            </form>
          </div>
        </nav>
      </>
    );
  }
}
