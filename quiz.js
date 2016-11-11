(function () {
  'use strict';
  function Quiz(questions) {
    this.qs = questions;
  }

  Quiz.prototype.addq = function (question) {
    this.questions.push(question);
  };

  module.exports = Quiz;
})();
