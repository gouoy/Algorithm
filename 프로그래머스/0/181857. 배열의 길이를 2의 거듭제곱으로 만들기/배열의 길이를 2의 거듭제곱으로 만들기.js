function solution(arr) {
    var answer = [];
    let i = 2
    while(i < arr.length){
        if(i < arr.length){
            i *= 2
        }
    }
    for(let j = 0;j<i;j++){
        if(arr.length == 1){
            return answer = arr
        }else if(arr[j] !== undefined){
            answer.push(arr[j])
        }else{
            answer.push(0)
        }
    }
    return answer;
}