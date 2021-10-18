let numberOne, numberSecond, additionResult, subtractionResult, multiplicationResult, divisionResult, modulusResult;

let x, y;
numberOne = 40;
numberSecond = 56;
numberThree = 80;
numberFour = 100;

x = 5;
y = x;

additionResult = numberOne + numberSecond;
subtractionResult = numberOne - numberSecond;
multiplicationResult = numberOne * numberSecond;
divisionResult = numberOne / numberSecond;
modulusResult = 11 % 2;


console.log(`Addition of ${numberOne} & ${numberSecond} Is => ${additionResult}`);
console.log(`Subtraction of ${numberOne} & ${numberSecond} Is => ${subtractionResult}`);
console.log(`Multication of ${numberOne} & ${numberSecond} Is => ${multiplicationResult}`);
console.log(`Division of ${numberOne} & ${numberSecond} Is => ${divisionResult}`);
console.log(`Mod of 11 & 2 Is => ${modulusResult}`);

//Post Fix operators
console.log(`Using Increment Operator =>`,numberOne++);
// numberOne = numberOne + 1; = 40 + 1 =>41
console.log('After Increment',numberOne);

console.log(`Using Decrement Operator =>`,numberSecond--);
// numberSecond = numberSecond - 1 =>56 - 1 =>55
console.log('After Decrement ', numberSecond);

// Prefix operators
console.log('Prefixed Increment Operator', ++numberThree);
// numberThree = numberThree + 1; =>81
console.log('Prefixed Decrement Operator', --numberFour);
// numberFour = numberFour - 1; => 99

console.log('Value of Y is =>',y);

