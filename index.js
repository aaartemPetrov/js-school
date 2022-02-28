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
    this.draw = function () { };
}

let circle1 = CreacteCircle(5, 0, 0);
let circle2 = new Circle(5, 0, 0);

function createObj(key1, key2) {
    return {
        key1,
        key2
    }
}

let xxx = 10;
let yyy = xxx;
xxx = 20;
console.log(xxx, yyy); //20 , 10

let xxxObj = { value: 10 };
let yyyObj = xxxObj;
console.log(xxxObj, yyyObj);

const dateNow = new Date();
const date1 = new Date('February 25 2022 12:36');
const date2 = new Date(2022, 1, 25, 12, 37)
console.log(dateNow);
console.log(date1);
console.log(date2);

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;

}

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

function showAddress(address) {
    for (let key in address) {
        console.log(key + ' : ' + address[key]);
    }
}

const addr1 = new Address('Some street', 'Minsk', '220002');
const addr2 = createAddress('Some street', 'Minsk', '220002');
showAddress(addr1);
showAddress(addr2);

function areSame(obj1, obj2) {
    return obj1 === obj2;
}

function areEqual(obj1, obj2) {
    if (obj1 === null && obj2 === null) return true;
    if (obj1 === null && obj2 !== null) return false;
    if (obj1 === null && obj2 !== null) return false;
    if (obj1 === undefined && obj2 === undefined) return true;
    if (obj1 === undefined && obj2 !== undefined) return false;
    if (obj1 === undefined && obj2 !== undefined) return false;

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(areEqual(addr1, addr2));
console.log(areSame(addr1, addr2));

let post = {
    title: 'title',
    body: 'body',
    author: 'author',
    views: 100,
    comments: [
        {
            commentAuthor: 'nickName1',
            commentText: 'text1'
        },
        {
            commentAuthor: 'nickName2',
            commentText: 'text2'
        }
    ],
    isLive: true
}

console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isAlive = false;
}

post = new Post('t', 'b', 'a');
console.log(post);

function RangePrice(name, tooltip, from, to) {
    this.name = name;
    this.tooltip = tooltip;
    this.from = from;
    this.to = to;
    this.isHovered = false;
    this.isChosen = false;
}

let priceRanges = [
    new RangePrice('$', 'low', 1, 100),
    new RangePrice('$$', 'middle', 101, 250),
    new RangePrice('$$', 'high', 251, 500)
]

console.log(priceRanges);

let numbers = [1, 2, 3];
numbers.push(4, 5);
numbers.unshift(-1, 0);
numbers.splice(1, 0, 10, 11, 12);

console.log(numbers);
console.log(numbers.indexOf(12));
console.log(numbers.indexOf(15));
console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(10) !== -1);

const objects = [
    { val1: 1, val2: 2 },
    { val1: 5, val2: 13 }
]

let found1 = objects.find(function (object) {
    return object.val1 === 1 && object.val2 === 2;
})

found1 = objects.find(object => object.val1 === 1);
let found2 = objects.findIndex(object => object.val2 === 13);

console.log(found1);
console.log(objects[found2]);

console.log(numbers);
numbers.pop(); //end
numbers.shift(); //start
numbers.splice(0, 8); // from index N elements;
console.log(numbers);

numbers.unshift(1, 2, 3, 4, 5);
numbers = [];
numbers.unshift(1, 2, 3, 4, 5);
numbers.length = 0;
numbers.unshift(1, 2, 3, 4, 5);
numbers.splice(0, numbers.length);
numbers.unshift(1, 2, 3, 4, 5);
while (numbers.length > 0) {
    numbers.pop(); // numbers.shift();
}

const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const combined = firstArr.concat(secondArr);
//firstArr[0].value = 25;
console.log(combined);



let slice = combined.slice(2);
console.log(slice);
slice = combined.slice(2, 4);
console.log(slice);
slice = combined.slice();
console.log(slice);

const newCombined = [...firstArr, 655, 255, 355, ...secondArr];
const copy = [...newCombined];

copy.forEach(element => console.log(element));
copy.forEach((element, index) => console.log(element, index));

const joined = newCombined.join(' ');
console.log(joined);

const toSort = [1, 5, 255, 6, -12, 38];
console.log(toSort.sort());
console.log(toSort.reverse());

const obectsToSort = [
    { val1: 1, val2: 2 },
    { val1: 2, val2: 1 }
]
obectsToSort.sort((a, b) => {
    return (a.val2 < b.val2) ? -1 : (a.val2 > b.val2) ? 1 : 0;
});
console.log(obectsToSort);

let numbers1 = [1, 2, 3, 4, 5];
let isAllBiggerThen3 = numbers1.every(value => { return value >= 3 });
console.log(isAllBiggerThen3);
let isSomeBiggerThen3 = numbers1.some(value => { return value >= 3 });
console.log(isSomeBiggerThen3);

numbers1 = numbers1.filter(number => { return number >= 3 });
console.log(numbers1);

const html = '<ul>' + numbers1.map(number => '<li>' + number + '</li>').join('') + '</ul>';
console.log(html);

const items = numbers1.map(number => { return { value: number } });
console.log(items);

let sum = items
    .map(number => number.value)
    .filter(value => value > 3)
    .reduce((accum, value) => { return accum + value }, 0);

console.log(sumsum);

function arrayFromRange(from, to) {
    let array = [];
    for (let range = from; range <= to; range++) {
        array.push(range);
    }
    return array;
}

console.log(arrayFromRange(0, -4));

function includes(array, searchElement) {
    for (let value of array) {
        if (value === searchElement) return true;
    }
    return false;
}

console.log(includes(arrayFromRange(-10, 4), 7));

function except(targetArray, exceptionsArray) {
    let resultArray = [];
    for (let targetElement of targetArray) {
        if (!exceptionsArray.includes(targetElement)) {
            resultArray.push(targetElement);
        }
    }
    return resultArray;
}

console.log((except(arrayFromRange(-10, 5), [-2, -6, 0, 1, 5, 3])));


function move(array, index, offset) {
    if (offset < 0) {
        if (index + offset < 0) {
            console.error('Invalid offset.');
            return;
        }
        for (let i = index; i > index + offset; i--) {
            let temp = array[i];
            array[i] = array[i - 1];
            array[i - 1] = temp;
        }
    } else if (offset > 0) {
        if (index + offset >= array.length) {
            console.error('Invalid offset.');
            return;
        }
        for (let i = index; i < index + offset; i++) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    return array;
}

console.log(move(arrayFromRange(0, 5), 3, 0));

function countOccurences(array, searchElement) {
    return array.filter(element => element === searchElement).length;
}


console.log(countOccurences([1, 1, 1, 2, 3, 4], 15));

function getMax(array) {
    /*  let max = array[0];
     for(let i = 1; i < array.length; i++) {
         if(max < array[i]) max = array[i];
     }
     return max; */
    return array.reduce((max, element) => (max < element) ? element : max);
}

console.log(getMax([1, 1, 1, 1, 3, 4, 2, 2, 2, 5, 16, 0, -7]));

const movies = [
    { title: 'a', year: 2018, rating: 4.3 },
    { title: 'b', year: 2018, rating: 4.1 },
    { title: 'c', year: 2017, rating: 4.5 },
    { title: 'd', year: 2018, rating: 3 }
]

function filterMovies(moviesArray) {
    return movies.filter(movie => movie.year >= 2018 && movie.rating >= 4)
        .sort((a, b) => (a.title < b.title) ? 1 : (a.title > b.title) ? -1 : 0)
        .forEach(movie => console.log(movie.title));
}

filterMovies(movies);

let run = function () { console.log(123); };
run.call();
run();
let run2 = run;
run2();

function sumsum() {
    if (arguments.length == 0) return undefined;

    let sum = 0;
    for (let value of arguments) {
        sum += value;
    }

    return sum;
}

console.log(sumsum(1, 2, 3, 4));

function sumsumsum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sumsumsum(1, 2, 3, 4, 5));

let human = {
    firstName: '',
    lastName: '',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') throw new Error('Value is not a string.');

        const parts = value.split([' ']);
        if (parts.length !== 2) throw new Error('Enter first and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {
    human.fullName = 'Artem Petrov';
} catch(e) {
    console.log(e);
}
  
console.log(human.fullName);

let smth = {
    first: 1,
    second: [1,2,3,4,5],
    f() {
        this.second.forEach(elem =>  console.log(this.first, elem));
    }
};

smth.f();

function somefunction() {
    console.log(this);
}

somefunction.call({ name: 1}, 1, 2, 3);
somefunction.apply({}, [1,2,3,4,5]);
let  fff = somefunction.bind({FUCKTHEWAR: 123});
fff();

function newSum(...args) {
    if(args.length === 0) return undefined;
    
    let sum = 0;
    for(let value of args) {
        if(Array.isArray(value)) {
            for(let valueInValue of value) {
                sum += valueInValue;
            }
        } else sum += value;
    }
    return sum; 
 }

console.log(newSum([1,2,3,4], [1,2,3,4]));

let circle123 = { 
    radius: 1,
    get area() {
        return Math.pow(this.radius * 3.14, 2);
    }
   
}

circle123.radius = 5;
circle123.area = 5;
console.log(circle123);
console.log(circle123.area);

function countOccurences2(array, searchElement) {
    if(!Array.isArray(array)) throw new Error('Its not an array.')
    return array.filter(element => element === searchElement).length;
}

try {
    let count = countOccurences2(true, 5);
} catch(e) {
    console.log(e);
}
