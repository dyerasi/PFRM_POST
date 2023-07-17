const express = require('express');
const router = express.Router();

// import the aws sdk to use the DynamoDB
// libraries in the app
const AWS = require('aws-sdk');

// update the region to where DynamoDB is hosted
AWS.config.update({ region: 'us-east-2' });

// create a new DynamoDB client
// which provides connectivity b/w the app
// and the db instance
const client = new AWS.DynamoDB.DocumentClient();
const tableName = 'events';



//get all events
//will eventually depricate this
router.get('', function (req, res) {
  console.log('getting all events')
  var params = {
    TableName: tableName
};

client.scan(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        var items = [];
        for (var i in data.Items)
            console.log(i)
            items.push(data.Items);

        res.contentType = 'application/json';
        res.send(items);
    }
});
});

//get an event by its id
router.get('/:event_id', function (req, res) {

    res.send('Get users events');
});

router.post('/', function (req, res) {

    res.send('Post user controller');
});

module.exports = router;