function reverseString(str) {
  let reversed = " ";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
console.log(reverseString(helloimene));



function countcaracter(str) {
    return str.length;
}
console.log(countcaracter("imene"));


function capitalizeWords(sentence) {
    return sentence
    split(" ");
    Map(word => word.charAt(0).toUpperCase() + word.slice(1));
    join(" ");
}
console.log(capitalizeWords("hello imene"));
function findMaxMin(arr) {
  if (arr.length===0) then 
  return {max: null, min: null };

  
}
let max = arr[0];
let min = arr[0];

for (let i=0; i < arr.length; i++){

if (arr[i]> max){

  max = arr[i];
}

if (arr[i]< min) {

  max = arr[i];
  
}


return { max,min };


}
console.log("Maximum:", Result.max);
console.log("Minimum:", Result.min);

function sumArray(arr) {

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    
  }

return sum 
}
console.log("sum:",Result);

 function filterArray(arr) {

    let filtered = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 10) {
            filtered.push(arr[i]);
        }
    }

    return filtered;
}
console.log(filterArray(numbers));

function factorial(n) {

 let Result = 1;

 for (let i = 0; i <= n; i++) {
  

  Result = Result * i;
  
 }
 return Result; 
}

function isPrime(n) {


  if (n < 2) {
    return false;

    //psq 0 ou 1 machi prime 
    
  }

for (let i = 2; i < n; i++) {
  


  if (n % i === 0) {

    return false;
  }
  
}

return true;

}

function fibonacci(n) {

 let a = 0;
 let b = 1;


   let sum = [];

   for (let i = 0; i < n; i++){
     sum.push(a);

     let next = a + b;
     a = b;
     b = next;



   }

   return sum;


  
}