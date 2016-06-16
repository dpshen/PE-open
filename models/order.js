var db = require('../libs/mongodb');

var Schema = db.Schema;

var orderSchema = new Schema({
    _id: Schema.Types.ObjectId,
    carParkId: Schema.Types.ObjectId,
    carParkName: String,
    parkingSpaceId: Schema.Types.ObjectId,
    parkingSpaceArea: String,
    parkingSpaceCode: String,
    lockId: String,
    userId: String,
    userName: String,
    phone: String,
    carNo: {type: String, trim: true},
    startTime: Date,
    unlockTime: Date,
    endTime: Date,
    dueTime: Date,
    billStartTime: Date,
    billEndTime: Date,
    status: String,
    unlock: Number,
    maxUnlock: Number,
    updated: Date ,
    remark: String

}, {collection: 'orders'});

var order = db.model('order', orderSchema);

module.exports = order;