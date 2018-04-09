const express = require('express');
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient;
//const Issue = require('./issue.js');

const app = express();

app.use(express.static('static'));
app.use('/public', express.static('static'));

app.use(bodyParser.json());




//let db;
//MongoClient.connect('mongodb://localhost/issuetracker').then(connection => {
//    db = connection;
//    app.listen(3001, () => {
//        console.log('App started on port 3001');
//    });
//}).catch(error => {
//    console.log('ERROR:', error);
//});
//
//app.get('/api/issues', (req, res) => {
//    db.collection('issues').find().toArray().then(issues => {
//        const metadata = {total_count: issues.length};
//        res.json({_metadata: metadata, records: issues})
//    }).catch(error => {
//        console.log(error);
//        res.status(500).json({message: `Internal Server Error: ${error}`});
//    });
//});
//;
//
//app.post('/api/issues', (req, res) => {
//    const newIssue = req.body;
//    //newIssue.id = issues.length + 1;
//    newIssue.created = new Date();
//    if (!newIssue.status)
//        newIssue.status = 'New';
//    const err = Issue.validateIssue(newIssue)
//    if (err) {
//        res.status(422).json({message: `Invalid requrest: ${err}`});
//        return;
//    }
//
//    db.collection('issues').insertOne(newIssue).then(result =>
//        db.collection('issues').find({_id: result.insertedId}).limit(1).next()
//    ).then(newIssue => {
//        res.json(newIssue);
//    }).catch(error => {
//        console.log(error);
//        res.status(500).json({message: `Internal Server Error: ${error}`});
//    });
//});

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

app.get('/api/tp', (req, res) => {
   /*  var osmosis = require('osmosis');

    osmosis.get('http://olx.co.id/all-results/q-sapu-ijuk/?search%5Border%5D=filter_float_price%3Aasc');
 */

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