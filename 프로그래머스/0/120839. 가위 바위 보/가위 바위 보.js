function solution(rsp) {
    rsp = [...rsp]
    for(let i=0; i<rsp.length;i++){
        rsp[i] == "2" ? rsp[i]="0" : rsp[i] == "0" ? rsp[i] = "5" : rsp[i] = "2"
    }
    return rsp.join(""); 
}