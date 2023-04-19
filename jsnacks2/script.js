const arrNames = [
    'Pierluca',
    'Luca',
    'Camilla',
    'Matteo',
    'Mario',
    'Giulio',
    'Marco',
    'Teresa'
];

const arrLastnames = [
    'Strianese',
    'Sacrestano',
    'Rossi',
    'Parker',
    'Cooper'
];

const arrListName = [];

for (let i = 0; i < arrNames.length; i++) {
    const y = Math.floor(Math.random() * arrLastnames.length);
    arrListName.push(arrNames[i] + ' ' + arrLastnames[y]);
}


console.log (arrListName);



