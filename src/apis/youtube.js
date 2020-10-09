import axios from "axios";

const KEY = "AIzaSyDCPUqKMeEiiriLHyHm77xUnq5hS1N2kKo";

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
