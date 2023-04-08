var names = ["Adam", "jane", "James", "Ahmed", "Jill", "Doha", "Albert"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0);
  if (firstLetter === 'j' || firstLetter==='J') {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}