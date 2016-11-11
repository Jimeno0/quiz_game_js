(function () {
  "use strict";
  var questionIndex = 0;

  function Question(question,answer,value){
    this.q = question;
    this.a = answer;
    this.val = value;
    this.id = ++questionIndex;
  }

  module.exports = Question;

})();
