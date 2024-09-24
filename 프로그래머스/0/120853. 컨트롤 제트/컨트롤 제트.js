function solution(s) {
    let result = 0 
    let newS = s.split(" ")
    for(let i=0;i < newS.length ; i++){
        if(newS[i] != "Z"){
            result += Number(newS[i])
        }else if(newS[i] == "Z"){
            result -= Number(newS[i-1])
        }
    }
    return result 
}