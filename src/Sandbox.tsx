/* eslint-disable max-classes-per-file */

// eg. 1
function echo<T>(arg: T): T {
  return arg;
}

const myString: number = echo(5);

console.log('myString: ', myString);

// eg. 2

export class Person {
  firstName: string;

  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Admin extends Person {}

class Manager extends Person {}

const admin = new Admin('a', 'a');
const manager = new Manager('a', 'a');

function personEcho<T extends Person>(person: T): T {
  console.log(person.firstName);
  return person;
}

const foo = personEcho(admin);
const bar = personEcho(manager);

console.log('foo: ', foo);
console.log('bar: ', bar);

// eg. 3

type numArray = Array<number>;

const arr: numArray = [23423, 234];
