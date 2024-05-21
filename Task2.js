function addTask() {
    var taskInput=document.getElementById("taskInput");
    var taskList=document.getElementById("taskList");

    if(taskInput.value === "" ){
        alert("Please enter a task!");
        return;
    }

    var li=document.createElement("li");
    li.innerHTML="<span onclick='deleteTask(this)'>&times;</span>"+ taskInput.value;
    taskList.appendChild(li);
    taskInput.value="";
}

function deleteTask(task) {
    task.parentElement.remove();
}
