import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.115:3333'
});


//Atualizar o ip do servidor