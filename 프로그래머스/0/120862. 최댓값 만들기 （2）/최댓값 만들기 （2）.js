function solution(numbers) {
   const arr =  numbers.sort((a,b)=>a-b);
   const min =  arr[0]*arr[1]
   const max =  arr[arr.length-1]*arr[arr.length-2]
   return min > max ? min : max 
}