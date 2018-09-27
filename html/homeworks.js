/******** Largest of four */
function largestOfFour(arr) {
  return arr.map(subArray => Math.max(...subArray));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
[5, 27, 39, 1001]

/******** Factorialize */
function factorialize(num) {
  let sum = 1;
  for(let i = 1 ; i <= num ; i++) {
    sum = sum * i;
  }
  return sum;
}

factorialize(5);

/******** Trauncate string */
function truncateString(str, num) {
  let truncated = str.slice(0, num);
  if (truncated.length != str.length) {
    truncated += '...';
  }
  return truncated;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// 2nd solution
function truncateString2(str, num) {
  let truncated = '';
  for(let i = 0; i < num && i < str.length; i++) {
    truncated += str[i];
  }
  if (truncated.length != str.length) {
    truncated += '...';
  }
  return truncated;
}

truncateString2("A-tisket a-tasket A green and yellow basket", 8);