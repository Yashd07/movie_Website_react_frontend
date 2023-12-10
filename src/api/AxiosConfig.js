import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
})

//https://d414-202-148-60-46.ngrok-free.app
//http://localhost:8080