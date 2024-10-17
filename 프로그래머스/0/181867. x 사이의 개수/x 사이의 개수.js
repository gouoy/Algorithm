function solution(myString) {
   let newArr = myString.split("x")
   return newArr.map((_,idx)=>newArr[idx].length)
}