---
layout: page
show_meta: false
title: "Lecture 4"
subheadline: "JS basics"
teaser: "value/rederence type, primitive types, functions "
header: no
permalink: "/web-js/lecture4/"
---

[Lecture in pdf]()

### Code example
```javascript
// sort array

const array = [43,12,9,1000];

const compare = function (a,b) {
	return a - b;
}

array.sort(compare);

// reverse integer

const reverseInt = function (n) {
	const rev = n.toString().split('').reverse().join('');
	if( n < 0) {
		return parseInt(rev) * -1;
	}
	return parseInt(rev);
}

// palindrome without reverse method

const isPalindrome = function (str) {
	str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	})
}
```


### Task
1. Напишіть функцію, яка відсортує масив обєктів за властивістю name в алфавітному порядку.
2. Напишіть функцію, що приймає два числа і повертає true, якщо перше число більше за друге.
3. Напишіть функцію, яка приймає два числа і повертає false, якщо перше число більше за друге. Обовязково в цій функції використайте функцію з завдання 2.
4. Напишіть функцію, що приймає ціле число і повертає масив з правильними числами від 0 до того числа, яке ввели, як аргумент в цю функцію. 
Тобто виклик "functionName(151)", має повернути масив з правильними числами від 0 до 151. Почитайте в вікіпедії, що таке правильне число.
5. Завдання з зірочкою. Напишіть гру "Хто хоче стати мільйонером?". Правила гри:
	Запитайте користувача чи бажає він зіграти в гру. Для цього використайте метод confirm. 
	У випадку відмови виведіть в консолі "Вам не стати мільйонером".
	Якщо користувач погодився зіграти, то має 3 спроби аби вгадати ціле число від 0 до 5.
	Загадане число генеруєте методом Math.random(). Приймайте число в користувача методом prompt.
	Якщо користувач вгадує число з першого разу, то його виграш складає 10$, з другого разу - 5$, з третього разу - 2$.
	Після того коли користувач вгадав число, то спитайте чи бажає він зіграти ще.
	Якщо користувач відмовиться, подякуйте за гру і виведіть його виграш в консолі. 
	Якщо користувач бажає зіграти ще, то на наступному етапі гри він повинен відгадати число від 0 до 10,
	а можливий виграш відповідно становить 30$, 15$, 7$ і сумується з попередньою сумою на рахунку гравця.
	Наступний етап гри відповідно включає можливість виграти 90$, 45$, 22$, якщо користувач вгадає число в діапазоні від 0 до 20.
	Кожного разу виводьте на екран суму грошей на рахунку, можливий виграш на даному етапі, кількість спроб, що залишились для того, щоб вгадати та числовий діапазон.
	В завданні можна використовувати будь-які вбудовані методи javascript, цикли, if else statements. 
	Для повного розуміння як має працювати гра перегляньте відео, яке я записав з повним функціоналом гри.

### Realization

#### Tasks
<script src="/pllug/assets/js/homework/lecture4/tasks.js"></script>
<script type="text/javascript">
	// Task 1
	let task1outputElement = document.getElementById('task1-output');
	task1outputElement.innerHTML = task1SortedString;

	// Task 2
	let task2input1Element = document.getElementById('task2-input1');
	let task2input2Element = document.getElementById('task2-input2');
	let task2outputElement = document.getElementById('task2-output');
	
	function calculateTask2() {
		let number1 = Number(task2input1Element.value);
		let number2 = Number(task2input2Element.value);
		task2outputElement.innerHTML = task2func(number1, number2);
	};

	// Task 3
	let task3input1Element = document.getElementById('task3-input1');
	let task3input2Element = document.getElementById('task3-input2');
	let task3outputElement = document.getElementById('task3-output');

	function calculateTask3() {
		let number1 = Number(task3input1Element.value);
		let number2 = Number(task3input2Element.value);
		task3outputElement.innerHTML = task3func(number1, number2);
	};

	// Task 4
	let task4outputElement = document.getElementById('task4-output');
	let task4inputElement = document.getElementById('task4-input');

	task4inputElement.value = 10;
	task4outputElement.innerHTML = getArrayOfPirmesString(Number(task4inputElement.value));
	//task4element.innerHTML = getArrayOfPirmesString(65);
	//console.log( getArrayOfPirmesString(65));
	function calculateTask4() {
		task4outputElement.innerHTML = getArrayOfPirmesString(Number(task4inputElement.value));
	}

	// Task 5
	function calculateTask5() {
		task5func();
	};

</script>


<div>
	<h4>Task 1</h4>
	<div id="task1-output"
		style="background: lightgray;"> </div>
</div>

<div>
	<h4>Task 2</h4>
	<input id="task2-input1" 
			type="number" 
			name="task2-input"
			min="1" max="10000" step="1"
			style="width: 25%;"/>
	<input id="task2-input2" 
			type="number" 
			name="task2-input"
			min="1" max="10000" step="1"
			style="width: 25%;"/>
	<button onclick="calculateTask2()">Calculate</button>
	<div id="task2-output"
		style="background: lightgray;"> </div>
</div>

<div>
	<h4>Task 3</h4>
	<input id="task3-input1" 
			type="number" 
			name="task3-input"
			min="1" max="10000" step="1"
			style="width: 25%;"/>
	<input id="task3-input2" 
			type="number" 
			name="task3-input"
			min="1" max="10000" step="1"
			style="width: 25%;"/>
	<button onclick="calculateTask3()">Calculate</button>
	<div id="task3-output"
		style="background: lightgray;"> </div>
</div>

<div>
	<h4>Task 4</h4>
	<input id="task4-input" 
			type="number" 
			name="task4-input"
			min="2" max="10000" step="1"
			style="width: 25%;"/>
	<button onclick="calculateTask4()">Calculate</button>
	<div id="task4-output"
		style="background: lightgray;"> </div>
</div>
<div>
	<h4>Task 5</h4>
	<button onclick="calculateTask5()">Launch Task 5</button>
</div>
