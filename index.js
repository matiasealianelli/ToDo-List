let taskInput = document.querySelector(".taskInput")
let btnAddTask = document.querySelector("#btn-add-task")
let taskList = document.querySelector("#taskList")
let valueInput = taskInput.value
let popUp = document.querySelector(".pop-up")

//Funcion agregar item a la lista
function agregarItem(e) {
  if (taskInput.value != "") {
    let conteinerItem = document.createElement("div")
    conteinerItem.classList.add("conteiner-item-list")
    let itemList = document.createElement("li")
    itemList.classList.add("item-list")
    let btnDelete = document.createElement("span")
    btnDelete.classList.add("btn-delete")
    let checkItem = document.createElement("span")
    checkItem.classList.add("check-item")  
    checkItem.innerHTML = `<i class="bi bi-check-circle-fill "></i>`
    btnDelete.innerHTML = `<i class="bi bi-trash3 "></i>`
    itemList.innerHTML = taskInput.value
    // conteinerItem.appendChild(itemList)
    conteinerItem.appendChild(checkItem)
    checkItem.appendChild(itemList)
    
    conteinerItem.appendChild(btnDelete)
    taskList.appendChild(conteinerItem)

    //Evento al hacer click sobre el item completado agrega estilos
    conteinerItem.addEventListener("click", () => {
      conteinerItem.classList.toggle("completed")
    })
      //Evento que elimina el item de la lista
  btnDelete.addEventListener("click", () => {
    conteinerItem.remove()
  })
  taskInput.value = ""
  taskInput.focus()
  } else {
    if (taskInput.value != "") {
      return
    } else {
    popUp.innerHTML = "Por favor, ingresa una tarea antes de agregarla"
    popUp.style.color= "red"
    }
  }
  taskInput.addEventListener("keydown", (e) => {
      popUp.innerHTML = ""
  });
}
btnAddTask.addEventListener("click", agregarItem)
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    agregarItem()
    taskInput.focus()
  }
})