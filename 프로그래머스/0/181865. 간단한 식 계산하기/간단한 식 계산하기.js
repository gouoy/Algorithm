function solution(binomial) {
    let op = ''; 
    let arr = binomial.split(" ")
   return arr[1] == '*' ? Number(arr[0])*Number(arr[2]): arr[1] == '-' ? Number(arr[0])-Number(arr[2]) : Number(arr[0])+Number(arr[2])
    
}