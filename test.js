// let balance = 100000;
// const payment = 2000;

// const message = `Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`;
// console.log(message);
// if (payment <= balance) {
//   balance -= payment;
//   console.log('Все хорошо, снимаем деньги за покупку...');
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log('На счету недостаточно средств для проведения операции!');
// }
// console.log('Операция завершена');

// let totalSpent = 1000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
//   console.log('Бронзовый партнер, скидка 2%');
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 0.05;
//   console.log('Серебрянный партнер, скидка 5%');
// } else if (totalSpent >= 5000) {
//   discount = 0.1;
//   console.log('Золотой партнер, скидка 10%');
// } else {
//   console.log('У вас еще нет партнерской скидки');
// }
// payment -= payment * discount;
// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}% `,
// );
// totalSpent += payment;
// console.log(`Общая сума потраченая в магазине : ${payment}`);
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log('biggestNumber: ', biggestNumber);

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// clients.pop();
// console.log(clients);

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1, 4));

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3));
// console.log(multiply(1, 2, 3, 4));
// console.log(multiply(1, 2, 3, 4, 5));

// const gCw = function (array1, array2) {
//   let result = [];
//   const array3 = array1.concat(array2);
//   console.log(array3);
//   for (let i = 0; i < array3.length; i += 1) {
//     if (array3[i] === array3[i + 1]) {
//       result.push(array3[i]);
//     }
//   }
//   return result;
// };

// array1 = [1, 2, 2, 4, 5];
// array2 = [1, 2, 3, 5, 8];

// console.log(gCw(array1, array2));

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const normalizedMessage = message.toLowerCase();
//   result =
//     normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
//   // Change code above this line
//   return result;
// }
// result= checkForSpam('sale');
// console.log(result);

// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }
// console.log(calculateTotal(5));

// function findLongestWord(string) {
//   // Change code below this line
//   let longestWord = '';
//   const arrayOfWords = string.split(' ');
//   for (const word of arrayOfWords) {
//     if (word.length >= longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;

//   // Change code above this line
// }

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// function getCommonElements(array1, array2) {
//   const result = [];
//   for (const item of array1) {
//     if (array2.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// function arrayDiff(a, b) {
//   let array = [];

//   for (const item of a) {
//     if (!b.includes(item)) {
//       array.push(item);
//     }
//   }

//   for (const item of b) {
//     if (!a.includes(item)) {
//       array.push(item);
//     }
//   }
//   return array;
// }
// console.log(arrayDiff([1, 2, 3, 4, 5], [1, 2]));
// const arr = ['BEST', 'the', 'foo', 'is', 'JS'];

// let indexFoo = arr.indexOf('foo');
// arr.splice(indexFoo, 1);

// console.log(arr.join(' '));

// const arr = ['BEST', 'the', 'foo', 'is', 'JS'];
// let arrayFoo = [];
// let indexFoo = arr.indexOf('foo');
// arrayFoo.push(arr.splice(indexFoo, 1));
// let string = arrayFoo.join('');
// console.log(string.split(''));

// const getMinValue = function (numbers) {
//   let minValue = numbers[0];

//   for (const number of numbers) {
//     if (number < minValue) {
//       minValue = number;
//     }
//   }

//   return minValue;
// };

// console.log(getMinValue([22, 11, 2222, 111]), '---getMaxValue');
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// function sumTwoSmallestNumbers(numbers) {
//   //Code here
//   let newNumbers = [];
//   let minValue1 = numbers[0];
//   let total = 0;

//   for (i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] < minValue1 && numbers[i] > 0 && numbers[i] % 1 === 0) {
//       minValue1 = numbers[i];
//     }
//   }

//   newNumbers.push(minValue1);
//   numbers.splice(numbers.indexOf(minValue1), 1);
//   console.log(newNumbers);
//   console.log(numbers);

//   let minValue2 = numbers[0];

//   for (i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] < minValue2 && numbers[i] > 0 && numbers[i] % 1 === 0) {
//       minValue2 = numbers[i];
//     }
//   }

//   newNumbers.push(minValue2);
//   numbers.splice(numbers.indexOf(minValue2), 1);
//   console.log(newNumbers);
//   console.log(numbers);
//   for (const number of newNumbers) {
//     total += number;
//   }
//   return total;
// }
// function sumTwoSmallestNumbers(numbers) {
//   return (
//     numbers
//       .sort(function (a, b) {
//         return a - b;
//       })
//       .shift() +
//     numbers
//       .sort(function (a, b) {
//         return a - b;
//       })
//       .shift()
//   );
// }
// console.log(sumTwoSmallestNumbers([14, 4, -3, -10, -5, 2.2, 3.5, 7, 0]));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let price = null;
//   for (const product of products) {
//     if (product.name === productName) {
//       price = product.price;
//     }
//   }
//   return price;

//   // Change code above this line
// }
// console.log(getProductPrice('Droid'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let propValues = [];
//   for (const product of products) {
//     if (!product.hasOwnProperty(propName)) {
//       return propValues;
//     }
//     propValues.push(product[propName]);
//   }

//   return propValues;
// }
// // Change code above this line

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let price = 0;
  for (const product of products) {
    if (product.name === productName) {
      price = product.price * product.quantity;
    }
  }

  return price;

  // Пиши код выше этой строки
}
console.log(calculateTotalPrice('Droid'));
