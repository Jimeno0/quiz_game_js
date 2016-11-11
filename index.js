var Question = require('./question.js');
var Quiz = require('./quiz.js');
var read = require('read');

var q = new Question('whats your name?','Carlos',10);
var q2 = new Question('whats your alter name?','jimeno0',5);
var q3 = new Question('whats your age?','27',8);

var quizArr = [q,q2,q3];

var quiz = new Quiz (quizArr);


// var questions = quiz.qs;
//
// for (var i = 0; i < questions.length; i++) {
//   console.log(questions[i].q);
//   read(questions[i].q, answer.bind(questions[i]));
// }
//
// function answer( error, response) {
//   console.log('your response for '+ this.q + ' is: ' + response);
// }

// while (quiz.level<quiz.qs.length) {
//
// }
  quiz.ask();
