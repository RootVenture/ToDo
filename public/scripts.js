const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('#item');

const itemsArr = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

// JSON.stringify() to convert a data array to a string
localStorage.setItem('items', JSON.stringify(itemsArr));
// JSON.parse() to convert the contents of localStorage back
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = text => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
};

form.addEventListener('submit', e => {
  e.preventDefault();
  // every time the form is submitted, the input value should be added to the localStorage
  itemsArr.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArr));
  liMaker(input.value);
  input.value = '';
});

// loop through all the existing local storage items and display them at the top of the list.
data.forEach(item => liMaker(item));

// “Clear All” button to remove all items from local storage as well as the front end
button.addEventListener('click', () => {
  localStorage.clear();
  //  removing every child node from the ul
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
