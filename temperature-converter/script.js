//function ctof(c){

// let temp = Fahrenheits;
// let ctof = c*9/5+32
//return f=c*9/5 + 32

//}

//console.logs(ctof(10))

//function converT(f)

// let num = [5,4,3,2,1,0,1,2,3,4,5]
//  let sum = 0
//  for(let y=0; y < num.length; y++){
//     sum += num[y]
//  }
//  console.log(sum)

function fahToCel(){

   let a = Number(document.getElementById("celcius").value)

   let b =(f-32)*5/9

   result = document.getElementById("result")
   result.innerHTML = b 

   if(!f) result.innerHTML = ("please enter a value.")
   
   else if(isNaN(f)) result.innerHTML = ("please enter a value")

   else if(b<-273.15) result.innerHTML = ("it can not be this cold")

   else if(b<16){
      result.innerHTML = (b +"°" + " " + " " + "it's cold, wear a jersey")
   }
   else if(b<=21 && b>=16){
      result.innerHTML = (b+"°" + " " + " " + "it's warm, wear a t-shirt")
   }
   else if(c>21)
   result.innerHTML =(b+"°" + " "+" "+"it's hot, wear shorts")
}