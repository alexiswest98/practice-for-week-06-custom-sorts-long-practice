let compare = (a, b) => {
  return a.age - b.age; 

}


function ageSort(users) {
  // Your code here
  return users.sort(compare)
}

let compare2 = (a, b) => {

  // can we separate the vales to be in 2 arrays and combine at the end
  if( a % 2 === 0 && b % 2 === 0){
    return a - b;
  }
  if( a % 2 !== 0 && b % 2 !== 0){
    return a - b;
  }

  if (a % 2 === 0 && b % 2 !== 0){
    return 1;
  }
  if (a % 2 !== 0 && b % 2 === 0){
    return -1;
  }
}

function oddEvenSort(arr) {
  return arr.sort(compare2)
}

// let newArr = [1, 14, 9, 24, 17, 3]
// console.log(oddEvenSort(newArr))

let compare3 = (a, b) => {
  let a1 = a.charCodeAt(0)
  let b1 = b.charCodeAt(0)

  return a1 -b1;
}

function validAnagrams(s, t) {
  if(s.length !== t.length){
    return false;
  }

  let arrS = s.split('')
  let arrT = Array.from(t)

  let sortedS = arrS.sort(compare3)
  let sortedT = arrT.sort(compare3)

  let stringS = sortedS.join('')
  let stringT = sortedT.join('')

  return stringS === stringT;

}

let compare4 = (a, b) => {
  let counter = 0;
  
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

let countFrequency = array => {
  let obj = {}
  array.forEach(num => {
    if (obj[num]){
      obj[num]++;
    }
    else obj[num] = 1;
  })
  return obj;
}

// const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
// console.log(countFrequency(arr3))



function frequencySort(arr) {
  let obj = countFrequency(arr);
  
  function compare5(a, b) {
    if(obj[a] === obj[b]){
      return b - a;
    }
    if(obj[a] > obj[b]){
      return 1;
    }
    else {
      return -1;
    }
  }
  return arr.sort(compare5);
}


const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
console.log(frequencySort(arr3))

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
