function solution(code) {
   let answer = ""
   let mode = 0
   for(let i=0; i<code.length ; i++){  
       if(parseInt(code[i]) === 1){
         mode === 0 ? mode = 1 : mode = 0
         continue; 
       }
       
       if(!mode && i % 2 === 0){
            answer += code[i]
       }else if(mode && i % 2 !== 0 ){
           answer += code[i]
       }
   }
   return answer === "" ? "EMPTY" : answer 
}
