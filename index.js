let todoList = []
const addTodo = () => {
    let input = {content:document.getElementById("todoInput").value,isDone:false}
    todoList.push(input);
    render(todoList);
    saveData();
}

const render = (list) =>{
    let resultHTML = list.map((item, i) => {
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
    render(todoList)
}

function toggleDone (i){
    todoList[i].isDone = !(todoList[i].isDone)
    render(todoList)
}

const filterList = (type) => {
    if (type=='all'){
        render(todoList)
    }else if (type=='done'){
        let filteredList = todoList.filter(item => item.isDone==true);
        render(filteredList)
    }else if (type=='not done'){
        let filteredList = todoList.filter(item => item.isDone==false);
        render(filteredList)
    }   
}

const saveData = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

const getData = () => {
    let data = localStorage.getItem("todoList");
    data = JSON.parse(data);
    if(data == null){
        todoList = []
    }else{
        todoList = data;
        render(todoList);
    }
}
getData();