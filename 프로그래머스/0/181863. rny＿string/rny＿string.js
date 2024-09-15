function solution(rny_string) {
    var answer = '';
    var newArr = rny_string.split("");
    for(let i = 0; i<newArr.length; i++){
        newArr[i] == "m" ?  newArr[i] = "rn" : null 
    }
    return newArr.join("")
}