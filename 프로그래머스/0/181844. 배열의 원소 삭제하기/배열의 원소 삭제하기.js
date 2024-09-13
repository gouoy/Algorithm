function solution(arr, deleteList) {
   return arr.filter((i)=>{return deleteList.includes(i)? null : i})
}