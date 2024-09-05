function solution(num_list) {
    var answer = [];
    const lastNum = num_list.length-1 ;
    
    num_list[lastNum] > num_list[lastNum-1] ? answer.push(Number(num_list[lastNum])-Number(num_list[lastNum-1])) : answer.push(Number(num_list[lastNum]*2))
    
    return num_list.concat(answer);
}