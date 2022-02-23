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
