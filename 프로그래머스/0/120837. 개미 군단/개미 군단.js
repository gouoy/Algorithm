function solution(hp) {
    const a = Math.floor(hp/5)
    const b = Math.floor((hp-(5*a))/3)
    const c = Math.floor((hp-(5*a+b*3))/1)
    return a+b+c
}