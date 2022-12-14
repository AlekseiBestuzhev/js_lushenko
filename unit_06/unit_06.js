//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
	let out = '';
	for (let i = 0; i < 3; i++) {
		for (let k = 0; k < 3; k++) {
			out += '*';
		}
		out += '_';
	}
	document.querySelector('.out-1').textContent = out;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
	let out = '';
	for (let i = 1; i < 4; i++) {
		out += i + '<br>';
		for (let k = 0; k < 1; k++) {
			out += '*_*_*_' + '<br>';
		}
	}
	document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
	let out = '';
	for (let i = 0; i < 4; i++) {
		for (let k = 0; k < 3; k++) {
			out += '*_';
		}
		out += '<br>';
	}
	document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
	let out = '';
	for (let i = 1; i < 4; i++) {
		out += i + '_';
		for (let k = 1; k < 6; k++) {
			out += k + ' ';
		}

	}
	document.querySelector('.out-4').innerHTML = out;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
	let out = '';
	for (let i = 0; i < 3; i++) {
		for (let k = 0; k < 6; k++) {
			let num = k % 2;
			if (num == 0) {
				num = 1
			}
			else {
				num = 0;
			}
			out += num;
		}
		out += '<br>';
	}
	document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
	let out = '';
	for (let i = 0; i < 3; i++) {
		for (let k = 0; k < 6; k++) {
			let num = ' ';
			if (k == 2 || k == 5) {
				num = 'x';
			}
			else if (k == 1 || k == 3) {
				num = 0;
			}
			else {
				num = 1;
			}
			out += num;
		}
		out += '<br>';
	}
	document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
	let out = '';
	for (let i = 1; i < 5; i++) {
		for (let k = 0; k < i; k++) {
			out += '*';
		}
		out += '<br>';
	}
	document.querySelector('.out-7').innerHTML = out;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
	let out = '';
	for (let i = 5; i > 0; i--) {
		for (let k = 0; k < i; k++) {
			out += '*';
		}
		out += '<br>';
	}
	document.querySelector('.out-8').innerHTML = out;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
	let out = '';
	for (let i = 2; i < 7; i++) {
		for (let k = 1; k < i; k++) {
			out += k + ' ';
		}
		out += '<br>';
	}
	document.querySelector('.out-9').innerHTML = out;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
	let out = '';
	for (let i = 0; i < 5; i++) {
		for (let k = 1; k < 11; k++) {
			if (k == 10) {
				out += `${i + 1}0`
			}
			else {
				out += `${i}${k} `
			}
		}
		out += '<br>';
	}
	document.querySelector('.out-10').innerHTML = out;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. Оформить в виде столбцов где выводятся множители и результат.Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. Оформить в виде столбцов где выводятся множители и результат.

function t11() {
	let out = '';
	for (let i = 1; i < 11; i++) {
		for (let k = 1; k < 11; k++) {
			out += `${i}*${k}=${i * k};<br>`;
		}
		out += '<hr>';
	}
	document.querySelector('.out-11').innerHTML = out;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Используя вложенные циклы создайте 

function t12() {
	let out = '';
	for (let i = 0; i < 3; i++) {
		for (let k = 0; k < 5; k++) {
			out += '*';
		}
		out += '<br>';
	}
	document.querySelector('.out-12').innerHTML = out;
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Используя вложенные циклы создайте 

function t13() {
	let out = '';
	for (let i = 5; i > 0; i--) {
		for (let k = 0; k < i; k++) {
			out += '*';
		}
		out += '<br>';
	}
	document.querySelector('.out-13').innerHTML = out;
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Используя вложенные циклы создайте 

function t14() {
	let out = '';
	for (let i = 2; i >= 0; i--) {
		for (let k = 0; k < i; k++) {
			out += ' ';
		}
		out += '*****<br>';
	}
	document.querySelector('.out-14').innerHTML = '<code>' + out + '</code>';
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Используя вложенные циклы создайте 

function t15() {
	let out = '';
	for (let i = 1; i < 4; i++) {
		for (let k = 0; k < i; k++) {
			out += '*';
		}
		out += '<br>';
	}
	for (let i = 2; i > 0; i--) {
		for (let k = 0; k < i; k++) {
			out += '*';
		}
		out += '<br>';
	}
	document.querySelector('.out-15').innerHTML = out;
}

document.querySelector('.b-15').onclick = t15;

//  Task 16
// Используя вложенные циклы создайте 

function t16() {

	let hCount = 9;
	let vCount = 5;
	const wSp = ' ';
	const sym = '*'
	let out = '';
	for (let i = 0; i < vCount; i++) {
		if (i == 0 || i == vCount - 1) {
			for (let k = 0; k < hCount - 3; k++) {
				out += sym;
			}
			out += '<br>'
		}
		else {
			out += sym;
			for (let j = 0; j < hCount - 2; j++) {
				out += wSp;
			}
			out += sym + '<br>';
		}
	}
	document.querySelector('.out-16').innerHTML = '<code>' + out + '</code>';
}

document.querySelector('.b-16').onclick = t16;

//  Task 17
// Используя вложенные циклы создайте 

function t17() {
	let out = '';
	for (let i = 5; i > 0; i--) {
		for (let k = i; k > 0; k--) {
			out += k + ' ';
		}
		out += '<br>'
	}
	document.querySelector('.out-17').innerHTML = out;
}

document.querySelector('.b-17').onclick = t17;

//  Task 18
// Используя вложенные циклы создайте 

function t18() {
	let out = '';
	let ws = '  ';
	for (let i = 1; i < 6; i++) {
		for (let k = i; k > 0; k--) {
			if (k == 1 && i == 1) {
				out += ws + ws + ws + ws;
			}
			else if (k == 2 && i == 2) {
				out += ws + ws + ws;
			}
			else if (k == 3 && i == 3) {
				out += ws + ws;
			}
			else if (k == 4 && i == 4) {
				out += ws;
			}
			out += k + ' ';
		}
		out += '<br>'
	}
	document.querySelector('.out-18').innerHTML = '<code>' + out + '</code>';
}

document.querySelector('.b-18').onclick = t18;
//  Task 19
// Используя вложенные циклы создайте 

function t19() {
	let out = '';
	let ws = 'Х ';
	for (let i = 1; i < 6; i++) {
		for (let k = i; k > 0; k--) {
			if (k == 1 && i == 1) {
				out += ws + ws + ws + ws;
			}
			else if (k == 2 && i == 2) {
				out += ws + ws + ws;
			}
			else if (k == 3 && i == 3) {
				out += ws + ws;
			}
			else if (k == 4 && i == 4) {
				out += ws;
			}
			out += k + ' ';
		}
		out += '<br>'
	}
	document.querySelector('.out-19').innerHTML = '<code>' + out + '</code>';
}

document.querySelector('.b-19').onclick = t19;

//  Task 20
// Используя вложенные циклы создайте 

function t20() {
	let out = '';
	for (let i = 1; i < 6; i++) {
		for (let k = 0; k < i; k++) {
			out += i + ' ';
		}
		out += '<br>';
	}
	document.querySelector('.out-20').innerHTML = out;
}

document.querySelector('.b-20').onclick = t20;

//  Task 21
// Используя вложенные циклы создайте 

function t21() {
	let out = '';
	for (let i = 5; i > 0; i--) {
		for (let k = 0; k < (6 - i); k++) {
			if (i == 4 || i == 2) {
				out += 'X ';
			}
			else {
				out += i + ' ';
			}
		}
		out += '<br>';
	}
	document.querySelector('.out-21').innerHTML = out;
}

document.querySelector('.b-21').onclick = t21;

//  Task 22
// Используя вложенные циклы создайте 

function t22() {
	const ws = ' ';
	const sym = '*';
	let out = '';
	for (let i = 0; i < 3; i++) {
		if (i == 0) {
			out += ws + ws;
			for (let k = 0; k < 5; k++) {
				out += sym;
			}
			out += '<br>';
		}
		else if (i == 1) {
			out += ws;
			for (let k = 0; k < 7; k++) {
				out += sym;
			}
			out += '<br>';
		}
		else {
			for (let j = 0; j < 9; j++) {
				out += sym;
			}
		}
	}
	document.querySelector('.out-22').innerHTML = '<code>' + out + '</code>';
}

document.querySelector('.b-22').onclick = t22;

//  Task 23
// Используя вложенные циклы создайте 

function t23() {
	const ws = ' ';
	const sym = '*';
	let out = '';
	for (let i = 0; i < 5; i++) {
		if (i == 0 || i == 4) {
			out += ws + ws;
			for (let k = 0; k < 2; k++) {
				out += sym;
			}
			out += '<br>';
		}
		else if (i == 1 || i == 3) {
			out += ws;
			for (let k = 0; k < 4; k++) {
				out += sym;
			}
			out += '<br>';
		}
		else {
			for (let j = 0; j < 6; j++) {
				out += sym;
			}
			out += '<br>';
		}
	}
	document.querySelector('.out-23').innerHTML = '<code>' + out + '</code>';
}

document.querySelector('.b-23').onclick = t23;

