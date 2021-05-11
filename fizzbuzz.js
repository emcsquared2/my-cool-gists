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


//An example I found (not invented by me which I love.  I have annotated it to break it down and explain why it works.

function FizzBuzz(lim) {
  var i = 0, j;
  while (i < lim) {
    i++;
    j ='';                          
    j += i % 3 ?  '': 'Fizz';     
    j += i % 5 ?  '': 'Buzz';    
    console.log(j ? j : i.toString());
  }
}
FizzBuzz(16)

//True, True, False... Logs a number
//In order to understand this you need to recognise that the code relies on the falsy value of the empty string defined in line 25 and the subsequent conditional statements.
//When the code is executed, a straight run of truthy outputs in lines 26 and 27, whereby i%3 and/or i%5 do not equal zero i.e. not a multiple of 3 and/or not a multiple of 5...
//...will give an output of '' ('empty string' === falsy).  The falsy '' is then += added to the existing j='' which then leads to...
//line 28 where if j is falsy (remembering that we have just said this means no multiples i.e. no fizz or buzz) then the false output is i.String() 

//False, False, True...Logs FizzBuzz
//Similarly if on line 26 the remainder of i%3 === 0 i.e. a multiple of 3 the output of the ternary operator is false (because 0 is falsy).  The false output is 'Fizz'
//This then gets added to j.  When the code reads line 28 j is not falsy this time and so the output is true i.e. returning j which is 'Fizz'

