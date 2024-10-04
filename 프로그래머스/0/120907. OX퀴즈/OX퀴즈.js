function solution(quiz) {
    let answer = []
    let ope = {
        "+" (a,b) {return a + b}, 
        "-" (a,b) {return a - b }
    }
    for(let i=0; i<quiz.length;i++){
    let arr = quiz[i].split(" ")
    let result = ope[arr[1]](Number(arr[0]), Number(arr[2]));
    
     result == arr[4] ? answer.push("O") : answer.push("X")
    }
    
    return answer 
}