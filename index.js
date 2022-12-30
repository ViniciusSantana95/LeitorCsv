const readline = require('readline')
const fs = require('fs')
const readable = fs.createReadStream('TESTE.csv')

const rl = readline.createInterface({
    headers: true,
    delimiters: ';',
    input : readable,
    output: process.stdout
})

rl.on('line', (line)=>{
    console.log('>>>>', line)
})