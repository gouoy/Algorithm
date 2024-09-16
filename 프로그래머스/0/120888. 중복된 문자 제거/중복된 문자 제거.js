function solution(str) {
   return [...str].filter((item, index) => str.indexOf(item) == index).join("");

}