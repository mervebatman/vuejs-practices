const todoText = document.querySelector("#todoText");
const addButton = document.querySelector("#addButton"); 
const todoList = document.querySelector("#todoList"); 

addButton.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = todoText.value;
    todoList.append(listItem);
});