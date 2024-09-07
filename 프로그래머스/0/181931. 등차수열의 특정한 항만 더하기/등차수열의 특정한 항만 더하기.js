function solution(a, d, included) {
    
   return included.reduce((acc,flag,i)=>{
                 return   flag? acc + a + i*d : acc; 
                    },0)
    
}
//우수자 문제 풀이를 보고 다시 풀어봄 