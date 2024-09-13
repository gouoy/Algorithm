function solution(arr, n) {
    let i= 0; 
    for(i;i< arr.length ; i++){
     if(arr.length % 2 == 0){
        if(i % 2 != 0){
          arr[i] = arr[i]+n ; 
        }
    }else{
        if(i % 2 ==0){
           arr[i] = arr[i]+n
        }
    }
    }

    return arr 
}