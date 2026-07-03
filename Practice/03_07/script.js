/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const myData = {
  name: "John Doe",
  age: 30,
  address: {
    currentAddress: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    },
    permanentAddress: {
      street: "456 Elm St",
      city: "Othertown",
      state: "NY"
    }
  },
  hobbies: ["reading", "traveling", "coding"],
  isEmployed: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },

}