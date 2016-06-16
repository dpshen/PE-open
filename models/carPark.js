var db = require('../libs/mongodb');

var Schema = db.Schema;

var carParkSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    province: String,
    city: String,
    area: String,
    address: String,
    longitude: String,
    latitude: String,
    appointmentTime: Number,
    appointmentMoney: Number,
    payWaitTime: Number,
    unlockWaitTime: Number,
    lockDownTime: Number,
    additionalTime: Number,
    nextUnlockWaitTime: Number,
    maxUnlock: Number,
    status: String
}, {collection: 'carParks'});

var carPark = db.model('carPark', carParkSchema);

module.exports = carPark;