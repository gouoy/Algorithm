function solution(price) {
    let answer = 0; 
    switch(true) {
        case price >= 500000 : 
            answer = price - (price*0.2) 
            break;
        case price >= 300000 && price < 500000:
            answer = price - (price*0.1)
            break;
        case price >= 100000 && price < 300000 :
            answer = price - (price*0.05)
            break;
        default :
            return price; 
    }
    return Math.floor(answer)
}