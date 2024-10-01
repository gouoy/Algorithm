function solution(n) {
    let i=2 ; 
    var answer = [] ;
    while(n > 1){
        if(n%i === 0){
            answer.push(i); 
            n = n/i
        }else{
            i++
        }
       
    }
    return [...new Set(answer)];
}