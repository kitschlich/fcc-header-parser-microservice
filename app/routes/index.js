'use strict';

var bodyParser = require('body-parser');
var parseHeader = require('../modules/parseHeader.js');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.route('/')
        .get(function (req, res) {
            res.json(parseHeader(req.headers));
        });
};


