import axios from "axios";

const useDenoApi = () => {
  return axios.create({
    // baseURL: "http://localhost:4000",
    baseURL: "https://project1531.com",
  });
};

export default useDenoApi;
