// DB Connection
var mongoose = require('mongoose');

var dbAddr = require('../config').dbAddr;

mongoose.connect(dbAddr);
module.exports = mongoose;
//exports.mongoose = mongoose;
