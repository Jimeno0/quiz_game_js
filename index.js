var Question = require('./question.js');
var Quiz = require('./quiz.js');
var read = require('read');

var q = new Question('whats your name?','Carlos',1);
var q2 = new Question('whats your alter name?','jimeno0',1);
var q3 = new Question('whats your age?','27',1);

var quizArr = [q,q2,q3];

var quiz = new Quiz (quizArr);
quiz.makeBonus();
quiz.ask();
