let taskInput = document.querySelector(".taskInput")
let btnAddTask = document.querySelector("#btn-add-task")
let taskList = document.querySelector("#taskList")
let mensaje = document.querySelector(".mensaje")
let valueInput = taskInput.value
//Funcion agregar item a la lista
function agregarItem(e) {
  let itemList = document.createElement("li")
  let btnDelete = document.createElement("button")
  itemList.innerHTML =  taskInput.value
  taskList.appendChild(itemList)
  itemList.appendChild(btnDelete)
    //Evento al hacer click sobre el item completado agrega estilos
    itemList.addEventListener("click", () => {
      itemList.classList.toggle("completed")
    })
    //Evento que elimina el item de la lista
    btnDelete.addEventListener("click", () => {
      itemList.remove()
    })
  taskInput.value = ""
  taskInput.focus()
}
btnAddTask.addEventListener("click", agregarItem)
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    agregarItem()
    taskInput.focus()
  }
})