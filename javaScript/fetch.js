// fetch("https://jsonplaceholder.typicode.com/todos/1 ")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const url = "https://jsonplaceholder.typicode.com/users";

function loadData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  const ul = document.getElementById("users-list");
  for (const user of data) {
    console.log(user);
    const li = document.createElement("li");
    li.classList.add("userM");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}

const loadComments2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("data load error");
  }
};
