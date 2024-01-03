import axios from "axios";

const server = axios.create({
  baseURL: "https://stantrust-server.onrender.com",
});

export default server;
