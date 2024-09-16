function solution(array, n) {
    let answer =0 
    array.map((i)=>i==n? answer+=1:null)
    return answer 
}