const names = ["Marcos", "Yoland", "Rosa", "Julia"];
const nationalities = ["Spanish", "English", "Russian"];

const employee = {
  name: "Marcos",
  department: "UI / Frontend",
  skills: "JS",
};

// 1. Array operations

// Head

const head = ([first])=> first;

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

console.log(`f Concat > ${concat(names, nationalities)}`);

// Optional

const concatOptional = (...rest) => rest;

console.log(`f Optional > ${concatOptional(...names, ...nationalities)}`);

// 3. Clone Merge

// Clone

function clone(source) {
  return { ...source };;
}

console.log(`f Clone >` clone(employee));

// Merge 
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (source, target)=>{
 return {...target, ...source} 
}

console.log(`f Merge >` merge(a, b))

// 4. Read Books

const books = [
 { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
return books.some(books => books.title === titleToSearch && books.isRead)
}
console.log(`Libro "Devastación" >` isBookRead(books, "Devastación")); // true
console.log(`Libro "Canción de hielo y fuego" >`  isBookRead(books, "Canción de hielo y fuego")); // false
console.log(`Libro "Los Pilares de la Tierra" >`isBookRead(books, "Los Pilares de la Tierra")); // false

// 5. Slot Machine

// Propiedad contador de monedas


// Método play(); 
// 1. incrementa mondedas
// 2. generar 3 valores aleatorios 
// 3 comparar los 3 valores aleatorios, 
//  si true "mensaje" y reiniciar contador
//  si false "mensaje"    

class slotMachine {
constructor(){
  this.counter = 0;
  
}
randonTrueFalse(){
  return Math.random() < 0.5
}
play(){
  this.counter = ++this.counter;
  if (this.randonTrueFalse() && this.randonTrueFalse() && this.randonTrueFalse()){
  console.log(`Congratulations!!!. You won ${this.counter} coin${this.counter > 1 ? 's' : ''  } !!`);
  this.counter = 0;
    }else{
    console.log("Good luck next time!!")
  }

}
}

const machine1 = new slotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();


