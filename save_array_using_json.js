const tasks=["Read","Practice"];
localStorage.setItem("tasks",JSON.stringify(tasks))
const savedText = localStorage.getItem('tasks')
const savedTasks = JSON.parsify(savedText)
console.log(savedTasks[0])