const num = 1;
//num = 2; //error

let name = 'name'; //string
let number = 123; //number
let boolean = true; //boolean
let undef = undefined; //undefined
let defnull = null; //object

let dynamic = '123';
console.log(typeof dynamic);
dynamic = 123;
console.log(typeof dynamic);

let person = {
    name: 'Artem',
    age: 28
};

person.name = 'Artem Petrov';
person.age = 29;
person['name'] = 'Artem';
person['age'] = 25;

let selection = 'age';
person[selection] = 27;

console.log(person);

let selectedColors = ['red', 'blue'];
selectedColors[0] = 12;
selectedColors[5] = false;
console.log(selectedColors);

let emptyArray = [];
console.log(emptyArray);
console.log(typeof emptyArray);

function print(str1, str2) {
    console.log(str1 + ' ' + str2);
}

function square(number) {
    return number * number;
}

print('Hello World!');
print('FUCK THE WAR!')
console.log(square(5));

console.log(2 ** 3);
let a = 2;
console.log(++a);
console.log(a++);
console.log(a)

console.log('a > 0 : ' + (a > 0));
console.log('a == 1 : ' + (a == 1));
console.log('a == 1 : ' + (a == 2));
console.log('a == \'2\' : ' + (a == '2'));
console.log('a === \'2\' : ' + (a === '2')); //same type and same value
console.log('true == 1 : ' + (true == 1));
console.log('false == 0 : ' + (true == 0));
console.log('true == \'1\' : ' + (true == '1'));
console.log('true == \'1\' : ' + (true == '0'));

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

console.log(!true);
console.log(false || 'qwe');
console.log(true && 3);
console.log(false || 1 || 2); //1

let x = 1;
let y = 2;
let z = x;
x = y;
y = z;
console.log(x + ' ' + y);


a = 5;
if (a < 3) console.log("<");
else if (a > 3 && a < 6) console.log("between");
else console.log('>');

let color = 'green';

switch (color) {
    case 'red':
        console.log('Its red.');
        break;
    case 'blue':
        console.log('Its blue');
        break;
    default:
        console.log('Its unknown color.')
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let elem in person) {
    console.log(elem + ' : ' + person[elem]);
}

let array = [1, 2, 3, 4, 5];
for (let i in array) {
    console.log(array[i]);
}

console.log('======');

for (let i of array) {
    console.log(i)
}

function max(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

console.log(max('123', '321'));

function isLandscape(width, height) {
    return width > height;
}

console.log(isLandscape(100, 200));

function fizzBuzz(number) {
    if (!(typeof number === 'number')) console.log('Not a number');
    else if ((number % 3 === 0) && (number % 5 === 0)) console.log('FizzBuzz');
    else if (number % 3 === 0) console.log('Fizz');
    else if (number % 5 === 0) console.log('Buzz');
    else console.log(number);
}

fizzBuzz(15);

function checkSpeed(speed) {
    if (typeof speed !== 'number') {
        console.log('Not a number');
        return;
    }
    const speedLimit = 70;
    const kmPerPoint = 5;

    const point = Math.floor((speed - speedLimit) / kmPerPoint);
    if (point == 0) console.log('Ok.');
    else if (point < 12) console.log('Point: ' + point);
    else console.log("License suspended.");
}

checkSpeed(150);

function evenOrOdd(number) {
    if (typeof number !== 'number') {
        console.log('Not a number');
        return;
    }
    for (let i = 0; i <= number; i++) {
        console.log((i % 2) === 0 ? i + ' EVEN' : i + ' ODD');
    }
}

evenOrOdd(10);

function countTruthy(array) {
    let count = 0;
    for (let elemValue of array) {
        if (elemValue) count++;
    }
    return count;
}

array = ['', 0, false, undefined, null, 1, 2, '123', true];
console.log(countTruthy(array));

function showStringProperties(object) {
    for (let key in object) {
        if (typeof object[key] === 'string') {
            console.log(key, object[key]);
        }
    }
}

showStringProperties(person);

function multipleSum(limit) {
    let result = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) result += i;
    }

    return result;
}

console.log(multipleSum(5));

const marks = [80, 80, 50, 100, 95, 100];

function calculateGrade(marks) {
    const avg = calculateAverage(marks);

    if (avg < 60) return 'F';
    else if (avg < 70) return 'D';
    else if (avg < 80) return 'C';
    else if (avg < 90) return 'B';
    else return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let elementValue of array) {
        sum += elementValue;
    }
    return sum / array.length;
}

console.log(calculateGrade(marks));

function showStars(countOfRows) {
    for (let row = 1; row <= countOfRows; row++) {
        let starRow = '';
        for (let numberOfStars = 1; numberOfStars <= row; numberOfStars++) {
            starRow += '*';
        }
        console.log(starRow);
    }
}

showStars(10);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isNumberPrime(number)) console.log(number);
    }
}

function isNumberPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false;
        }
    }
    return true;
}

showPrimes(20);

let circle = {
    radius: 5,
    location: {
        x: 0,
        y: 0
    },
    isVisible: true,
    draw: function () {

    },
    move: function () {

    }
}

function CreacteCircle(radius, x, y) {
    return {
        radius,
        x,
        y,
        draw() { }
    }
}

function Circle(radius, x, y) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.draw = function() {};
}

let circle1 = CreacteCircle(5, 0, 0);
let circle2 = new Circle(5, 0, 0);

