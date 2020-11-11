const axios = require("axios");

const RequestOne = axios.get(
    "http://api.openweathermap.org/data/2.5/forecast?q=london&appid=816234fad9269fdf8d0ac3533ca52b5b"
);

const RequestTwo = axios.get(
    "http://api.openweathermap.org/data/2.5/forecast?q=tunis&appid=816234fad9269fdf8d0ac3533ca52b5b"
);

axios
    .all([RequestOne, RequestTwo])
    .then(
        axios.spread((firstResponse, secondResponse) => {
            console.log(firstResponse.data.city, secondResponse.data.city);
        })
    )
    .catch((errors) => {
        console.error(errors);
    });