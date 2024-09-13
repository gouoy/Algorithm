function solution(myString, pat) {
    var newArr = Array.from(myString); 
    newArr = newArr.map((item)=> item == "A" ? item =  "B" : item = "A" ); 
    newArr = newArr.join("") 
    return newArr.indexOf(pat) != -1 ? 1 : 0 ; 
}