function solution(order) {
    let answer= 0
    order.reduce((item,idx) => idx.includes("cafelatte") ? answer+=5000 : answer+=4500,0 )
    return answer
}