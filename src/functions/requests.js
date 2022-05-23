// axios library for api querying
import axios from 'axios';

// md5 library
import md5 from 'md5';

// cookies library
import Cookies from 'universal-cookie';


const cookies = new Cookies();

export const getAllUsers = async (state) => {
  const request = await axios.get('https://api-capture-the-flag.herokuapp.com/api/users');
  state(request.data);
}

export const login = async()=>{
  await axios.get('https://api-capture-the-flag.herokuapp.com/api/users')
  .then(response=>{
    const data =  response.data;
    const validUser = data.find(user => user.email === this.state.form.email);
    if(!validUser){
      throw new Error('El usuario no existe');
    }
    if(validUser.password !== md5(this.state.form.password)){
      throw new Error('Contraseña incorrecta');
    }
    if(validUser){
      cookies.set('id',validUser.id, {path: '/'});
      cookies.set('name',validUser.name, {path: '/'});
      cookies.set('lastname',validUser.lastname, {path: '/'});
      cookies.set('role',validUser.role, {path: '/'});
      cookies.set('avatar',validUser.avatar, {path: '/'});
      window.location.href="./dashboard";
    }else{
      throw new Error('El usuario o la contraseña no son correctos');
    }
  })
  .catch(error =>{
    throw new Error(error);
  })

}

export const userLogout = () => {
  cookies.remove('id', {path: '/'});
  cookies.remove('name',{path: '/'});
  cookies.remove('lastname', {path: '/'});
  cookies.remove('role', {path: '/'});
  cookies.remove('avatar', {path: '/'});
  window.location.href="./";
}