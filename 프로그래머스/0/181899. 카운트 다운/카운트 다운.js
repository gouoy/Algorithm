function solution(start_num, end_num) {
    let result = [];
    while(start_num >= end_num){
        result.push(start_num)
        start_num --;
    }
    
    return result
}
