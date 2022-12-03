import axios from "axios";

const useDenoApi = () => {
  return axios.create({
    // baseURL: "http://localhost:4000",
    baseURL: "https://nate-deno-lb-1724859216.us-east-1.elb.amazonaws.com/",
  });
};

export default useDenoApi;
