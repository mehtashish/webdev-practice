let index = 1;

function addToDo() {
    const newEl = document.querySelector("input");
    const value = newEl.value;

    const newDivEL = document.createElement("div");
    newDivEL.innerHTML = index + ". " + value;

    document.querySelector("body").appendChild(newDivEL);
    index++;
}