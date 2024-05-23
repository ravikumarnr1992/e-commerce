const axios = require('axios');
const express = require('express');
const https = require('https');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, X-Requested-With, Content-Type, Accept,Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
});

app.listen(5000, () => console.log(`App running on port 5000`));

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get("/productDetails", async (req, res) => {
    try {
        const response = await axios.get('https://dummyjson.com/products', {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });
        const data = response.data; // Extracting data from the response
        console.log('---', data);
        res.send(data);
    } catch (e) {
        console.log('Error', e);
        res.status(500).send('Internal Server Error');
    }
});
