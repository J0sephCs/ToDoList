//selectors
const todoInput= document.querySelector('.todoInput');
const todoButton= document.querySelector('.todoButton');
const todoList= document.querySelector('.todoList');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);




//functions
function addTodo(event){
  //Todo DIV
  const todoDiv= document.createElement('div');
  todoDiv.classList.add("todo");
  // create LI
  const newTodo=document.createElement('li');
  newTodo.innerText=todoInput.value;
  newTodo.classList.add('todoItem');
  todoDiv.appendChild(newTodo);
  // Delete Button
  const deleteButton= document.createElement('button');
  deleteButton.innerText='Delete';
  deleteButton.classList.add("deleteButton");
  todoDiv.appendChild(deleteButton);
  //Append to List
  todoList.appendChild(todoDiv);
  //Clear Todo input  value
  todoInput.value="";
}
 

function deleteCheck(e){
  const item= e.target;
  //Delete Todo
  if (item.classList[0] ==="deleteButton"){
    const todo=item.parentElement;
    todo.remove();

  }

}

  
















