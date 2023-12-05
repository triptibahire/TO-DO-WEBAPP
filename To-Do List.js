var todoisArray = [];
function saveTask() {
    var b = document.getElementById("textItem").ariaValueMax;
    var todoobject = {
        taskId: taskListArray.length + 1,
        taskName: taskName
    };
    taskListArray.push(todoobject)
}