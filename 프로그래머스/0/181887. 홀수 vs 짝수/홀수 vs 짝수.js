function solution(num_list) {
  const odd = num_list.filter((item,idx)=> idx %2 == 0).reduce((pre, cur) => pre + cur, 0);
  const even = num_list.filter((item, idx)=> idx%2!=0).reduce((pre, cur) => pre + cur, 0) ; 
  return odd > even ? odd : even 
}