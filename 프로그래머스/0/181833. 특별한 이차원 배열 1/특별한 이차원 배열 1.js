function solution(n) {
    var answer = [];
    for(let i=0; i<n;i++){
        let row = [] 
        for(let j=0;j<n;j++){
           i===j ? row.push(1) : row.push(0)
        }
        answer.push(row)
    }
    return answer;
}