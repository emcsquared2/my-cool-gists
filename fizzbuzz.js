const fizzBuzz = (lim) =>{
let j;
for(let i=1; i<=lim; i++){
 switch (0) {
  case (i%15):j='fizzbuzz'; 
  break;
  case (i%3):j='fizz';
  break;
  case (i%5):j='buzz';
  default: j=i.toString();
 };
 console.log(j)
};
};

fizzBuzz(16);
