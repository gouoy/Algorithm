function solution(strArr) {
    var answer = [];
    strArr.filter((i)=> i.includes("ad")? null : answer.push(i))
    return answer
}