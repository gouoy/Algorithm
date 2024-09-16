function solution(my_string) {
    var arr = [...my_string.toLowerCase()].map((item)=> item.charCodeAt()).sort((a,b)=>a-b)
    return arr.map((i)=>String.fromCharCode(i)).join("")
}