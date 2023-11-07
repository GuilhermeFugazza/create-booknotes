//import axios from "axios";

//export const api = axios.create({
//  baseURL: 'http://192.168.48.133:3333'
//})

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;


//Atualizar o ip do servidor