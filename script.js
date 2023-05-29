// Задан массив: let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// 	Выведите в косноль только нечетные элементы 

// let array = [5,3,2,6,7,8,7,10,40,32,1,45];

// for(let elem of array){
//     if(elem % 2 === 1){
//         console.log(elem)
//     };
// };

// ------------------------------

// Задан массив: let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// 	Выведите в косноль элементы, кратные 10

// let array = [5,3,2,6,7,8,7,10,40,32,1,45];

// for(let elem of array){
//     if(elem % 10 === 0){
//         console.log(elem)
//     };
// };

// -----------------------------

// Задан массив: let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// 	Выведите в косноль элементы с двухзначным значением

// let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// for(let i in array){
//     if (array[i] >= 10 && array[i] <= 99) {
//         console.log(array[i]);
//     }
// }

// ------------------------------

// Задан массив с номерами телефонов: 
// Создайте два новых массива phones1 и phones2, в первом из которых поместите только те элементы, которые начинаются на +7, а другие в массив phones2. Выведите в консоль содержимое двух массивов

// let phones = [
//     '+7912345549',
//     '+7912346579',
//     '891234547489',
//     '+79123451234',
//     '89123451238',
//     '+73123456789',
//     '+73123456569',
//     '81123451238'
//     ]
//     let phones1 =[];
//     let phones2 =[];

// for(let i in phones){
//     if(phones[i].startsWith("+7")){
//        phones1 = phones[i].slice();
//     } else if (phones[i].startsWith("8")){
//         phones2 = phones[i].slice();
//     };
// };
// console.log(phones1);
// console.log(phones2);

// -----------------------------

// Задан массив с именами: 

// Измените исходный массив таким образом, чтобы у элементов, где встречается значение NULL, отсутствовало последнее слово. 


// let names = [ 
//     'Steven', 
//     'Alex NULL',
//     'Glandell NULL', 
//     'Neena', 
//     'John', 
//     'Peter NULL'
//     ]
//    for(let i in names){
//     if(names[i].includes("NULL")){
//         names[i] = names[i].replace("NULL","")

//     }
//    }
// console.log(names)

    // Задан массив с контактами пользователей:
    
    // Создайте два массива phones и emails и поместите туда только те значения, которые соответствуют значениями элементам массива contacts. 
    // Примечание: если в элемента встречается и почта и номер - их необходимо будет разделить и также поместить в соответствующие массивы. 
    // Выведите в консоль содержимое двух массивов
    



let contacts = [ 
    'example@mail.com 89012345675', 
    'test@mail.ru', 
    'example@google.pop', 
    '89011235678', 
    'stevem@mail.net', 
    'neena@amazon.ru 81232345676', 
    'peter@great.ru 89012341238' 
    ];
    let phones =[];
    let emails =[];
    let mix =[]

for(let i in contacts){
if(contacts[i].includes("@")){
 emails[i] = contacts[i].split(" ",1)
};
if(contacts[i].includes("8")){

   mix[i] = contacts[i].split(' ')
};
}
phones =[ (mix[0])[1], (mix[3])[0], (mix[5])[1], (mix[6])[1]]



console.log(phones)
console.log(emails)
