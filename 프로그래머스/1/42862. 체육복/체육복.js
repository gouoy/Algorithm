function solution(n, lost, reserve) {
  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));
    
  realLost.sort((a, b) => a - b); 
  realReserve.sort((a, b) => a - b);

  realLost = realLost.filter((l) => {
    let found = realReserve.find((r) => Math.abs(r - l) === 1);
    if (found !== undefined) {
      realReserve = realReserve.filter((r) => r !== found);
      return false; 
    }
    return true; 
  });

  return n - realLost.length;  
}

