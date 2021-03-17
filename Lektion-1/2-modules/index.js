// import user from './user';
// const hej = require('./user');
// console.log(hej);

const User = require('./user');

const user1 = new User('Joakim', 'Wahlström');

user1.greet();


// const names = require('./module');

// console.log(names.names);

const { names, ages } = require('./module');

console.log(names);
console.log(ages);