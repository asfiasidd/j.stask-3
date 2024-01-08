// Javascript Assignment
// 1. **Map Transformation:**
//- Q: Given an array of integers, use the `map` method to square each element and return a new array with the squared values.

// function mapTransformation(arr) {
//     return arr.map(num => num * num);
// }

// console.log(mapTransformation([2, 3, 4]));
 // Output: [4, 9, 16]


//2. **Filter and Map Combination:**
//- Q: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method.

// const stringArray = ["apple", "banana", "kiwi", "orange", "grape"];
// const filteredAndCapitalizedArray = stringArray
//   .filter((str) => str.length >= 5)
//   .map((str) => str.toUpperCase());

// console.log(filteredAndCapitalizedArray);
//Output:  ['APPLE', 'BANANA', 'ORANGE', 'GRAPE']



//3. **Sorting Objects:**
//- Q: Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices.

// const products = [
//   {name: 'Product A', price: 10},
//   {name: 'Product B', price: 5},
//   {name: 'Product C', price: 15}
// ];
// console.log(products);


//4. **Reduce for Aggregation:**
//- Q: Use the `reduce` method to find the total sum of all even numbers in an array of integers.

// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce((acc,curr) =>{
//   if (curr % 2 === 0){
//     return acc + curr
//   }
//   return acc;
// },
//  0);
// console.log(sum);



//5. **Find and Modify:**
//- Q: Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'.

// const tasks = [
//   { id: 1, status: 'pending' },
//   { id: 2, status: 'in progress' },
//   { id: 3, status: 'pending' }
// ];

// const taskIdToUpdate = 2;

// const taskToUpdate = tasks.find(task => task.id === taskIdToUpdate);

// if (taskToUpdate) {
//   taskToUpdate.status = 'completed';
//   console.log(tasks);
// } else {
//   console.log("Task not found!");
// }



// 6. **Chaining Methods:**
// - Q: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.

// const numbers = [-5, 10, 3, -2, 8, -1, 6];
// const average = numbers
//   .filter(number => number > 0) 
//   .reduce((sum, number, index, array) => {
//     sum += number;
//     if (index === array.length - 1) {
//       return sum / array.length; 
//     }
//     return sum;
//   }, 0)
//   .toFixed(2); 
// console.log(average);
// Output: 6.75



//7. **Conditional Filtering:**
//- Q: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method.

// function filterAdults(people) {
//   return people.filter(person => person.age >= 18);
// }
// const people = [
//   { name: 'John', age: 25 },
//   { name: 'Sarah', age: 16 },
//   { name: 'Michael', age: 32 },
//   { name: 'Emma', age: 20 }
// ];

// const adults = filterAdults(people);
// console.log(adults);



//8. **Advanced Sorting:**
//- Q: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.

// function filterAdults(people) {
//   return people.filter(person => person.age >= 18);
// }
// const people = [
//   { name: 'Sana', age: 25 },
//   { name: 'Sarah', age: 16 },
//   { name: 'Erum', age: 20 }
// ];
// const adults = filterAdults(people);
// console.log(adults);


//9. **Nested Array Operations:**
//- Q: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.

// function flattenAndSum(arr) {
//   const flattenedArray = arr.flat(); // Flatten the array
//   const sum = flattenedArray.reduce((total, num) => total + num, 0); // Calculate the sum
//   return sum;
// }
// const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8]];
// const sum = flattenAndSum(nestedArray);
// console.log(sum);
// Output: 36



//10. **Error Handling with Find:**
//- Q: Modify the `find` method to handle the scenario where the desired element is not found, returning a custom default object instead.

// function findWithDefault(arr, condition, defaultValue) {
//   const result = arr.find(condition);
//   if (result === undefined) {
//     return defaultValue; 
//   }
  
//   return result; 
// }

// const numbers = [1, 2, 3, 4, 5];
// const desiredNumber = findWithDefault(numbers, (num) => num === 6, "Not found");
// console.log(desiredNumber);
//Output: not found


//11. **Map Method:**
//- Q: How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?

// const originalArray = [
//   { name: 'Zara', age: 25 },
//   { name: 'Sana', age: 30 },
//   { name: 'Erum', age: 35 }
// ];
// const modifiedArray = originalArray.map((person) => {
//   return {
//     name: person.name.toUpperCase(),
//     age: person.age + 1
//   };
// });

// console.log(modifiedArray);



//12. **Filter Method:**
// Q: Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((number) => {
//   return number % 2 === 0;
// });

// console.log(evenNumbers);
// Output: [2, 4, 6, 8, 10]


//13. *Sort Method:*
// Q: Discuss the default behavior of the sort method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?

// const products = [
//     {name: ' Apple', price: 20},
//     {name: ' Banana ', price: 15},
//     {name: ' Mango', price: 30}
//   ];
// products.sort((a,b)=>{
//   return b.price - a.price;
// })
//   console.log(products);
  

//14. **Reduce Method:**
//- Q: Describe the purpose of the `reduce` method and provide an example where you use it to compute a single value from an array of numbers.
  
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// console.log(sum);
 // Output: 15



//15. **Find Method:**
//- Q: How does the `find` method differ from `filter`? Give an example of a scenario where using `find` is more appropriate than `filter`.

// const books = [
//   { title: 'Book 1', price: 15 },
//   { title: 'Book 2', price: 8 },
//   { title: 'Book 3', price: 12 },
// ];
// const bookBelowTen = books.find((book) => book.price < 10);

// console.log(bookBelowTen); 
// Output: { title: 'Book 2', price: 8 }


//17. **Callback Functions:**
//- Q: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the `map` method.

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(function(number) {
//   return number * number;
// });

// console.log(squaredNumbers);
 // Output: [1, 4, 9, 16, 25]


//19. **Immutable Operations:**
//- Q: Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`.

const numbers = [1,2,3,4,5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(numbers); 
// Output: [1, 2, 3, 4, 5]
console.log(doubledNumbers);
//  Output: [2, 4, 6, 8, 10]


















