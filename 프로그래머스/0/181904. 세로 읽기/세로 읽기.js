function solution(my_string, m, c) {
    var answer = [];
    let i = 0 
    let sentence = [...my_string]
    var result = ""
    while(sentence.length > 0){
         answer.push(sentence.splice(i,i+m))  
    }
    for( letter of answer ){
        result += letter[c-1] 
    }
    return result
}