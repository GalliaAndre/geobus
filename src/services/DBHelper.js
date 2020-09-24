import axios from "axios";

const apiClient = axios.create({
  baseUrl: "http://localhost:3000",
  withCredential: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getData() {
    return apiClient.get("/positions");
  },
  sendData(position) {
    return apiClient.post("/positions", position);
  },
};
