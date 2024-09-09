function solution(s){
    var answer = true;
    var zin = s.toLowerCase().split("");
    let p = 0;
    let y = 0; 
    let hoi = zin.map((i)=>{i=="p"? p+=1 : i=="y"? y+=1 : 0 });
    
    return p==y? answer : !answer
}