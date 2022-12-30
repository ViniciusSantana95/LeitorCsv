const fs = require('fs')
const csv = require('fast-csv')


fs.createReadStream("TESTE.CSV")
  .pipe(csv.parse({
    headers : true,
    delimiter : ';'
  }))
  .on("error", error => console.log("leitura finalizada com erro"))
  .on("data", data => console.log("dados", data));

