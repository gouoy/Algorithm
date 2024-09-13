function solution(my_string, index_list) {
    var answer = [];
    let arr = my_string.split('');
    
        for(let i =0; i<index_list.length;i++){
           let num = parseInt(index_list[i])
           answer.push(arr[num]);
        }
        const result = answer.join("");  
        return result 
}