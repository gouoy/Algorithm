function solution(dot) {
    [a,b] = dot 
    return a >0 && b>0 ? 1 : a<0 && b<0 ? 3 : a>0 && b<0 ? 4 : 2 ; 
}