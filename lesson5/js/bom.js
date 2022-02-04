
const chap = document.getElementById('favchap'); // input field
const addChap = document.querySelector('button'); // Add chapter button
const list = document.querySelector('.list'); // The ul for the chapters


addChap.addEventListener('click', function() {
  // place the value of the input field into a variable
  const myChap = chap.value;
  chap.value = '';

  // create an li element and delete button
  const chapItem = document.createElement('li');
  const delBtn = document.createElement('button');
  //create a span to hold text
  const chapText = document.createElement('span')

  // populate the li element
  chapItem.appendChild(chapText)
  chapText.textContent = myChap;

  chapItem.appendChild(delBtn);
  delBtn.textContent = String.fromCodePoint(0x274C);

  list.appendChild(chapItem);

  delBtn.addEventListener('click', function() {
    list.removeChild(chapItem);
  })

  chap.focus();
})