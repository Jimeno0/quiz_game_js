var Question = require('./question.js');
var Quiz = require('./quiz.js');
var read = require('read');

var q = new Question('whats your name?','Carlos',10);
var q2 = new Question('whats your alter name?','jimeno0',5);
var q3 = new Question('whats your alter name?','jimeno0',8);

var quizArr = [q,q2,q3];

var quiz = new Quiz (quizArr);

console.log(quiz);
// var opt = {prompt:'tipe your name:'};
//
//
// read(opt,callback);
//
// function callback( error, response) {
//   console.log('your name is ' + response);
// }