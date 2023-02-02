'use strict';
//sign of life
//console.log('testing, testing..');

//set our hours with an array
//14hrs from 6am - 8pm
//this is a global value
let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// Creating Object Literals

//seattleStore object
let seattleStore = {
	location: 'Seattle',
	min: 32,
	max: 65,
	avg: 6.3,
	salesByHourArray: [],
	dailyTotal: 0,

	//method to generate a random nmber of customers per hour
	getRandomNumberCustomers: function() {
		let min = Math.ceil(this.min);
		let max = Math.floor(this.max);
		//the random numbers generated are inclusive of min and max
		return Math.floor(Math.random() * (max - min + 1) + min);
	},

	//method to record cookies per hour to the salesByHourArray
	calculateCookiesSoldPerHour: function() {
			//console.log(numberOfCookiesPerHour);
		//for each hour open... for loop
		for (let i=0; i < hoursOpen.length; i++) {
		//get random number of customers and assign that function to a variable
		let numberOfCustomers = this.getRandomNumberCustomers();
		//console.log (numberOfCustomers);
		//multiply random number of customers by avg cookie sold to get cookies sold per hour
		//Math.ceil used below rounds up to the nearest whole number
		let numberOfCookiesPerHour = Math.ceil(numberOfCustomers * this.avg);
		//push number of cookies sold that hour to the numberOfCookies array and repeat for each hou open
			this.salesByHourArray.push(numberOfCookiesPerHour);
			//calculate the sum of the daily total of cookies sold
			this.dailyTotal += numberOfCookiesPerHour;
		}
		//console.log(this.salesByHourArray)
	},

	//method to render cookie sales as a <ul>
	render: function() {
		this.calculateCookiesSoldPerHour();
		//console.log('the render fires');
		let salesContainer = document.getElementById ('seattle');
		//console.log(salesContainer)
		//create a list
		let ul = document.createElement ('ul');
		//append it to the DOM
		salesContainer.appendChild(ul);
		//create a for loop to create the list with multiple items
		for (let i =0; i < hoursOpen.length; i++) {
			let li = document.createElement ('li');
			//give it content. 6am: [i] cookies.
			li.textContent = `${hoursOpen[i]}: ${this.salesByHourArray[i]} cookies sold.`
			//append it
			ul.appendChild(li);
		}
		let totalLi = document.createElement ('li');
		totalLi.textContent = `Total: ${this.dailyTotal} cookies sold today.`;
		ul.appendChild(totalLi);
	}
}
//envoke the method
seattleStore.render();

let tokyoStore = {
	location: 'Tokyo',
	min: 3,
	max: 24,
	avg: 1.2,
	salesByHourArray: [],
	dailyTotal: 0,


	getRandomNumberCustomers: function() {
		let min = Math.ceil(this.min);
		let max = Math.floor(this.max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	},

	calculateCookiesSoldPerHour: function() {
		for (let i=0; i < hoursOpen.length; i++) {
		let numberOfCustomers = this.getRandomNumberCustomers();
		let numberOfCookiesPerHour = Math.ceil(numberOfCustomers * this.avg);
			this.salesByHourArray.push(numberOfCookiesPerHour);
			this.dailyTotal += numberOfCookiesPerHour;
		}
	},

	render: function() {
		this.calculateCookiesSoldPerHour();
		let salesContainer = document.getElementById ('tokyo');
		let ul = document.createElement ('ul');
		salesContainer.appendChild(ul);
		for (let i =0; i < hoursOpen.length; i++) {
			let li = document.createElement ('li');
			li.textContent = `${hoursOpen[i]}: ${this.salesByHourArray[i]} cookies sold.`
			ul.appendChild(li);
		}
		let totalLi = document.createElement ('li');
		totalLi.textContent = `Total: ${this.dailyTotal} cookies sold today.`;
		ul.appendChild(totalLi);
	}
}
tokyoStore.render();


let dubaiStore = {
	location: 'Dubai',
	min: 11,
	max: 38,
	avg: 3.7,
	salesByHourArray: [],
	dailyTotal: 0,


	getRandomNumberCustomers: function() {
		let min = Math.ceil(this.min);
		let max = Math.floor(this.max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	},

	calculateCookiesSoldPerHour: function() {
		for (let i=0; i < hoursOpen.length; i++) {
		let numberOfCustomers = this.getRandomNumberCustomers();
		let numberOfCookiesPerHour = Math.ceil(numberOfCustomers * this.avg);
			this.salesByHourArray.push(numberOfCookiesPerHour);
			this.dailyTotal += numberOfCookiesPerHour;
		}
	},

	render: function() {
		this.calculateCookiesSoldPerHour();
		let salesContainer = document.getElementById ('dubai');
		let ul = document.createElement ('ul');
		salesContainer.appendChild(ul);
		for (let i =0; i < hoursOpen.length; i++) {
			let li = document.createElement ('li');
			li.textContent = `${hoursOpen[i]}: ${this.salesByHourArray[i]} cookies sold.`
			ul.appendChild(li);
		}
		let totalLi = document.createElement ('li');
		totalLi.textContent = `Total: ${this.dailyTotal} cookies sold today.`;
		ul.appendChild(totalLi);
	}
}
dubaiStore.render();


let parisStore = {
	location: 'Paris',
	min: 20,
	max: 38,
	avg: 2.3,
	salesByHourArray: [],
	dailyTotal: 0,


	getRandomNumberCustomers: function() {
		let min = Math.ceil(this.min);
		let max = Math.floor(this.max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	},

	calculateCookiesSoldPerHour: function() {
		for (let i=0; i < hoursOpen.length; i++) {
		let numberOfCustomers = this.getRandomNumberCustomers();
		let numberOfCookiesPerHour = Math.ceil(numberOfCustomers * this.avg);
			this.salesByHourArray.push(numberOfCookiesPerHour);
			this.dailyTotal += numberOfCookiesPerHour;
		}
	},

	render: function() {
		this.calculateCookiesSoldPerHour();
		let salesContainer = document.getElementById ('paris');
		let ul = document.createElement ('ul');
		salesContainer.appendChild(ul);
		for (let i =0; i < hoursOpen.length; i++) {
			let li = document.createElement ('li');
			li.textContent = `${hoursOpen[i]}: ${this.salesByHourArray[i]} cookies sold.`
			ul.appendChild(li);
		}
		let totalLi = document.createElement ('li');
		totalLi.textContent = `Total: ${this.dailyTotal} cookies sold today.`;
		ul.appendChild(totalLi);
	}
}
parisStore.render();


let limaStore = {
	location: 'Lima',
	min: 3,
	max: 24,
	avg: 1.2,
	salesByHourArray: [],
	dailyTotal: 0,


	getRandomNumberCustomers: function() {
		let min = Math.ceil(this.min);
		let max = Math.floor(this.max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	},

	calculateCookiesSoldPerHour: function() {
		for (let i=0; i < hoursOpen.length; i++) {
		let numberOfCustomers = this.getRandomNumberCustomers();
		let numberOfCookiesPerHour = Math.ceil(numberOfCustomers * this.avg);
			this.salesByHourArray.push(numberOfCookiesPerHour);
			this.dailyTotal += numberOfCookiesPerHour;
		}
	},

	render: function() {
		this.calculateCookiesSoldPerHour();
		let salesContainer = document.getElementById ('lima');
		let ul = document.createElement ('ul');
		salesContainer.appendChild(ul);
		for (let i =0; i < hoursOpen.length; i++) {
			let li = document.createElement ('li');
			li.textContent = `${hoursOpen[i]}: ${this.salesByHourArray[i]} cookies sold.`
			ul.appendChild(li);
		}
		let totalLi = document.createElement ('li');
		totalLi.textContent = `Total: ${this.dailyTotal} cookies sold today.`;
		ul.appendChild(totalLi);
	}
}
limaStore.render();

/*

let profileContainer = document.getElementById('Kitten Profies')

// 3 steps to render objects to the DOM

//	-- 1 create an element
	// declare the variable and rhen call createElement and pass the html tag name a a string to createElement
	let kittenArticle = document.createElement('article');

	let jumper = {
		name: 'Jumper',
		likes: ['catnip', 'food', 'string'],
		renderList: function() {
			let ul = document.createElement ('u;');
			let li = document.createElement ('li');
			for (let i=0; i < this.likes.length; i ++)
			li.textContent = this.likes[0];
			ul.appendClild(li)
		}
		kitten.Article.appendChild('ul');
	}

//	-- 2 give it content
	// <h3>
	// create an h3 tag with the text "Jumper" and appendss it as a child under the kittenArticle atcicle tag in html
	let kittenH3 = document.createElement
	('h3');
	kittenH3.textContent = 'Jumper';
	kittenArticle.appendChild(kittenH3);

	// <p>
	let kittenP = document.createElement('p');
	textContent - 'Jumper is a cutie patootie.';
	kittenArticle.appendChild(kittenP);

	// <img>
	let kittenIMG = document.createElement('img');
	Image.src = 'img/jumper.jpg'
	Image.alt = 'an image of a cute kitten that would show up if I had it saved at that location, but I don\'t.'
	kittenArticle.appendChild(kittenIMG)

//	-- 3 append it to the DOM
	// parent element in the DOM to append this new element to. Pass appendChild() the new element by its variable name
	profileContainer.appendChild(kittenArticle)
	// envoke the function created at the top

// using CSS selectors in JS
document.querySelector('article:nth-child(2) h3')

*/

/*

// creat one kitten constructor, creat kitten instances, envoke their methods to render them to the DOM
function Kitten(name, arrayOfLikes, about, photoURL, photoAltText) {
	this.kittenName = name;
	this.kittenLikes = arrayOfLikes;
	this.aboutKitten = about;
	this.src = photoURL;
	this.alt =photoAltText;
	this.id = `${this.name} Profile`;
	this.renderList = function() {

		//functional logic
		let kittenArtile = document.getElementByID(this.id); 
		let ul = document.createElement ('u;');
			let li = document.createElement ('li');
			for (let i=0; i < this.likes.length; i ++)
			li.textContent = this.likes[0];
			ul.appendClild(li)
	}
	kittenArticle.appendChild(il);
}
this.render = function(); {
	let kittenArticle = document.creatElement
	kittenH3.textContent = this.name;
	kittenArticle.appendChild(kittenH3);

	let kittenP = document.createElement('p');
	textContent - this.about;
	kittenArticle.appendChild(kittenP);

	let kittenIMG = document.createElement('img');
	Image.src = this.src
	Image.alt = this.alt
	kittenArticle.appendChild(kittenIMG)
}
this.renderList();

//creating the instance
let jumper = new Kitten(
	'Jumper', 
	[string, catnip, food], 
	'Jumper is a cutie patootie', 
	'img/jumper.jpg', 
	'Cute photo of Jumper being cute'
	);

//envoke the function to render this instance to the page
jumper.render();

//creating a table to log kitten likes:
let kittenTableHead = document.querySelector('thead');
let kittenTableBody = document.querySelector('tbody');

kitten.prototype.renderTable = function() {
let tr = document.createElement('tr');
//you can actually use th in the table body too :)
let thName = document.createElement('td');
thName.textContent = this.name;
tr.appendChild(thName)
//this for loop goes through the entire array of likes and puts them each in a cell of theirown on a table
for (let i = 0, i < this.likes.length; i ++) {
		let td = document.createElement('td');
		td.textContent = this.likes[i];
		tr.appendChild(td);
	}
	kittenTable.appendChild(tr);
}

jumper.renderTable();

// then we would create more instances

*/

/*

//this method gets long and there's a lot of code that can go wrong if you're not careful
let oneStudent ={
	name: Phil,
	codeClass: 201,
	inPerson: true
}

let twoStudent ={
	name: Laurel,
	codeClass: 201,
	inPerson: true
}

// constructor function: a function that creates objects
// 'this' refers to a property of an object that WILL BE created
function Student(name, pronouns) {
	this.studentName = name,
	this.studentPronouns = pronouns,
	this.codeClass: 201,
	this.inPerson: true,
	this.introduce = function() {
		console.log(`Hi, my name is ${name}!`)
	}
}

//we use the keyword 'new' to envoke the constructor
//we are creating the "instances" of the Student constructor
let phil = new Student('Phil', 'he/him');
let laurel = new Student('Laurel', 'they/them');

console.log(laurel.studentName);
laurel.introduce();


let studentArray = [phil, laurel]

for (let i = 0; i < studentArray.length; i++) {
	studentArray[i].introduce();
}
console.log(studentArray); //logs each instance of the array and its associated properties


// add a property to only once instance
laurel.hairColor = black;

// prototype edits the constructor to apply to all the instances
Student.prototype.hairColor = 'black';
*/

/*

let numberArray = [
	// 0/0 	0/1		0/2
	[1900, 1920, 1932]
	// 1/0	1/1		1/2
	[1884, 1976, 2001]
	// 2/0	2/1		2/2
	[1904, 1964, 1988]
];
cosole.log(numberArray[2][1]); //1964

// I want to log the numbers
// outer loop runs through through each array in the numberArray
for (let i = 0; i < numberArray.length; i++) {
	// inner loop runs through each number in each array
	for (let j = 0; j < numberArray.length; j++){
		// this is logging 1990, 1984, 1904, 1920, 1976...
		console.log(`numberArray[${j}][${i}])
	}
}

*/