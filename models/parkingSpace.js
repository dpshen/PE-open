var db = require('../libs/mongodb');

var Schema = db.Schema;

var parkingSpaceSchema = new Schema({
    _id: Schema.Types.ObjectId,
    carParkId: Schema.Types.ObjectId,
    carParkName: String,
    area: String,
    code: String,
    lockId: String,
    lockUpDownState: Number,
    lockEleState:Number,
    syncTime:Date,
    status: String
}, {collection: 'parkingSpaces'});

var parkingSpace = db.model('parkingSpace', parkingSpaceSchema);

module.exports = parkingSpace;