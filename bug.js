```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read the file:', err);
      return;
    }
    // Process the data here. For demonstration, let's just print it
    console.log(data);
  });
  console.log('File reading initiated'); // This line executes before the file is read
}

processFile('my_file.txt');
```