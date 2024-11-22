function solution(str_list) {
    var answer = [];
    const l = str_list.indexOf("l");
    const r = str_list.indexOf("r"); 
    // 1. 둘 다 값이 -1
    // 2. 하나는 값이 있고, 하나는 값이 없을 때 큰 값을 기준으로
    // 3. 둘다 값이 있으면 작은 걸 기준으로 -> l, r 
    if(l === -1 && r === -1){
        return answer 
    }
    switch(true){
        case l === -1 : 
           return answer = str_list.slice(r+1,) ;
           break; 
        case r === -1 :
            return answer = str_list.slice(0,l);
            break ; 
        case l < r : 
            return answer = str_list.slice(0,l); 
            break;
        case r < l : 
            return answer = str_list.slice(r+1,) ;
            break ; 
            
    }
}