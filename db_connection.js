'use strict'

var massive = require("massive");
var config = require('./config'); // get our config file
const Promise = require("bluebird");
//massive 
var connectionString = config.connectionString;

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var massiveInstance = massive.connectSync({
    connectionString: connectionString
})

// Promise.promisifyAll(massiveInstance);
for (var item in massiveInstance) {

    if (typeof massiveInstance[item] === 'object') {
        makePromises(massiveInstance[item])
    } else if (typeof massiveInstance[item] === 'function') {
        Promise.promisifyAll(massiveInstance[item]);
    }
}


function makePromises(obj) {
    for (var o in obj) {
        if (typeof obj[o] === 'object') {
            // makePromises(massiveInstance[item])
            Promise.promisifyAll(obj[o]);
        } else if (typeof obj[o] === 'function') {
            Promise.promisifyAll(obj[o]);
        }

    }
}

// Set a reference to the massive instance on Express' app:
exports.db = massiveInstance;