console.log("300");
console.log('300');
console.log(300); // в консоле показывается синим цветом
console.info("Hello");
console.log('Hello' + ' ' + 'world');
// alert('Hello'); 
document.getElementById('out').innerHTML = 'Second content'; // позволяет менять контент по id. getElementById - нашли элемент, innerHTML - заменили содержимое
document.getElementById('out').innerHTML = '<b>Fat content</b>'; // позволяет добавлять все, даже теги

document.querySelector('.class-one').innerHTML = 'Change by class'; // работает только на одном, первом попавшемся по ходу чтения кода
document.querySelector('#one').innerHTML = 'Change by id'; // так как функция более гибкая, нужно обозначение селектора: id - #, класс - . и тд

let a;
a = document.querySelector('.paragraph');
a.innerHTML = 2110983;

let b = document.getElementById('two');
b.innerHTML = 'lorem';