function solution(number) {
    // num = Number(number) % 9 
    let result = [...number].reduce((i,cur)=>Number(i)+Number(cur),0)
    
    return result %9 
}