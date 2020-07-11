import axios from "axios";
import { BASE_API_URL, API_TIMEOUT } from "../constant/configs";

export default axios.create({
  baseURL: BASE_API_URL,
  timeout: API_TIMEOUT,
});
