function solution(myString, pat) {
    var answer = 0;
    for(let i =0 ; i <= myString.length; i++){
      if(pat == myString.slice(i,pat.length+i)){
          answer+=1;
      }
    }
    return answer
}