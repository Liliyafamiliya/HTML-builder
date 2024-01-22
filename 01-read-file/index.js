const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath);

readStream.on('data', (data) => {
  process.stdout.write(data);
});
