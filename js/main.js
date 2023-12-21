let sitName = document.getElementById("bookName");
let sitUrl = document.getElementById("sitUrl");
let bookList = [];
if (localStorage.getItem("Booklist") != null) {
  bookList = JSON.parse(localStorage.getItem("Booklist"));
  displaybook();
}

function addBook() {
  let book = {
    name: sitName.value,
    visit: sitUrl.value,
  };
  if (isValidURL(sitUrl.value) == true && isValidtext(sitName.value) == true) {
    bookList.push(book);
  } else {
    document.getElementById("Box").classList.remove("d-none");
    document.getElementById("bgclose").classList.remove("d-none");
  }
  localStorage.setItem("Booklist", JSON.stringify(bookList));
  displaybook();
}
function closebtn() {
  document.getElementById("Box").classList.add("d-none");
  document.getElementById("bgclose").classList.add("d-none");
}
function displaybook() {
  let resalut = "";
  for (let i = 0; i < bookList.length; i++) {
    resalut += `<tr>
    <td>${i + 1}</td>
    <td>${bookList[i].name}</td>
    <td>
      <button class="btn btn-warning">
        <a href="${bookList[i].visit}"  class="nav-link" target="_blank"
          ><i class="fa-solid fa-eye me-2"></i>visit</a
        >
      </button>
    </td>
    <td>
      <button class="btn btn-danger" onclick='deletbook(${i})'>
        <i  class="fa-solid fa-trash-can me-2"></i>Delete
      </button>
    </td>
  </tr>`;
  }
  document.getElementById("myData").innerHTML = resalut;
}
function deletbook(x) {
  bookList.splice(x, 1);
  localStorage.setItem("Booklist", JSON.stringify(bookList));
  displaybook();
}
function isValidURL(url) {
  let RegExp = /^((http|https):\/\/)(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

  if (RegExp.test(url)) {
    document.getElementById("sitUrl").classList.add("is-valid");
    document.getElementById("sitUrl").classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById("sitUrl").classList.add("is-invalid");
    document.getElementById("sitUrl").classList.remove("is-valid");
    return false;
  }
}
function isValidtext(text) {
  let EXPt = /^[ a-zA-Z0-9]{5,50}$/;
  if (EXPt.test(text)) {
    document.getElementById("bookName").classList.add("is-valid");
    document.getElementById("bookName").classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById("bookName").classList.add("is-invalid");
    document.getElementById("bookName").classList.remove("is-valid");
    return false;
  }
}
