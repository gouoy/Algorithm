function solution(numbers) {
    let num = numbers.reduce((e,i)=> e+i,0) 
    return  num / numbers.length
  
}