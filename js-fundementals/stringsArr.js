// let numbers = ["M","R","D","K","L","R","I","O"]

//let nums = [4,3,-10,-4,2,6,7,8,0]

//let min=[]
//let max =[]
 
//nums.sort((a,b) => a-b)
//console.log(nums)

//let nums = [10,30,40,50,70,90,80]

//nums.reverse();\


//console.log("reversed array is : " + nums);


// function maxAndmin (numbers){
//     let obj = {}
//     numbers.sort( (a,b) => a-b)
//     obj["minNumber"] = numbers [0]
//     obj["maxNumber"] = numbers [numbers.length-1]
    
//     return obj
// }
// maxAndmin ([])
// let firstApp = maxAndmin ([-10,20,50,-30])

// console.log(firstApp)



// function strReversed (text){
//     let reversed = "";
//     for (let i = 0; i < 10;i++){

//         reversed = text[i] + reversed;
//     }
//     console.log(reversed);
// }

// strReversed ()
// strReversed ("Javascript is super easy")


// function calcSalary (hr,h,d,pci = 1.00){
//     let calcSalary = hr*h*d*pci

//     console.log(calcSalary)

// }

// calcSalary(32,7,20,1.2)


function emailGen (fname="Jon",iname="Doe"){

    let email = fname+"." +iname+"@gsb.co.za"

    return email.toLowerCase()
}
console.log(emailGen("Khanyisa Mgunculu"))


let num1 = [1,3,5,7]
let num2 = [0,2,4,6]
let num3 = [num1,num2]
let num4 = num1.concat(num2)

console.log("this is num3",num3)