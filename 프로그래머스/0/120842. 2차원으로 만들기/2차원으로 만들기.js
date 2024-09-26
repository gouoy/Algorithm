function solution(num_list, n) {
    var answer = [[1,2]];
    const numLeng = num_list.length 
    let arr = Array.from(Array(numLeng/n), ()=>Array(n).fill(0)) 
    for(let i=0;i<numLeng/n;i++){
        for(let j=0; j<n; j++){
            arr[i][j] = num_list[j+i*n]
        }
    }
    return arr
}