const path = require('path');
const fs = require('fs');
const folderPath = path.join(__dirname);
const folderStylesPath = path.join(folderPath, 'styles');
const folderForBundle = path.join(folderPath, 'project-dist');
const bundleFilePath = path.join(folderForBundle, 'bundle.css');
const writeStream = fs.createWriteStream(bundleFilePath);

fs.readdir(folderStylesPath, (err, files) => {
  if (err) {
    throw new Error(err);
  }
  files.forEach((file) => {
    const filePath = path.join(folderStylesPath, file);
    fs.access(filePath, function (err) {
      if (err) {
        throw new Error(err);
      }
      fs.readFile(filePath, (err, fileData) => {
        if (err) {
          throw new Error(err);
        }
        if (path.extname(file) === '.css') {
          writeStream.write(fileData);
        }
      });
    });
  });
});
