function solution(myString) {
    var list = myString.split('x').sort()
    while(list[0] == ""){
    list.shift()     
    }
    return list
}