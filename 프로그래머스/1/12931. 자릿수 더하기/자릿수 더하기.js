function solution(n){  
   const arr = Array.from(n.toString())
   const result = arr.reduce((acc,cur) => Number(acc)+Number(cur),0)
   return result
}