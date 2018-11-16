const array = [
	{name: 'Ivan'},
	{name: 'Roman'},
	{name: 'Bogdan'},
	{name: 'Andriy'},
	{name: 'Oleh'},
	{name: 'John'},
	{name: 'Jacob'},
	{name: 'Volodymyr'},
	{name: 'Viktor'}
];
/*
	1. Напишіть функцію, яка відсортує масив обєктів за властивістю name в алфавітному порядку.
*/
const compare = function (a,b) {
	if (a.name.charAt(0) < b.name.charAt(0)) return -1;
	else if (a.name.charAt(0) > b.name.charAt(0)) return 1;
	else if (a.name.charAt(0) === b.name.charAt(0)) {
		//return 1;
		if (a.name.charAt(1) < b.name.charAt(1)) return -1;
		else if (a.name.charAt(1) > b.name.charAt(1)) return 1;
		else if (a.name.charAt(1) === b.name.charAt(1)) {
			//To much nested if else statements
			//if compare objects wich name proporty 
			//was cutted with substr it returns
			//wrong string of names
			//because we working with 
			//reference type, not a value
			return 1;
		}
	};
};

const task1Sorted = array.sort(compare);
let task1SortedString = "";
for (var i = 0; i < task1Sorted.length; i++) {
 	task1SortedString += task1Sorted[i].name + ", ";
}
console.log(task1SortedString);

//-----------------------------------------------------------------------------
//#############################################################################

/*
	2. Напишіть функцію, що приймає два числа і повертає true, якщо перше число більше за друге.
*/
function task2func(num1, num2) {
	return num1 > num2;
};

/*
	3. Напишіть функцію, яка приймає два числа і повертає false, 
	якщо перше число більше за друге. 
	Обовязково в цій функції використайте функцію з завдання 2.
*/
function task3func(num1, num2) {
	return !task2func(num1, num2);
};

//-----------------------------------------------------------------------------
//#############################################################################

/*
4. Напишіть функцію, що приймає ціле число і повертає масив з правильними числами 
	від 0 до того числа, яке ввели, як аргумент в цю функцію. 
	Тобто виклик "functionName(151)", має повернути масив з правильними числами від 0 до 151. 
	Почитайте в вікіпедії, що таке правильне число.
*/
	//if size is 5 : array = [2, 3, 5, 7, 11]
	//if size is 10: array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
	function isPrime(number) {
		let result = false;
		let divisorsCounter = 0;
		for(let i = 1; i <= number; i++) {
			if (number % i === 0) divisorsCounter++;
		}
		if(divisorsCounter === 2) result = true;
		return result;
	}

	function getArrayOfPirmes(size) {
		if(size < 1 && size > 10000) throw "Not valid size input!\n it is not in range 1...10000";
		let arr = new Array(size); //constructor with one parameter is about Array.length

		let topBorder = 2;
		arr[0] = topBorder;
		for(let index = 1; index < arr.length; index++) {
			if (topBorder === arr[index - 1]) topBorder++;
			while(arr[index] === undefined){
				if (isPrime(topBorder)) arr[index] = topBorder;
				else topBorder++;
			}
			
			//console.log(arr[index]);
		};
		//console.log("DEBUG");
		return arr;
	};

	function getArrayOfPirmesString(size) {
		let primesStr = getArrayOfPirmes(size).toString();
		let result = "";
		let interval = 60;
		for(let index = 0; index < primesStr.length; index++) {
			if (index%interval === 0) result += "<br>";

			result += primesStr[index];
		}

		return result;
	}

	//console.log(getArrayOfPirmesString(70));

//-----------------------------------------------------------------------------
//#############################################################################

/*
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
*/

function task5play() {
	const border = 5;
	let attempts = 3;
	let guessNumber = Math.round(Math.random() * (border+1) );

	let dialog = 
`Enter a number from 0 to ${border} \n Attempts left: ${attempts} \n Total prize: $ \n Possible prize on current attempt: $ `;
	let inputed = Number(confirm(dialog));

}

function task5func() {
	const answer = confirm("Do you want to be a dollar millionaire?");
	if(!answer) alert("You will not become a dollar millionaire!");
	else {
		task5play();
	}
};
