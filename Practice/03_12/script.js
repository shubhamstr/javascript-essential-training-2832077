/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";

class Pen extends Backpack {
  constructor(
    name,
    volume,
    color
  ) {
    super("backpack", 10, "red", 22, 26, 26, false);
    this.name = name;
    this.volume = volume;
    this.color = color;
  }
  setColor(newColor) {
    this.color = newColor;
  }
}

console.log("This is a Pen object:", new Pen("Pen", 10, "red"));