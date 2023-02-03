'use strict';

// our window into the DOM
let profileContainer = document.getElementById('kittenProfiles');
console.log(profileContainer);

// kitten table windows into the DOM
let kittenTableBody = document.querySelector('tbody');
let kittenTableHead = document.querySelector('thead');

// create one kitten constructor function

function Kitten(name, arrayOfLikes, about, photoURL, photoAlt) {
  this.name = name;
  this.likes = arrayOfLikes;
  this.about = about;
  this.photoURL = photoURL;
  this.photoAlt = photoAlt;
  this.id = `${this.name}Profile`;
  this.renderList = function () {
    // functional logic
    let kittenArticle = document.getElementById(this.id);
    let ul = document.createElement('ul');

    for (let i = 0; i < this.likes.length; i++) {
      let li = document.createElement('li');
      li.textContent = this.likes[i];
      ul.appendChild(li);
    }
    kittenArticle.appendChild(ul);
  }
  this.render = function () {
    // create and append the article
    let kittenArticle = document.createElement('article');
    kittenArticle.setAttribute('id', this.id);
    profileContainer.appendChild(kittenArticle);

    // h3
    let kittenH3 = document.createElement('h3');
    kittenH3.textContent = this.name;
    kittenArticle.appendChild(kittenH3);

    // p
    let p = document.createElement('p');
    p.textContent = this.about;
    kittenArticle.appendChild(p)

    // img
    let img = document.createElement('img');
    img.src = this.photoURL;
    img.alt = this.photoAlt;
    kittenArticle.appendChild(img);

    this.renderList();
    this.renderTable();
  }
}

Kitten.prototype.renderTable = function() {
  let tr = document.createElement('tr');
  let thName = document.createElement('th');
  thName.textContent = this.name;
  tr.appendChild(thName);
  for (let i = 0; i < this.likes.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.likes[i];
    tr.appendChild(td);
  }
  kittenTableBody.appendChild(tr);
}

// create Kitten instances

// Kitten(name, arrayOfLikes, about, photoURL, photoAlt)
let jumper = new Kitten(
  'Jumper',
  ['catnip', 'food', 'string'],
  'Jumper the cat is wonderful!',
  'images/jumper.jpeg',
  'Jumper is very cute here.'
);
let serena = new Kitten(
  'Serena',
  ['string', 'feathers', 'soft beds'],
  'Serena is a sweet kitty',
  'images/serena.jpeg',
  'adopt Serena'
);
let frankie = new Kitten(
  'Frankie',
  ['naps', 'treats', 'cat tree'],
  'Frankie is adorable, and is 12 months old.',
  'images/frankie.jpeg',
  'Frankie is available for adoption'
);

// invoke their methods to render them to the DOM
let kittenArray = [jumper, frankie, serena];
frankie.render();
jumper.render();
serena.render();


// GET DATA FROM A FORM

// 1 - Get element from the dom
let kittenForm = document.querySelector('form');

// 3 - Define our event handler

let handleSubmit = function(event) {
  event.preventDefault();
  // event.target.<name on your HTML input>.value
  console.log(`hello ${event.target.kittenName.value}`);
  let kittenName = event.target.kittenName.value;
  let ageInMonths = parseInt(event.target.ageInMonths.value);
  let aboutKitten = event.target.aboutKitten.value;
  let imageURL = event.target.imageURL.value;
  let imageAlt = event.target.imageAlt.value;

  console.log(typeof ageInMonths);

  let favorites = [
    event.target.fav1.value,
    event.target.fav2.value,
    event.target.fav3.value
  ]
  // let's create an instance of Kitten using the information from the form
  // Kitten(name, arrayOfLikes, about, photoURL, photoAlt)
  let newKitten = new Kitten(kittenName, favorites, aboutKitten, imageURL, imageAlt);
  kittenArray.push(newKitten);
  newKitten.render();
}

// 2 - Add the event listener
kittenForm.addEventListener('submit', handleSubmit);

// *****

// step 1: event handling
// must get the container we are listening to from the DOM
let myContainer = document.getElementById('container');
let parentEl = document.getElementById('results');


//step 3:  create event handler to do specific things when event is FIRED or RAISED
// event Handler
// takes in ONE parameter - the event
let handleClick = function(event) {
  console.log(event);

  if (event.target.id === 'box-one') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 1 was clicked!';
    pEl.className = 'class-I-am-adding';
    parentEl.append(pEl);
  } else if (event.target.id === 'box-two') {
    let pEl = document.createElement('p');
    pEl.textContent = 'clicked:  Box 2!';
    pEl.setAttribute('class', 'class-I-am-adding');
    parentEl.append(pEl);
  } else if (event.target.id === 'box-three') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 3 done got clicked!';
    parentEl.appendChild(pEl);
  } else {
    let pEl = document.createElement('p');
    pEl.textContent = 'FOLLOW INSTRUCTIONS!!!';
    parentEl.appendChild(pEl);
  }
};

// step 2: add event listener, we pass in two arguements!  event as string, and callback function
// placed at bottom typically (below other function declarations)
myContainer.addEventListener('click', handleClick);

/*
EVENT HANDLING
Event — is FIRED or RAISED
When an event is fired
Code is TRIGGERED
EVENT TYPES
- click
- submit
Also
- input
- hover
- on change
- on page load
- on mouse over
- on key release
* Event listener
- code that is triggered when an event is fired
* Bind
- blind or tether an event listener to the event
* Event Handlers
- the code that runs in response to the event
There are lot of different ways of doing this.
Some are old - don't use thhem
What we will use:
****** DOM Level 2 Event Handlers ********
1 - I need an element from the DOM that I can attach an event to
use either
document.getElementById()
document.querySelector()
*/

let myContainer = document.getElementById('container');
let results = document.getElementById('results');

/*
3 -
Event handler
- the code that is envoked by the Event Listerner when an event is raised
*/

function handleClick(event) {
  console.log(event.target.id);
  let pTag = document.createElement('p');
  if (event.target.id) {
    pTag.textContent = `${event.target.id} was clicked.`
  } else {
    pTag.textContent = `Please click a box.`
  }
  results.appendChild(pTag);
}


/*
2 - Event Listener
- addEventListener take in 2 parameters
- 1 - the type of event as a string
- 2 - a callback function
elementName.addEventListener('typeOfEvent', functionName);
*/

myContainer.addEventListener('click', handleClick)

// addEventListener envokes the callback function when a click event occurs. It passing in an event object when it invokes the callback function
// handleClick(event)

/*
// CALLBACK FUNCTION EXAMPLE
function greeting(name) {
  console.log(`Hello ${name}`);
}
function capitalize(name) {
  let cap = name.toUpperCase();
  console.log(cap);
}
function processUserInput(callback) {
  let name = prompt('what is your name?');
  callback(name); // the function we passed gets invoked by this processUserInput function
}
processUserInput(greeting);
processUserInput(capitalize);
*/




/*
DO NOT DO THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
bad event listeners
older ways of doing this, that will only work 70% of the time.
- event listener in the HTML
Ex.:
<article onClick="handleClick">
- this type of event listener in the JavaScript
Ex:
button(document.getElementById('button')).onSubmit=handleEvent;
in HTML:
<div id="button"></div>
*/

// Here's the constructor for the individual comments
const Comment  = function(userName, text) {
  this.userName = userName;
  this.text = text;
};

Comment.prototype.render = function() {
  const listItem = document.createElement('li');
  listItem.innerHTML = '<img width="100px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em>';
  return listItem;
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Just setting up some variables for DOM access
const chatList = document.getElementById('chat-list');
const chatForm = document.getElementById('chat-form');
const clearChatList = document.getElementById('clear-chat-list');
let allComments = [];

const renderAllComments = function() {
  chatList.innerHTML = '';
  for (let i = 0; i < allComments.length; i++) {
    chatList.appendChild(allComments[i].render());
  }
  // allComments.forEach(function(unicorn) {
  //   chatList.appendChild(unicorn.render());
  // });
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// This function handles the submission of comments
function handleCommentSubmit(event) {
  console.log(event);
  event.preventDefault(); //gotta have it. prevents page reload

  if (!event.target.says.value || !event.target.who.value) {
    return alert('Fields cannot be empty!');
  }

  const commenter = event.target.who.value;
  let remark = event.target.says.value;

  if (commenter === 'Dan') {
    remark = '@$^#$%$^@#$%@';
  }

  if (commenter === 'Benton') {
    remark = remark.toUpperCase();
  }

  if (commenter === 'Jonny') {
    remark = 'Heeeeeeeere\'s Jonny!!!';
  }

  const newComment = new Comment(commenter, remark);

  console.log('Comment by ' + event.target.who.value + ' at ' + Date());

  event.target.who.value = null;
  event.target.says.value = null;

  allComments.push(newComment);
  renderAllComments();
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
chatForm.addEventListener('submit', handleCommentSubmit);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for the 'Clear all comments' button
clearChatList.addEventListener('click', function() {
  chatList.innerHTML = '';
  console.log('You just cleared the chat list!');
  allComments = [];
});

// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

'use strict';

// create a kitten factory
function Kitten (name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats) {
  // this is a capital K kitten because it's a constructor function
  this.name = name;
  this.age = this.assignAge();
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
}

// add a method to JavaScript's existing Number class to calcualte "cat years" in relation to human years
Number.prototype.calculateAgeInHumanYears = function() {
  // the first year of a cat's life is equal to approximately 15 human years
  return Math.floor(this/12 * 15);
}

//add a method to JavaScript's existing String object to capatalize first letter of string
String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
}

// add assignAge method - here we define the function inline
Kitten.prototype.assignAge = function() {
  // the random months number must be persisted so we can use more than once
  let months = randomInRange(3, 12)
  this.age = months + ' months';
  this.ageInCatYears = months.calculateAgeInHumanYears();
};

Kitten.prototype.meow = function () {
  console.log(this.name + ' says meow!');
};

function randomInRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// add render method
Kitten.prototype.render = function() {

  const parentElement = document.getElementById('kittenProfiles');

  const article = document.createElement('article');
  parentElement.appendChild(article);

  const h2 = document.createElement('h2');
  h2.textContent = this.name.capitalize();
  article.appendChild(h2);

  const p = document.createElement('p');
  // human to cat year comparison added
  p.textContent = this.name.capitalize() + ' is adorable, and is ' + this.age + ' old. That\'s like a ' + this.ageInCatYears + ' year old human!';
  article.appendChild(p);

  const ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < this.interests.length; i++) {
    const li = document.createElement('li');
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }

  const table = document.createElement('table');

  const row1 = document.createElement('tr');
  const row2 = document.createElement('tr');

  const th1 = document.createElement('th');
  th1.textContent = 'Good With Kids';
  const th2 = document.createElement('th');
  th2.textContent = 'Good With Dogs';
  const th3 = document.createElement('th');
  th3.textContent = 'Good With Other Cats';

  const td1 = document.createElement('td');
  td1.textContent = this.isGoodWithKids;
  const td2 = document.createElement('td');
  td2.textContent = this.isGoodWithDogs;
  const td3 = document.createElement('td');
  td3.textContent = this.isGoodWithOtherCats;

  row1.appendChild(th1);
  row1.appendChild(th2);
  row1.appendChild(th3);

  row2.appendChild(td1);
  row2.appendChild(td2);
  row2.appendChild(td3);

  table.appendChild(row1);
  table.appendChild(row2);
  article.appendChild(table);

  const img = document.createElement('img');
  img.setAttribute('src', 'images/' + this.name + '.jpeg');
  img.setAttribute('alt', 'cute picture of ' + this.name + ', who is an orange and white cat. You should really adopt him.');
  article.appendChild(img);
}

const kittenForm = document.getElementById('addKittenForm');

// event listeners need to know: what event do they care about, and what do they want to do when it happens.
kittenForm.addEventListener('submit',
  function (event) {
    event.preventDefault();
    const name = event.target.name.value;
    let interests = event.target.interests.value;
    interests = interests.split(',');
    const isGoodWithKids = event.target.isGoodWithKids.checked;
    const isGoodWithDogs = event.target.isGoodWithDogs.checked;
    const isGoodWithOtherCats = event.target.isGoodWithOtherCats.checked;

    const newKitten = new Kitten(name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats);
    newKitten.assignAge();
    newKitten.render();
    kittenForm.reset();
  }
);

