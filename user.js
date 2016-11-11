function User(name,level,score) {
  this.name = name;
  this.level = level ? level : 0;
  this.score = score ? score : 0;
}

module.exports = User;
