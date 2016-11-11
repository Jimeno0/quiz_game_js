var read = require('read');

function Quiz(questions) {
  this.qs = questions;
  this.level = 0;
  this.score = 0;
}

Quiz.prototype.addq = function (question) {
  this.questions.push(question);
};

Quiz.prototype.ask = function () {
  if(this.level < this.qs.length){
    var question_text = {prompt: this.qs[this.level].q};

    read(question_text, answer.bind(this));
  } else {
    console.log('Game finished, total score: ' + this.score);
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
      this.score += this.qs[this.level].val;
    } else {
      console.log('Incorrect, the correct answer is: '+ this.qs[this.level].a);
    }
    this.level++;
    this.ask();
}
module.exports = Quiz;
