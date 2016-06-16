var log4js = require('log4js');
var fs = require('fs');


fs.existsSync(process.env.HOME + "/log") || fs.mkdirSync(process.env.HOME + "/log");
var logDirectory = process.env.HOME + "/log/park";
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

var log4jsconf = {
    appenders: [
        // {type: "console"},
        {
            type: "dateFile",
            filename: logDirectory,
            pattern: "/yyyy-MM-dd-err.log",
            alwaysIncludePattern: true,
            category: "park-ERR",
        },
        {
            type: "dateFile",
            filename: logDirectory,
            pattern: "/yyyy-MM-dd.log",
            alwaysIncludePattern: true,
            category: "park",
        }
    ],
    replaceConsole: true,
    levels: {
        "park-ERR": "ERROR",
        "park": "INFO"
    }
};

// dev模式时 日志同时打印到终端
if (process.argv[2] == "dev"){
    log4jsconf.appenders.push({type:"console"})
} else if (process.argv[2] == "debug"){
    log4jsconf.appenders.push({type:"console"});
    log4jsconf.levels.park = "TRACE";
}

log4js.configure(log4jsconf);
var logger = log4js.getLogger('park');


var errLogger = log4js.getLogger('park-ERR');

var _error = logger.error;
logger.error = function () {
    _error.apply(logger, arguments);
    errLogger.error.apply(errLogger, arguments);
};

module.exports = logger;
