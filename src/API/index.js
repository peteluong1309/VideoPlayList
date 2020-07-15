import axios from 'axios';

const api = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=270&playlistId=PLoN0vRCrilEpbHxfZQkT0pjxH5q57_HQy&key=AIzaSyBYWVqJxO05xPqF6xfuoHLg3nI6b8pgK60"
}
);

export default api;