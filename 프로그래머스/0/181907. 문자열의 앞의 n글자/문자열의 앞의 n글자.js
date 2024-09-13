function solution(my_string, n) {
    const str = my_string.split("")
    str.length = n ;
    return str.join("");
}