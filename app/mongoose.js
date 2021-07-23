/*

This file is for initializing mongoose

*/
require("dotenv").config()
const mongoose = require('mongoose');
var env = process.env;
console.log(env.ATLAS_CONNECTION_STRING)
mongoose.connect(env.ATLAS_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, function(err) {if (err) return console.error(err); console.log("Connection to MongoDB successful")});