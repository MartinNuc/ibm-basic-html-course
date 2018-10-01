/**
 * 1) convert to asynchronous (writeFile())
 * 2) wrap in a promise
 * 3) use in the main file using promise chain
 */

function read(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    })
  });
}

function write(filename, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, text, () => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
  
module.exports = {
  read,
  write
}
