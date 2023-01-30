'use strict';
console.log('testing, testing..');

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


let seattleStore = {
	name: 'Seattle',
	min: 32,
	max: 65,
	avg: 6.3,
	numberOfCookies: [],
	getRandomNumberCustomers: function() {
		min = Math.ceil(this.min);
		max = Math.floor(this.max);
		return Math.seattle (Math.random()  (this.max - this.min + 1) + this.min)
	},
	calculateCookiesSoldPerHour: function(){
		//get random number of customers and assign that function to a variable
		let numberOfCustomers = this.getRandomNumberCustomers();
		//for each hour open... for loop
		for (let i=0; i < hoursOpen.length; i++) {
		//multiply random number of customers by avg cookie sold to get cookies sold per hour
			let numberOfCookiesPerHour = (numberOfCustomers * avg);
		//push number of cookies sold that hour to the numberOfCookies array
			numberOfCookiesPerHour.push
		}
	},
	render: function() {
		this.calculateCookiesSoldPerHour();
		console.log('the render fires');

		let parent = document.getElementById ('seattle');
		let ul = document.createElement ('ul');
		let li = document.createElement ('li');
		li.textContent = this.howManyCookies[0]
		ul.appendChild(li)
		parent.appendChild(ul);
	}
}
seattleStore.render();

let tokyoStore = {
	name: 'Tokyo',
	min: 3,
	max: 24,
	avg: 1.2,
	numberOfCookies: [],
	getRandomNumberCustomers: function() {
		min = Math.ceil(this.min);
		max = Math.floor(this.max);
		return Math.seattle (Math.random()  (this.max - this.min + 1) + this.min)
	},
	calculateCookiesSoldPerHour: function(){
		let numberOfCustomers = this.getRandomNumberCustomers();
		
		for (let i=0; i < hoursOpen.length; i++) {
			let numberOfCookiesPerHour = (numberOfCustomers * avg);
			numberOfCookiesPerHour.push
		}
	},
	render: function() {
		this.calculateCookiesSoldPerHour();

		let parent = document.getElementById ('tokyo');
		let ul = document.createElement ('ul');
		let li = document.createElement ('li');
		li.textContent = this.howManyCookies[0]
		ul.appendChild(li)
		parent.appendChild(ul);
	}
}
tokyoStore.render();

let dubaiStore = {
	name: 'Dubai',
	min: 11,
	max: 38,
	avg: 3.7,
	numberOfCookies: [],
	getRandomNumberCustomers: function() {
		min = Math.ceil(this.min);
		max = Math.floor(this.max);
		return Math.seattle (Math.random()  (this.max - this.min + 1) + this.min)
	},
	calculateCookiesSoldPerHour: function(){
		let numberOfCustomers = this.getRandomNumberCustomers();
		for (let i=0; i < hoursOpen.length; i++) {
			let numberOfCookiesPerHour = (numberOfCustomers * avg);
			numberOfCookiesPerHour.push
		}
	},
	render: function() {
		this.calculateCookiesSoldPerHour();

		let parent = document.getElementById ('dubai');
		let ul = document.createElement ('ul');
		let li = document.createElement ('li');
		li.textContent = this.howManyCookies[0]
		ul.appendChild(li)
		parent.appendChild(ul);
	}
}
dubaiStore.render();

let parisStore = {
	name: 'Paris',
	min: 20,
	max: 38,
	avg: 2.3,
	numberOfCookies: [],
	getRandomNumberCustomers: function() {
		min = Math.ceil(this.min);
		max = Math.floor(this.max);
		return Math.seattle (Math.random()  (this.max - this.min + 1) + this.min)
	},
	calculateCookiesSoldPerHour: function(){
		let numberOfCustomers = this.getRandomNumberCustomers();
		for (let i=0; i < hoursOpen.length; i++) {
			let numberOfCookiesPerHour = (numberOfCustomers * avg);
			numberOfCookiesPerHour.push
		}
	},
	render: function() {
		this.calculateCookiesSoldPerHour();

		let parent = document.getElementById ('paris');
		let ul = document.createElement ('ul');
		let li = document.createElement ('li');
		li.textContent = this.howManyCookies[0]
		ul.appendChild(li)
		parent.appendChild(ul);
	}
}
parisStore.render();

let limaStore = {
	name: 'Lima',
	min: 2,
	max: 16,
	avg: 4.6,
	numberOfCookies: [],
	getRandomNumberCustomers: function() {
		min = Math.ceil(this.min);
		max = Math.floor(this.max);
		return Math.seattle (Math.random()  (this.max - this.min + 1) + this.min)
	},
	calculateCookiesSoldPerHour: function(){
		let numberOfCustomers = this.getRandomNumberCustomers();
		for (let i=0; i < hoursOpen.length; i++) {
			let numberOfCookiesPerHour = (numberOfCustomers * avg);
			numberOfCookiesPerHour.push
		}
	},
	render: function() {
		this.calculateCookiesSoldPerHour();

		let parent = document.getElementById ('lima');
		let ul = document.createElement ('ul');
		let li = document.createElement ('li');
		li.textContent = this.howManyCookies[0]
		ul.appendChild(li)
		parent.appendChild(ul);
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