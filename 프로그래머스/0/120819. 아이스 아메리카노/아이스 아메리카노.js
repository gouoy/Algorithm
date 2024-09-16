function solution(money) {
    const a = Math.trunc(money/5500); 
    const b = money - a*5500 
    return [a,b]
}