function solution(numLog) {
    var answer = [];
    for(let i=0;i<numLog.length;i++){
      switch(true){
        case numLog[i+1] - numLog[i] == 1 :
        answer.push("w");
        break; 
        case numLog[i+1] - numLog[i] == -1 :
        answer.push("s");
        break; 
        case numLog[i+1] - numLog[i] == 10 :
        answer.push("d")
        break; 
        case numLog[i+1] - numLog[i] == -10 :
        answer.push("a")
        break; 
      }
    }
    return answer.join("")
    
}