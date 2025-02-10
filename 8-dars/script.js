const add = function (...numbers) {
  let sum = numbers.reduce((acc, val) => acc + val, 0);
  console.log(sum);
};

add(10, 50, 2, 3);


