function solution(my_string) {
    return [...my_string]
        .filter((i,e)=> Number(i) == i )
        .reduce((a,b)=>a+Number(b),0)
}