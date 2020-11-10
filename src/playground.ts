const names: Array<string> = ["Marcos", "Yoland", "Rosa", "Julia"];
const nationalities: Array<string> = ["Spanish", "English", "Russian"];

interface Employees {
  name: string;
  departament: string;
  skills: string;
}

const employee: Employees = {
  name: "Marcos",
  departament: "UI / Frontend",
  skills: "JS",
};

// 1. Array operations

// Head
const head = ([first]: string[]) => first;
console.log(`1. Head`);
console.log(head(names));

// Tail
const tail = ([, ...rest]: string[]) => rest;
console.log(`1. Tail`);
console.log(tail(names));

// Init
const init = (array: string[]) => array.slice(0, array.length - 1);
console.log(`1. Init`);
console.log(init(names));

// Last
const last = (array: string[]) => array.slice(array.length - 1);
console.log(`1. Last`);
console.log(last(names));

// 2. Concat
type ConcatFunction = (a: string[], b: string[]) => Array<string>;
const concat: ConcatFunction = (a, b) => [...a, ...b];
console.log(`2. Concat`);
console.log(concat(names, nationalities));

// Optional
const concatOptional = (...rest: string[]) => rest;
console.log(`2. Concat - Optional`);
console.log(concatOptional(...names, ...nationalities));

// 3. Clone Merge
// Clone
function clone(source: Employees) {
  return { ...source };
}
console.log(`3. Clone`);
console.log(clone(employee));

// Merge
interface A {
  name: string;
  surname: string;
  country: string;
}
interface B {
  name: string;
  age: number;
  married: boolean;
}
const a: A = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: B = { name: "Luisa", age: 31, married: true };

const merge = (source: A, target: B) => {
  return { ...target, ...source };
};

console.log(`3. Merge`);
console.log(merge(a, b));

// 4. Read Books
interface Book {
  title: string;
  isRead: boolean;
}

const books: Array<Book> = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Array<Book>, titleToSearch: string): boolean {
  return books.some((books) => books.title === titleToSearch && books.isRead);
}
console.log(`4. Read Books`);
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// 5. Slot Machine
console.log(`5. Slot Machine`);

// Propiedad contador de monedas

// Método play();
// 1. incrementa mondedas
// 2. generar 3 valores aleatorios
// 3 comparar los 3 valores aleatorios,
//  si true "mensaje" y reiniciar contador
//  si false "mensaje"

class slotMachine {
  counter: number;
  constructor() {
    this.counter = 0;
  }
  randonTrueFalse() {
    return Math.random() < 0.5;
  }
  play() {
    this.counter = ++this.counter;
    if (this.randonTrueFalse() && this.randonTrueFalse() && this.randonTrueFalse()) {
      console.log(`Congratulations!!!. You won ${this.counter} coin${this.counter > 1 ? "s" : ""} !!`);
      this.counter = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new slotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
