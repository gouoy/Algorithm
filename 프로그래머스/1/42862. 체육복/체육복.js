function solution(n, lost, reserve) {
    var answer = 0;
    let plus1 = lost.map((i)=>i+1) 
    let minus1 = lost.map((i)=>i-1) 
    // let pVal = plus1.reduce((i)=> reserve.includes(i) ? answer +=1 : null)
    // return pVal
    for(let i in plus1){
        reserve.includes(i) ? answer += 1 : null 
    }
    return  reserve.includes(3)
}


