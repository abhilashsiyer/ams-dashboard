import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://us-central1-sampleuiautomator.cloudfunctions.net/app/" 
});

export const axiosReportingClient = axios.create({
  baseURL: "https://us-central1-sampleuiautomator.cloudfunctions.net/appFirestore/" 
});
