function solution(n_str) {
    let arr = n_str.split(""); 
    if(arr[0] == 0){
       while(arr[0] == 0){
        arr.shift();
       }
     return arr.join("")
       } 
    return arr.join("") 
}