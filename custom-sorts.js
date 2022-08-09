function ageSort(users) {
  // Your code here
  return users.sort((user1, user2) => user1.age - user2.age);
}

function oddEvenSort(arr) {
  // Your code here
}

function validAnagrams(s, t) {
  // Your code here
}

function countDigits(num) {
  if (num === 0) {
    return 1;
  }

  let count = 0;
  while (num) {
    count += 1;
    num = Math.floor(num / 10);
  }

  return count;
}

function compBase(a, b) {
  countA = countDigits(a);
  countB = countDigits(b);

  if (countA === countB) {
    return a - b;
  }

  if (countA > countB) {
    return -1;
  }

  return 1;
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort(compBase);
}


function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
