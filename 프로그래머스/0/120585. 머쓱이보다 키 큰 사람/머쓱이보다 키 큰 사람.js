function solution(array, height) {
    var answer = 0;
    // array.map((i)=> i>height? answer+=1 : null)
    array.forEach((i)=> i>height? answer+=1:null)
    return answer;
}