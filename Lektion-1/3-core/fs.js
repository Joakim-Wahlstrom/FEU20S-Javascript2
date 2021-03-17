const fs = require('fs');
const path  = require('path');

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
// fs.writeFile('./mapp/text3.txt', 'En ny fil', () => {
//   console.log('Ändrade på texten');
// })

//  DÖPA OM EN FIL
// fs.rename('./mapp/text3.txt', './mapp/text2.txt', (err) => {
//   if(err)
//     console.log(err);
//   else
//     console.log('bytte namn på filen')
// })


// MAPPAR

// if(!fs.existsSync('./NyMapp')) {
//   fs.mkdir('./NyMapp', err => {
//     if(err)
//       console.log(err);
//     else
//       console.log('Mappen finns inte.. Skapar den');
//   })
// } else {
//   fs.rmdir('./NyMapp', err => {
//     if(err)
//       console.log(err);
//     else
//       console.log('Mappen finns redan.. Tar bort den');
//   })
// }


// TA BORT FILER

// if(fs.existsSync('./mapp/text2.txt')) {
//   fs.unlink('./mapp/text2.txt', err => {
//     if(err)
//       console.log(err);
//     else
//       console.log('tar bort filen');
//   })
// }


// fs.appendFile(path.join(__dirname, 'mapp', 'text.txt'), ' Nu lägger vi till text igen...', err => {
//   if(err)
//     console.log(err);
//   else
//     console.log('la till text... igen...')
// })


// LÄSA STORA FILER / STREAM
const readStream = fs.createReadStream('./mapp/stor.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./mapp/stor2.txt')

// readStream.on('data', buffer => {
//   // console.log('--------------------------------------------------------Ny Buffer-------------------------------------------------------------')
//   // console.log(buffer);
//   console.log('streamar');
//   writeStream.write('\n--------------------------------------------------- NY DATA ------------------------------------------ \n');
//   writeStream.write(buffer);
// })


readStream.pipe(writeStream);