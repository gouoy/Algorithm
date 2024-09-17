function solution(i, j, k) {
    var answer = '';
    for(i ; i<=j;i++){
        answer = answer +i
    }
    return [...answer].filter((item)=> item==k).length 
}