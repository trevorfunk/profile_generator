const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name or nickname? ', (name) => {
  rl.question('Where do you live? ', (home) => {
   rl.question('Where is your dream vactation? ', (vacation) => {
    rl.question('Which is your favourite meal? (eg: dinner, breakfast, lunch) ', (meal) => {
     rl.question('What is your favourite thing to eat for that meal? ', (favMeal) => {
      rl.question('What is your favourite sport? ', (sport) => {
       rl.question('What is your favourite movie? ', (movie) => {
         rl.question('What is your superpower? ', (superpower) => {
   console.log(`Meet ${name}. ${name} lives in wonderful ${home}, but dreams of vacationing to ${vacation}. You'll find them content when enjoying ${meal}, Especially if ${meal} is ${favMeal}. When ${name} is able they love to play ${sport}. If they're feeling tired however they are always happy to get cozy, grab some popcorn, and watch ${movie}. ${name} is totally incredible and one of the great things that make them so awesome is ${superpower}.`);

  rl.close();
       });
      });
     });
    });
   });
  });
 });
});