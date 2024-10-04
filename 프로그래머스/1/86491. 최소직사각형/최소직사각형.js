function solution(sizes) {
    let max1 = [] 
    let min1 = [] 
    for(let i=0; i<sizes.length ; i++){
            let fir = sizes[i][0]
            let sec = sizes[i][1]
             max1.push(Math.max(fir,sec))
             min1.push(Math.min(fir,sec))
            } 
    
   return Math.max.apply(null, max1) * Math.max.apply(null, min1)
}