const hello = () => {
  console.log('Hello world')
}

// hello();
// hello();
// hello();

// När vi jobbar i node så heter vårat globala objekt global istället för window
// console.log(global);


// setTimeout(() => {
//   console.log('timed out')
// }, 3000)

console.log(__dirname);
console.log(__filename);