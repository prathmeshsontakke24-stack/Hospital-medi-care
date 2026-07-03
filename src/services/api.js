import axios from "axios";

export default axios.create({
  baseURL: "https://admin.tomedes.com/api/v1",
});