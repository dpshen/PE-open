var db = require('../libs/mongodb');

var Schema = db.Schema;

var userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: String,
    userName: String,
    phone: String,
    carNoList: {type: [String],default:[]},
    defaultCarNo: String,
    idNo: String,
    address: String,
}, {collection: 'users'});

var user = db.model('user', userSchema);

module.exports = user;