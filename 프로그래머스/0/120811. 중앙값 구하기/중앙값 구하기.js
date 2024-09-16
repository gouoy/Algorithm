function solution(array) {
    var answer = 0;
    let arr = array.sort((a,b)=>a-b)
    return arr[Math.trunc(arr.length/2)]
}