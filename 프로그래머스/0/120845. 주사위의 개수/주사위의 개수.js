function solution(box, n) {
    var answer = 0;
    
    answer = box.map((item)=> parseInt(item/n))
    answer = answer.reduce((item,idx)=> item*idx ,1)
    return answer;
    
}