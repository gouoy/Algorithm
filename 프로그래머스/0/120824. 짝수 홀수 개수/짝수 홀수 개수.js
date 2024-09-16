function solution(num_list) {
    var even = num_list.filter((item)=>item%2==0).length 
    return [even, num_list.length-even]
}