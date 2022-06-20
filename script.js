'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

// rest2.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// THIS IS A SHORTER VERSION OF THE OR SHORT CIRCUIT CODE ABOVE

// THE OR ASSIGNMENT OPERATOR
//this assigns a value to a variable if the variable is currently falsy

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
//
// console.log(rest1);
// console.log(rest2);

// This may not work if you start with 0 as the first value - which is falsy to start
// be careful to zeros

// THERE IS A FIX FOR THE ZERO CASE

// the fix is

// nullish assignment operator(null or undefined)
// this code means make it 10 if it is null or undefined - otherwise use the value it is

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANNONYMOUS>'
rest2.owner = rest2.owner && '<ANNONYMOUS>'

// and prints the first falsy value
console.log(rest1)
// this will give you undefined for owner

console.log(rest2)
// this will give you <ANNONYMOUS> for owner

// assigns a value to a variable if it is currently truthy
// otherwise it is not even there so nothing happens
rest1.owner &&= '<ANNONYMOUS>';
rest2.owner &&= '<ANNONYMOUS>';