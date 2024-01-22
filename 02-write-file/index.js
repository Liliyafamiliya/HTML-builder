const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(filePath);

console.log('Enter text bellow');

process.stdin.on('data', (data) => {
  if (data.toString().toLowerCase().includes('exit')) {
    console.log(' Bye-bye');
    process.stdin.destroy();
  } else {
    writeStream.write(data);
  }
});

process.on('SIGINT', () => {
  console.log(' Bye-bye');
  process.stdin.destroy();
});
