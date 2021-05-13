// The Javabet (new term coigned by me)
//Following a codewars challenge that involved sorting some string numbers in an array, 
//I realised I had some misconceptions that needed thinking through.
//Here are some arrays that have been sorted to test what happens...

console.log([6, 3, 9, 1].sort())
//OUTPUT [ 1, 3, 6, 9 ]
// array.sort() orders the element of the array in ascending order

console.log(['6', '3', '9', '1'].sort())
//OUTPUT [ 1, 3, 6, 9 ]

console.log(['2', '12', '23', '19999', '211'].sort())
//OUTPUT [ '12', '19999', '2', '211', '23' ]
//JS is looking at the first characters and ordering them.
//Then looking at the second character and ordering again.
//Just like it would do with words putting them in alphabetical. (see below) 

console.log(['z', 'm', 'd', 'a'].sort())
//OUTPUT [ 'a', 'd', 'm', 'z' ]

console.log(['zulu', 'zodiac', 'alphabet', 'aardvaark', 'alpha'].sort())
//OUTPUT [ 'aardvaark', 'alpha', 'alphabet', 'zodiac', 'zulu' ]

//My playing around more to understand other characters and how they compare...
console.log(['a', 'A', 'E', 'e', 'k', 'K', ].sort())
//OUTPUT [ 'A', 'E', 'K', 'a', 'e', 'k' ]
//capital letters are lower down the alphabet

//My playing around more to understand other characters and how they compare...
console.log(['a', 'A', 'E', 'e', 'k', '9', 'K', '1', '?', '%', '-' , '@', 1, 8, 9].sort())
//OUTPUT    ['%', '-', '1', 1  , 8  , '9', 9  ,'?' , '@', 'A',  'E', 'K','a','e', 'k']
//Here is the order: Special characters, numbers/string numbers, uppercase letters, lowercase letters.
