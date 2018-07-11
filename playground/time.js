var moment = require('moment');


// var date = new Date();
// var months = ['Jan']
// console.log(date.getMonth());

var createdAt = 1234;
var date = moment(createdAt);
// date.add(0 'hour')
console.log(date.format('h:mm a'))