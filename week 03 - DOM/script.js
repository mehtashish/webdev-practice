let index = 1;

function addToDo() {
    const newEl = document.querySelector("input");
    const value = newEl.value;

    const newDivEL = document.createElement("div");
    newDivEL.setAttribute("id", "todo-" + index);
    newDivEL.innerHTML = "<div>" + index + ". " + value + "</div><button onclick='deleteToDo(" + index + ")'>delete</button";

    document.querySelector("body").appendChild(newDivEL);
    index++;
}

function deleteToDo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
}