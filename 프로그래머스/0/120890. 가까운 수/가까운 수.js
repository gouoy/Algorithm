function solution(array, n) {
    array.push(n)
    array.sort((a,b)=>a-b) 
    let num = array.indexOf(n)
    const small = array[num] - array[num-1] 
    const big = array[num+1] - array[num]
    if(array[num+1] != undefined && array[num-1] != undefined){
        return small <= big ? array[num-1] : array[num+1]
    }else if(array[num+1] != undefined){
        return array[num+1]
    }else{return array[num-1]}
}