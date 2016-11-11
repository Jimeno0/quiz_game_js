var Question = require('./question.js');
var Quiz = require('./quiz.js');
var User = require('./user.js');
var read = require('read');
var fs   = require('fs');

var q  = new Question('whats your name?','Carlos',1);
var q2 = new Question('whats your alter name?','jimeno0',1);
var q3 = new Question('whats your age?','27',1);

var quizArr = [q,q2,q3];



// var user1 = new User('jimeno0');
// var user2 = new User('carlos');

var users = [];
var selected_user;

getUseres();

// por que carajo me pilla esto aqui y no el index.js¿?¿?¿?
function saveUsers(users) {
  var string;
  for (var i = 0; i < users.length; i++) {
    string += user.name + ' ' + user.level + ' ' + user.score + '\n';
  }
  fs.writeFile('users.txt', string , function (err, data) {
    console.log('users where saved!');
  });
}


function getUseres() {
  fs.readFile('users.txt', 'utf8', function (err, data) {
    var usersFromText = data.split('\n');
    // var users         = [];

    for (var i = 0; i < usersFromText.length; i++) {
      var user = usersFromText[i].split(' ');
      user = new User(user[0],parseInt(user[1]),parseInt(user[2]));
      users.push(user);
    }

    read({prompt: 'Welcome to the quiz game! \n New user? (y/n)' },loggin_or_register);
  });
}

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
  // saveUsers(users);
}
