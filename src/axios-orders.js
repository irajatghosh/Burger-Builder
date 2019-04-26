import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-30f01.firebaseio.com/"
});

export default instance;
