function solution(num_list) {
    var answer = num_list.sort((a,b)=>a-b);
    return answer.splice(0,5);
}