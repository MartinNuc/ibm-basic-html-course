
const { write, read } = require('./file-operations');

write('file.txt', 'text to be written')
  .then(() => read('file.txt'))
  .then(content => console.log(content));