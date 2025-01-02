function addToDo() {
    const newEl = document.querySelector("input");
    const value = newEl.value;

    const newDivEL = document.createElement("div");
    newDivEL.innerHTML = value;

    document.querySelector("body").appendChild(newDivEL);
}