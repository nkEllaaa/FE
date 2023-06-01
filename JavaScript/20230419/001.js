const me = {
  name : '나경',
  age : 25,
  gender : female,

  jsSkill : function (mySkill){
    mySkill.levelUp();
  }
}

const frontSkill = {
  level: 1,
  levelUp : function() {
    this.level++;
  }
}

me.mySkill(likeLion);