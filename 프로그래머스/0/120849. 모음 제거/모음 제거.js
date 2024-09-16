function solution(my_string) {
    obj = ["a","e","i","o","u"]
   return [...my_string].filter((i)=> !obj.includes(i)).join("")
}