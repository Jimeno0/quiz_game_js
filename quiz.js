var read = require('read');

function Quiz(questions,user) {
  this.qs = questions;
  this.user = user;
  this.level = 0;
  this.score = 0;
}

Quiz.prototype.addq = function (question) {
  this.questions.push(question);
};

Quiz.prototype.ask = function () {
  if(this.level < this.qs.length){
    var question_text = {prompt: this.qs[this.level].q};
    this.user.level = this.level;
    read(question_text, answer.bind(this));
  } else {
    console.log('Game finished, total score: ' + this.user.score + ' for player ' + this.user.name);
  }

};

Quiz.prototype.makeBonus = function () {
  var randomnumber = Math.floor(Math.random()*(this.qs.length)+ 1);
  for (var i = 0; i < this.qs.length; i++) {
     if (this.qs[i].id === randomnumber){ this.qs[i].val *=2; }
  }
};

function answer( error, response) {
    if (response === this.qs[this.level].a) {
      var msg = 'correct!';
      if (this.qs[this.level].val == 2) { msg += ' You score the bonus question!!';}
      console.log(msg);
      this.user.score += this.qs[this.level].val;
    } else if(response === 'save'){
      console.log('saving your game.... and exit!');
      return;
    } else {
      console.log('Incorrect, the correct answer is: '+ this.qs[this.level].a);
    }
    this.level++;
    this.ask();
}
module.exports = Quiz;
