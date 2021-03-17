const fs = require('fs');

// LÄSA FILER

// fs.readFile('./mapp/text.txt', 'utf8', (err, data) => {
//   if(err)
//     console.log(err)

//   console.log(data);
// })


// SKRIVA FILER

// fs.writeFile('./mapp/text.txt', 'Ny text', () => {
//   console.log('Ändrade på texten')
// })

// Lägga till i en fil
// fs.appendFile('./mapp/text.txt', ' Det här är en text som vi har lagt till.', () => {
//   console.log('la till text');
// })

// Skapa en ny fil
fs.writeFile('./mapp/text3.txt', 'En ny fil', () => {
  console.log('Ändrade på texten');
})