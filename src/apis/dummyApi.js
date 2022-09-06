import axios from "axios";

export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": "63164794d1ab932c8ce81cad",
  },
});
