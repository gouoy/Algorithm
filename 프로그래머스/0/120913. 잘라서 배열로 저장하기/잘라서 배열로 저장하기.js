function solution(my_str, n) {
    const leng = my_str.length 
    my_str = [...my_str]
    let arr = []
    /*for(let i=0 ; i <my_str.length ; i++){
        let item = my_str.splice(0,n).join("") 
           arr.push(item)
       if ( my_str.length < n && my_str.length !== 0){
          arr.push(my_str.splice(0).join(""))
      }
    } */ 
    while(my_str.length > 0){
         let item = my_str.splice(0,n).join("") 
           arr.push(item)
    }
    return  arr
}