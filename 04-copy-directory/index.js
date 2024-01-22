const path = require('path');
const fs = require('fs');
const folderPath = path.join(__dirname);
const folderFilesPath = path.join(folderPath, 'files');
const folderFilesCopyPath = path.join(folderPath, 'files-copy');

const copyDir = () => {
  fs.stat(folderFilesCopyPath, function (err) {
    if (!err) {
      console.log('Folder exists');
    } else if (err.code === 'ENOENT') {
      fs.mkdir(folderFilesCopyPath, 0755, (err) => {
        if (err) console.log(err);
        fs.readdir(folderFilesPath, (err, files) => {
          files.forEach((file) => {
            const filePath = path.join(folderFilesPath, file);
            const fileCopyPath = path.join(folderFilesCopyPath, file);
            fs.copyFile(filePath, fileCopyPath, (err) => {
              if (err) throw err;
            });
          });
        });
      });
    }
  });
};

copyDir();
