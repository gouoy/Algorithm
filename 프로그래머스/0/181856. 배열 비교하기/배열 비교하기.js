function solution(arr1, arr2) {
    let sum1 = arr1.reduce((e,i)=>e+i,0);
    let sum2 = arr2.reduce((e,i)=>e+i,0); 
    
  return  arr1.length > arr2.length ? 1 : arr1.length < arr2.length ? -1 : sum1 > sum2 ? 1 : sum1 < sum2 ? -1 : 0 
}