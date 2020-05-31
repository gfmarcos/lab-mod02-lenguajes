const names = ["Marcos", "Yoland", "Rosa", "Julia"];
const nationalities = ["Spanish", "English", "Russian"];
const employee = {
  name: "Marcos",
  department: "UI / Frontend",
  skills: "JS",
};

// 1. Array operations

// Head

const head = ([first]) => first;

console.log(`f Head > ${head(names)}`);

// Tail

const tail = ([, ...rest]) => rest;

console.log(`f Tail > ${tail(names)}`);

// Init

const init = (array) => array.slice(0, array.length - 1);

console.log(`f Init > ${init(names)}`);

// Last

const last = (array) => array.slice(array.length - 1);

console.log(`f Last > ${last(names)}`);

// 2. Concat

const concat = (a, b) => [...a, ...b];

console.log(concat(names, nationalities));

// Optional

const concatOptional = (...rest) => rest;

console.log(concatOptional(...names, ...nationalities));

// 3. Clone Merge

function clone(source) {
  const newObject = { ...source };
  return newObject;
}

console.log(clone(employee));
