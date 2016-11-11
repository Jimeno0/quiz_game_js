var Question = require('./question.js');
var Quiz = require('./quiz.js');
var User = require('./user.js');
var read = require('read');

var q = new Question('whats your name?','Carlos',1);
var q2 = new Question('whats your alter name?','jimeno0',1);
var q3 = new Question('whats your age?','27',1);

var quizArr = [q,q2,q3];

var user1 = new User('jimeno0');
var user2 = new User('carlos');

var users = [user1,user2];
var selected_user;

read({prompt: 'Welcome to the quiz game! \n New user? (y/n)' },loggin_or_register);



function loggin_or_register(error,response) {

    if (response === 'y') {
      read({prompt: 'type an user name: ' },register);
    } else if (response === 'n') {
      read({prompt: 'type your user name: ' },loggin);
    } else {
      read({prompt: 'Whoha easy mate! \n Are you a new user? (y/n)' },loggin_or_register);
    }
}

function register(error,response) {
  var user = new User(response);
  selected_user = user;
  users.push(user);
  startQuiz();
}

function loggin(error,response) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].name === response) {
      selected_user = users[i];
    }
  }
  if (selected_user) {
    startQuiz();
  } else {
    read({prompt: 'Cant find this user \n Are you a new user? (y/n)' },loggin_or_register);
  }
}

function startQuiz() {
  var quiz = new Quiz (quizArr,selected_user);
  quiz.makeBonus();
  quiz.ask();
}
