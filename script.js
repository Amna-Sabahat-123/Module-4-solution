(function (window) {


  var names = ["Amna", "Jason", "Jenny", "Abdul Jabbar", "Mariam", "Saad", "Waqas", "Asma", "Jimmy"];
  
  
  for (var i in names) {
  
   
    var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  
    
    if (firstLetter == 'j') {
       window.bye.speak(names[i]);
    } else {
       window.helloSpeaker.speak(names[i]);
    }
  }
  })(window);