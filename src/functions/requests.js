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

export const findOneUser = async (idUser, state) => {
  const request = await axios.get(`https://api-capture-the-flag.herokuapp.com/api/users/${idUser}`);
  state(request.data);
}

export const getAllMissions = async (state) => {
  const request = await axios.get('https://api-capture-the-flag.herokuapp.com/api/missions');
  state(request.data);
}

export const findOneMission = async (idMission, state) => {
  const request = await axios.get(`https://api-capture-the-flag.herokuapp.com/api/missions/${idMission}`);
  state(request.data);
}

export const addMission = async (body, state) => {
  const response = await axios.post('https://api-capture-the-flag.herokuapp.com/api/missions/',body)
  state(response.data);
  
}

export const addUsers = async (body, state) => {
  const request = await axios.post('https://api-capture-the-flag.herokuapp.com/api/users/',body)
  state(request.data)
}

export const login = async(state)=>{
  const request = await axios.get('https://api-capture-the-flag.herokuapp.com/api/users');
  try {
    const validUser = await request.data.find(user => user.email === state.form.email);
    if(!validUser){
      throw new Error('El usuario no existe');
    }
    if(validUser.password !== md5(state.form.password)){
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
  } catch (error) {
    throw new Error(error);
  }
}


export const userLogout = () => {
  cookies.remove('id', {path: '/'});
  cookies.remove('name',{path: '/'});
  cookies.remove('lastname', {path: '/'});
  cookies.remove('role', {path: '/'});
  cookies.remove('avatar', {path: '/'});
  window.location.href="./";
}

