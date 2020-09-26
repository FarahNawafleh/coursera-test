

(function () {

var names = ["Yaakov", "Joli", "Jood", "Jorden", "Paul", "Frank", "Larry", "Paula", "Laura", "Jaafar"];


for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();



