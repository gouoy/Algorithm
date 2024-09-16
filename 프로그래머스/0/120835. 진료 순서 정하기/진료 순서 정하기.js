function solution(emer) {
    var answer = [...emer].fill(0);
    for(let i=0; i<emer.length;i++){
        for(let j=0; j<emer.length;j++){
            if(emer[i] <= emer[j]){  
                answer[i] += 1; 
           }   
        }
    }
    return answer 
}
