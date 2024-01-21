let input = document.getElementById("work");
let todo = localStorage.getItem("todo");
let arr = (todo) ? JSON.parse(todo) : [];

function addWork() {
  let val = input.value;
  if (val == "") {
    alert("Please enter valid work");
  } else {
    arr.push(val);
    localStorage.setItem('todo', JSON.stringify(arr));
    displayWorks(); // Call the function to display works after adding a new one
  }
  input.value = "";
}

function displayWorks() {
  let textContainer = document.querySelector('.text');
  textContainer.innerHTML = ""; // Clear the existing content

  arr.forEach((data, index) => {
    textContainer.innerHTML +=
      `
      <ul>
        <li>${data}</li>
        <li onclick = "DeleteItem(${index})" class="del">DELETE</li>
      </ul>
    `;
  });
}

function DeleteItem(e) {
  let deleted = arr.filter((data, index) => {     //deleted is an array or object
    return index != e;
  })
  localStorage.setItem('todo', JSON.stringify(deleted));
  location.reload();
}

// Call the displayWorks function initially to show any existing items in local storage
displayWorks();
