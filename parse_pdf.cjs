const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('C:/cek/Salinan 11_Money and Financial System.pdf');
pdf(dataBuffer).then(function(data) {
  fs.writeFileSync('C:/cek/pdf_11_out.txt', data.text);
  console.log('Parsed successfully');
}).catch(function(err) {
  console.log('Error parsing: ' + err);
});
