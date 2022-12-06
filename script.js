let questions = 10;

let questionsLeft = ' [' + questions + ' questions left]';
let adjective = prompt('what is your first name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let verb = prompt(' what is your calling name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let noun = prompt('Where were you born' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let zodiac = prompt('what is your zodiac sign' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let pet = prompt('what is your favorite animal' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let color = prompt('what is your favorite color' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let sport = prompt('what is your favorite sport' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);


let height= prompt('what is your height' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);


let name = prompt('when is your birthday' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let emaotion = prompt(' How are you feeling right now' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

alert('All done. Ready for the message?');



let sentence = "<h2>There once was a superhero name " + adjective;
sentence += ' but was known as ' + verb;
sentence += ' .They were born in ' + noun;
sentence += ' on ' + name;
sentence += ' .Their favorite color is ' + color;
sentence += ' and loves to play ' + sport;
sentence += ' .Their favorite animal is a ' + pet;
sentence += ' but their height is ' + height;
sentence += ' .Since they didnt meet the height requirment and they are a ' + zodiac;

sentence += ' they can no longer be a superhero and they are ' + emaotion +  '.</h2>';
document.write(sentence);