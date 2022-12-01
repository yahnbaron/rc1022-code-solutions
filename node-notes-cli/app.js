const rawData = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  for (const key in rawData.notes) {
    console.log(`${key}: ${rawData.notes[key]}`);
  }
} else if (process.argv[2] === 'create') {
  rawData.notes[rawData.nextId] = process.argv[3];
  rawData.nextId++;
  const newData = JSON.stringify(rawData, null, 2);
  fs.writeFile('data.json', newData, err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'update') {
  const whichOne = process.argv[3];
  const newNote = process.argv[4];
  rawData.notes[whichOne] = newNote;
  const updatedData = JSON.stringify(rawData, null, 2);
  fs.writeFile('data.json', updatedData, err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'delete') {
  const whichOne = process.argv[3];
  delete rawData.notes[whichOne];
  const updatedData = JSON.stringify(rawData, null, 2);
  fs.writeFile('data.json', updatedData, err => {
    if (err) throw err;
  });
} else console.log('invalid command, valid commands include read, create, update, and delete');
