function solution(age) {
    let answer = []
    let str = ["a","b","c","d","e","f","g","h","i","j"]
    let ageStr = age+"";
    
    for(let i=0;i< ageStr.length;i++){
        answer += str[ageStr[i]]
    }
    return answer
}