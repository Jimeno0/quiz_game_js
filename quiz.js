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

function answer( error, response) {
    console.log('your response for '+ this.qs[this.level].q + ' is: ' + response);
    if (response === this.qs[this.level].a) {
      this.score += this.qs[this.level].val;
    }
    this.level++;
    this.ask();
}
module.exports = Quiz;
