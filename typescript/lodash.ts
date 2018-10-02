
const people = [
  {
      id: 1,
      name: 'Peter'
  },
  {
      id: 2,
      name: 'Rachel'
  },
  {
      id: 3,
      name: 'John'
  },
  {
      id: 4,
      name: 'Tim'
  },
  {
      id: 5,
      name: 'Zed'
  }
];

import lodash from 'lodash';

let found = lodash.find(people, (person) => person.id === 3);
console.log(found);