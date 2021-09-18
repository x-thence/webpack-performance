//b.js
require('./c.js');
const _ = require('lodash')
function fn() {
    console.log('b-------');
}
module.exports = fn();
