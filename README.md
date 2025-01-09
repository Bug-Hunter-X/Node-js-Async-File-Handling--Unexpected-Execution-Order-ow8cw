# Node.js Asynchronous File Handling Bug

This repository demonstrates a common error in Node.js related to asynchronous file handling using `fs.readFile`.  The issue arises from a misunderstanding of how asynchronous operations work.  The `fs.readFile` function is non-blocking, meaning that the code continues to execute after initiating the file read, without waiting for the file reading to complete. This can lead to unexpected behavior if you're not careful.

## Bug
The `bug.js` file contains the buggy code. Notice that the console message  `'File reading initiated'` prints *before* the file's content is read and printed to the console. This is because the `console.log('File reading initiated');` line executes immediately after the call to `fs.readFile`, regardless of whether the file reading operation has completed or not.

## Solution
The `bugSolution.js` file presents the corrected code using callbacks to handle the asynchronous nature of `fs.readFile`.  The file's content is correctly printed only after the file has been read successfully.

## How to run the code

1.  Clone this repository.
2.  Create a file named `my_file.txt` in the same directory with some text content.
3.  Run `node bug.js` and `node bugSolution.js` to see the difference in output.