function solution(my_string, indices) {
    var answer = '';
    num = 0 ; 
    let val = indices.sort((a,b)=>a-b)
    for(let i=0;i<my_string.length;i++){
      i !== indices[num] ? answer += my_string[i] : num++; 
    }
    return answer
}
// my_string 번호가 indices와 일치할 때 
// indices의 넘버가 있으면 continue
// 없으면 push 