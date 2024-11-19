function solution(arr, intervals) {
    let left = arr.slice(intervals[0][0],intervals[0][1]+1);
    let right = arr.slice(intervals[1][0],intervals[1][1]+1);
    return left.concat(right)
}