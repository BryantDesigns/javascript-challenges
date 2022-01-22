// class User {
//   constructor(username, password, age) {
//     this._username = username;
//     this._password = password;
//     this.age = age;
//   }
// }
// const userOne = new User('BryantDesigns', 'Tbryant1', 30);
// console.log(userOne.age);

const username = Symbol('username');
const password = Symbol('password');

const user = {
  [username]: 'BryantDesigns',
  [password]: 'Tbryant1',
  age: 30,
}
console.log(user.username, user.password, user.age);
/*
  WRITE YOUR SOLUTION HERE
*/
