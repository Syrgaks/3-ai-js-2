//  ES6 SRED REST , Деструктуризация



// function add() {
   // декларейшн
//     console.log();
// }



// const add = () => {
    // стрелочный
//     console.log();
// }



// `` ${}



// SPREAD

// const arr = [1,2,3,4,5]

// console.log(arr,'обычный');

// console.log(...arr, 'spread');

// const arr2 = [...]



// const info = ["name", "my", "tilek", "is", 45, {hobby: "swim"}]; 
 
 
// console.log(info); 
 
// const [a, b, c, d, e, {hobby} ] = info; 
 
// console.log(b, a, d, c, e, hobby );


const person = {
    name: 'Anna',
    age: 28,
city:'kiev',
profession: 'учитель',
famely:['maks', 'eldiar', 'aidana', {old:35}],
}
console.log(person);

const  {name, age, city, profession, famely:[a,b,c,{old}] } = person
console.log(name, profession, city, age,  a, b, c, old );












