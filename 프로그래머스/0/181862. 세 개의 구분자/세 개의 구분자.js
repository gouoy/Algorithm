function solution(myStr) {
    var answer = [];
    var result = [] 
    answer = myStr.replaceAll("b","a")
    answer = answer.replaceAll("c","a")
    answer = answer.split("a")
    result = answer.filter((str)=> str !== "" )
    return result.length > 0 ? result : ["EMPTY"]
}