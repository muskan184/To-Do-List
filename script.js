const inputbox = document.getElementById("input-box")
const listcontsiner = document.getElementById("list-container")
function addTask() {
    if (inputbox === '') {
        alert("you must write something")
    }
    else {
        let li = document.createElement("li");
        li.innerText = inputbox.value;
        listcontsiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata()
}
listcontsiner.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false);

function savedata() {
    localStorage.setItem("data", listcontsiner.innerHTML);
}
function showtask() {
    listcontsiner.innerHTML = localStorage.getItem("data");
}
showtask();