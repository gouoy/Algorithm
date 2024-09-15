function solution(my_string) {
    const newArr =  my_string.trim().split(" "); 
    return newArr.filter((item)=> item != "")
}