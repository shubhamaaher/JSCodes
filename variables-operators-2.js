let numberOne, numberSecond, result;

numberOne = 5;
numberSecond = 7;
numberThree = 8;
numberFour = 90;
numberFive = 100;
numberSix = 2;

// ** operator
console.log('Using ** operator ',numberSecond ** 5);

console.log('Number One before applying += operator', numberOne);

console.log('Number One after applying += operator', numberOne += 10);
// numberOne = numberOne + 10; => 5 + 10 = 15
console.log('numberSecond after applying -= operator', numberSecond -= 10);
// NumberSecond = numberSecond - 10; => 7 - 10 = -3
console.log('numberThree after applying *= operator', numberThree *= 10);
// numberThree = numberThree * 10; => 8 * 10 = 80
console.log('numberFour after applying /= operator', numberFour /= 10);
// numberFour = numberFour / 10; => 90 / 10 = 9
console.log('numberFive after applying %= operator', numberFive %= 10);
// numberFive = numberFive % 10; => 100 % 10 = 0
console.log('numberSix after applying **= operator', numberSix **= 3);
// numberSix = numberSix ** 10; => 2 ** 3 = 8 
console.log(numberOne, numberSecond, numberThree, numberFour, numberFive, numberSix);

// console.log(numberSecond);
