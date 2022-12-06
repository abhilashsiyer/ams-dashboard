import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://us-central1-sampleuiautomator.cloudfunctions.net/app/" 
});
