```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read the file:', err);
      return;
    }
    console.log(data); // This will now print the data AFTER it's read
  });
}

processFile('my_file.txt');
```