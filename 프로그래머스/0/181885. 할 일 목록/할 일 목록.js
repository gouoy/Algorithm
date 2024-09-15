function solution(todo_list, finished) {
    var answer = [];
    // return answer;
    finished.filter((item,idx)=> item == 0 ? answer.push(todo_list[idx]) : null) 
    return answer
}