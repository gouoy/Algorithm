function solution(num_list, n) {
    const arr = num_list.splice(n)
    return arr.concat(num_list)
}