// let number = [2,8,9,4,3,5,1,7]

// number.pop()
// number.push(11) 

// number.shift()
// number.unshift(43)

// console.log(number)

let numbers = [20,311,12,11,13,15,9,4,0,10]

let even =[];
let odd = [];
  
    for( let i=0; i < numbers.length; i ++)
      if (numbers[i] % 2==0) 

{
    even.push(numbers[i])
}
else{
    odd.push(numbers[i])
}
console.log(even)
console.log(odd)

