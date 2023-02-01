'use strict'

// globals
let storeHoursArray = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a. m.', '11 a. m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.']
// could also be a global
// let allStoresArray = [];
// let seattle = new Store('seattle', 23, 65, 6.3);
// let tokyo = new Store('tokyo', 3, 24, 1.2);
// let dubai = new Store('dubai', 11, 38, 3.7);
// let paris = new Store('paris', 20, 38, 2.3);
// let lima = new Store('lima', 2, 16, 4.6);
// allStoresArray.push(seattle, tokyo, dubai, paris, lima);

function Store(location, min, max, avg) {
	this.storeLocation = location;
	this.minCustomers = min;
	this.maxCustomers = max;
	this.avgCookies = avg;
	this.totalCookiesPerHour = [];
	this.totalCookiesPerDay = 0;

	this.getRandomNumberCustomers = function () {
		//console.log(this.minCustomers, this.maxCustomers, this.avgCookies)
		return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
	};

	this.calculateCookiesSoldPerHour = function () {
		for (let i = 0; i < storeHoursArray.length; i++) {
			let numberOfCustomers = this.getRandomNumberCustomers();
			//console.log(numberOfCustomers);
			let cookiesPerHour = Math.ceil(numberOfCustomers * this.avgCookies);
			this.totalCookiesPerHour.push(cookiesPerHour);
			this.totalCookiesPerDay += cookiesPerHour;
			//console.log(cookiesPerHour);
		}
	};


	this.renderTable = function () {
		this.calculateCookiesSoldPerHour();
		let storesTable = document.getElementById('salesTable');
		let trRow = document.createElement('tr');
		storesTable.appendChild(trRow);
		let thStore = document.createElement('th')
		thStore.textContent = this.storeLocation;
		trRow.appendChild(thStore);

		for (let i = 0; i < storeHoursArray.length; i++) {
			let tdSales = document.createElement('td');
			tdSales.textContent = this.totalCookiesPerHour[i];
			//console.log(this.totalCookiesPerHour[i]);
			trRow.appendChild(tdSales);
		}
		let sumTotal = 0;
		for (let i = 0; i < this.totalCookiesPerHour.length; i++) {
			//console.log(this.totalCookiesPerHour[i]);
			sumTotal += this.totalCookiesPerHour[i];
			//console.log(sumTotal);
		}
		let tdDailyTotal = document.createElement('td');
		tdDailyTotal.textContent = sumTotal;
		trRow.appendChild(tdDailyTotal)
	};
};

let renderTableHead = function () {
	let storesTableHead = document.getElementById('salesTable');
	let tHead = document.createElement('thead');
	storesTableHead.appendChild(tHead);
	let tHeadBlank = document.createElement('th');
	tHeadBlank.textContent = '';
	tHead.appendChild(tHeadBlank);

	for (let i = 0; i < storeHoursArray.length; i++) {
		let tdHour = document.createElement('td');
		tdHour.textContent = storeHoursArray[i];
		tHead.appendChild(tdHour);
	}
	let thTotal = document.createElement('th');
	thTotal.textContent = 'Daily Location Total';
	tHead.appendChild(thTotal);
};

let renderTableFoot = function () {
	let storesTableFoot = document.getElementById('salesTable');
	let tFoot = document.createElement('tFoot');
	storesTableFoot.appendChild(tFoot);

	// outer loop
	let sumDailyTotalAllStores = 0;
	for (let i = 0; i < storeHoursArray.length; i++) {
		let sumHourlyAllStores = 0;

		// building the "totals" label in the footer
		if (i === 0) {
			let tdFootTotal = document.createElement('td');
			tdFootTotal.textContent = "Totals"
			tFoot.appendChild(tdFootTotal);
		}

		//get the hourly totals for all stores
		for (let j = 0; j < storesArray.length; j++) {
			//console.log(storesArray[j]);
			console.log(storesArray[j].totalCookiesPerHour[i]);
			sumHourlyAllStores += storesArray[j].totalCookiesPerHour[i];
		}
		let tdFoot = document.createElement('td');
		tdFoot.textContent = sumHourlyAllStores;
		tFoot.appendChild(tdFoot);

		sumDailyTotalAllStores += sumHourlyAllStores;
		//console.log(sumDailyTotalAllStores);
	}
	let tdGrandTotal = document.createElement('td');
	tdGrandTotal.textContent = sumDailyTotalAllStores;
	tFoot.appendChild(tdGrandTotal);
};

let seattle = new Store(
	'Seattle',
	23,
	65,
	6.3
);

let tokyo = new Store(
	'Tokyo',
	3,
	24,
	1.2
);

let dubai = new Store(
	'Dubai',
	11,
	38,
	3.7
);

let paris = new Store(
	'Paris',
	20,
	38,
	2.3
);

let lima = new Store(
	'Lima',
	2,
	16,
	4.6
);

let storesArray = [seattle, tokyo, dubai, paris, lima];
for (let i = 0; i < storesArray.length; i++) {
	storesArray[i].renderTable();
	//console.log(storesArray[i].totalCookiesPerHour[i]);
};

// let render = function () {
renderTableHead();
// 	renderTable();
renderTableFoot();
// };

// storesArray.render();

