function solution(n) {
    let arr = n.toString().split("")
    return arr.reduce((i,e)=>Number(i)+Number(e),0)
}