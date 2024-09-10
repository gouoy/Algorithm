const readline = require('readline'); // js 에서 입력을 받기 위한 라이브러리 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let a = "*"
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i =0 ; i< parseInt(input[0]) ; i++){
        console.log(a.repeat(i+1))
    }
});