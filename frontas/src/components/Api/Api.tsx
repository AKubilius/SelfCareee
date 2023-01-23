import axios from 'axios';

const api = axios.create({
  baseURL: "https://localhost:7109",
});

const authConfig = {
  headers: {
    Authorization:  `Bearer ${sessionStorage.getItem("token")}`,
  }
};

export {api,authConfig};