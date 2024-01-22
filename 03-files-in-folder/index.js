const path = require('path');
const fs = require('fs');

const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (err, files) => {
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    fs.stat(filePath, (err, stat) => {
      if (err) {
        throw err;
      }
      const name = file.split('.')[0];
      const extension = path.extname(file).slice(1, path.extname(file).length);
      console.log(`${name} - ${extension} - ${stat.size}bytes`);
    });
  });
});
