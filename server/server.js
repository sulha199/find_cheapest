const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(express.static('static'));
app.use('/public', express.static('static'));
app.use(bodyParser.json());

app.get('/api/tp', (req, res) => {
    var request = require('request');
    request(
            'https://ace.tokopedia.com/search/v2.6/product?st=product&image_size=190&image_square=true&rows=20&'
            + Object.keys(req.query).map((key) => {
        return [key, req.query[key]].map(encodeURIComponent).join("=");
    }).join("&"), function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    })
});

app.listen(3000, function () {
    console.log('App started on port 3000');
}); 