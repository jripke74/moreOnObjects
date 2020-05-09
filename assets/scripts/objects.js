const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'photography'],
  greet: function() {
    alert('Hi there!');
  }
};

// ...

// person.age = 31;
delete person.age;
// person.age = null;
// person.age = undefined;
person.isAdmin = true;

console.log(person);