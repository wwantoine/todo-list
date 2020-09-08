let todoList = []
const addTodo = () => {
    let input = {content:document.getElementById("todoInput").value,isDone:false}
    todoList.push(input);
    render();
}

const render = () =>{
    let resultHTML = todoList.map((item, i) => {
        if (item.isDone == false) {
            return `<li>${item.content} <a href='#' onclick='remove(${i})'>x</a><a href='#' onclick='toggleDone(${i})'>Mark Done</a></li>\n`;
         } else {
            return `<li>${item.content} <a href='#' onclick='remove(${i})'>x</a><a href='#' onclick='toggleDone(${i})'>Mark Undone</a></li>\n`.strike();
         }
    }).join("");
  
    document.getElementById("resultArea").innerHTML = resultHTML;
}

function remove (i){
    todoList.splice(i, 1)
    render()
}

function toggleDone (i){
    todoList[i].isDone = !(todoList[i].isDone)
    render()
}