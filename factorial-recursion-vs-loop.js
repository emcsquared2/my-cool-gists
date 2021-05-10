//Factorial using recursion
function factorial(n){
  if (n<=1) {
    return 1;
  }
  return n * factorial(n-1)
}

console.log(factorial(5))

// Factorial using loop
const fact = num => {
  for (let i= num-1; i>0; i--) {
   num = num*i;
   }
  return num
 };

console.log(fact(5));
