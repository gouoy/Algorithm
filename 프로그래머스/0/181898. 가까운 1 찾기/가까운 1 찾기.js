function solution(arr, idx) {
    let getNum = arr.slice(idx,)
    if(getNum.includes(1)){
        return getNum.indexOf(1)+idx 
    }else{
        return -1 
    }
}