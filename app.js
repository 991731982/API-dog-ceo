const express = require('express')
const axios = require('axios');

const app = express();
const port = 3000;

axios.defaults.baseURL = 'http://127.0.0.1:3000/';



app.get('/:id', (req, res) => {
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            // Log the URL of the random dog image
            console.log(response.data.message);
            // Send an <img> element with the random dog image URL to the client
            res.send(`<img src="${response.data.message}" alt="Random Dog">`);
        })
        .catch(error => {
           
            console.log(error);
        });
});


app.listen(3000, () => {
	console.log('listening on port 3000')
})

