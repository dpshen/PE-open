var db = require('../libs/mongodb');

var Schema = db.Schema;

var operateLogSchema = new Schema({
    _id: Schema.Types.ObjectId,
    orderId: Schema.Types.ObjectId,
    carParkName: String,
    parkingSpaceArea: String,
    parkingSpaceCode: String,
    userId: String,
    userName: String,
    phone: String,
    carNo: String,
    operateTime: Date,
    operateType: String,
    success: Boolean,
    remark: String

}, {collection: 'operateLogs'});

var operateLog = db.model('operateLog', operateLogSchema);

module.exports = operateLog;