function solution(array, commands) {
    let result = [] 
    for(let i=0; i<commands.length;i++){
        let newArr = array.slice(commands[i][0]-1,commands[i][1])
        let num = quickSort(newArr)
        result.push(num[commands[i][2]-1])
    }
    function quickSort(newArr){
      let pivot = newArr[0]
      let left = [] 
      let right = [] 
      
      if(newArr.length <= 1) return newArr
     
      for(let i=1; i<newArr.length;i++){
          newArr[i] < pivot ? left.push(newArr[i]): right.push(newArr[i]) 
      }
      return [...quickSort(left), pivot, ...quickSort(right)];
    }
    return result
}