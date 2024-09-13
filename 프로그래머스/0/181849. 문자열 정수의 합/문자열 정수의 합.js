function solution(num_str) {
    return num_str.split("").map((item)=>item*1).reduce((acc,cur)=> acc+cur,0)
}