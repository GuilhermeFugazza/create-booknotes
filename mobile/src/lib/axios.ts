import axios from "axios";

export const api = axios.create({
  baseURL: 'http://ltbm41a.anonymous.19000.exp.direct:3333'
})

//Atualizar o ip do servidor