import React, { Component } from 'react';

// Import function login
import { login } from '../functions/requests';

class Formlogin extends Component {
  state={
    form:{
      email: '',
      password: ''
    }
  }

  handleChange= async (e) =>{
    await this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    });
  }

  render(){
    return (
      <div id="content-login" className="background-login flex-v">
        <h1>Ingresar Capture the flag</h1>
        <div className="bg-form-login flex-v">          
          <input type="email" name="email" className="input-login" placeholder="Correo electrónico" onChange={this.handleChange}/>
          <input type="password" name="password" className="input-login" placeholder="Contraseña" onChange={this.handleChange}/>
          <button className="btn-blue" onClick={()=> login(this.state)}>Ingresar</button>      
        </div>
      </div>
    );
  }
  
}

export default Formlogin;
