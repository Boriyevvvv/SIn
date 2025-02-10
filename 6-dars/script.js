// const str = 'UZBEKISTAN'
// let result = reply(str);
// console.log(result);

// function reply(str){
//     if (str.length < 2) {
//         return str;
//     }
// }

// let str = 'UZBEKISTAN'

// for (let i = 0; i < str.length; i++) {
//     console.log(` ${i+1}.${str[i]}`);

// }

// let array1 = ['olma', 'anor', 'uzum', 'bexi', 'kiwi', 'banan']
// array1.splice(1, 1, )
// array1.splice(2,0, 'anor')
// console.log(`Birinchi array: ${array1}`);

// let array2 = ["olma", "anor", "uzum", "bexi", "kiwi", "banan"];
// array2.splice(-1, 1, "uzbekistan");
// console.log(`ikkinchi array: ${array2}`);

// let array = ["olma", "anor", "uzum", "bexi", "kiwi", "banan"];
// let newArray = ["cobalt", "spark", "malibu"]
// array.splice(3, 1, newArray);
// console.log(`Uchinchi array: ${array}`);

// const talaba = [
//   { name: "Ali" fanlari: ['matematika', 'matem', 'ingliz', 'anglis'] }
// ];

// function addSubject(studentName, newSubject) {
//     const student = talaba.find((name) => name === studentName);
//     if (student) {
//       if (!student.favoriteSubjects.includes(newSubject)) {
//         student.favoriteSubjects.push(newSubject);
//         console.log(`${studentName} fanlar ro'yxatiga "${newSubject}" qo'shildi.`);
//       } else {
//         console.log(`${studentName} fanlar ro'yxatida "${newSubject}" allaqachon mavjud.`);
//       }
//     } else {
//       console.log(`Talaba "${studentName}" topilmadi.`);
//     }
//   }
  
//   addSubject("Ali", "Kimyo");
  
//   console.log(talaba);


// const talaba = [
//     { name: "Ali", fanlari: ["matematika", "matem", "ingliz", "anglis"] }
//   ];
  
//   function addSubject(studentName, newSubject) {
//     const student = talaba.find((student) => student.name === studentName); // Talabani qidirish
//     if (student) {
//       if (!student.fanlari.includes(newSubject)) {
//         student.fanlari.push(newSubject); // Yangi fanni qo'shish
//         console.log(`${studentName} fanlar ro'yxatiga "${newSubject}" qo'shildi.`);
//       } else {
//         console.log(`${studentName} fanlar ro'yxatida "${newSubject}" allaqachon mavjud.`);
//       }
//     } else {
//       console.log(`Talaba "${studentName}" topilmadi.`);
//     }
//   }
  
//   addSubject("Ali", "Kimyo"); // Ali fanlar ro'yxatiga "Kimyo" qo'shildi.
//   addSubject("Ali", "matem"); // Ali fanlar ro'yxatida "matem" allaqachon mavjud.
  
//   console.log(talaba);
  


const numbers = Array.from({ length: 10 }, (_, i) => i + 1);


const sum = numbers.reduce((acc, current) => acc + current, 0);

console.log(`Yig'indisi: ${sum}`);
