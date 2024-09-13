function solution(num_list, n) {
   const isTrue = num_list.filter((item)=> item == n ) 
   return isTrue.length != 0 ? 1 : 0; 
}