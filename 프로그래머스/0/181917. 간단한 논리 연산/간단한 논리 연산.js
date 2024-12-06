function solution(x1, x2, x3, x4) {
    var left = x1|x2 
    var right = x3|x4 
    left === 1 ? true : false 
    right === 1 ? true : false 
    return left && right ? true : false ; 
}