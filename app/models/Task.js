/*

This file is for creating a Mongoose Model/Schema

*/

var mongoose = require('mongoose');
const { Schema } = mongoose;

const task_Schema = new Schema({
    UserId: String,
    Text: String,
    Done: Boolean,
    Date: String
}, {collection: 'Tasks'});

module.exports = mongoose.model('Tasks', task_Schema);