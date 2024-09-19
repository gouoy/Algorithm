function solution(array) {
   return array.join("").split("").reduce((acc, item) => item == "7" ? acc + 1 : acc, 0);
}