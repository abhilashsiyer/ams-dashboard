import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://us-central1-sampleuiautomator.cloudfunctions.net/app/" 
});

export const axiosReportingClient = axios.create({
  baseURL: "https://us-central1-sampleuiautomator.cloudfunctions.net/appFirestore/" 
  // baseURL: "http://127.0.0.1:5001/sampleuiautomator/us-central1/appFirestore/" 
});
