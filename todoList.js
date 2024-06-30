let addedTask = JSON.parse(localStorage.getItem("tasksAdded")) || [];
let completedTask = JSON.parse(localStorage.getItem("completedTasks")) || [];

function addTask() {
  let userInput = document.getElementById("userInput");
  if (userInput.value.trim()) {
    addedTask.push(userInput.value.trim());
    setTasks();
    displayAddedTask();
    userInput.value = "";
  }
}

function setTasks() {
  localStorage.setItem("tasksAdded", JSON.stringify(addedTask));
  localStorage.setItem("completedTasks", JSON.stringify(completedTask));
}

function displayAddedTask() {
  let tasksAddedHTML = "";
  addedTask.forEach((task, index) => {
    tasksAddedHTML += `
      <div class="task-name">
        <span>${task}</span>
        <div>
          <button class="btn btn-success btn-sm me-2" onclick="finishTask(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="white"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114L745-669l56 56-377 377Z"/></svg>
          </button>
          <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="white"><path d="M261-120q-32 0-55-22.5T183-197v-543h-43v-60h680v60h-43v543q0 32-22.5 54.5T699-120H261Zm44-120h60v-423h-60v423Zm145 0h60v-423h-60v423Zm145 0h60v-423h-60v423Z"/></svg>
          </button>
        </div>
      </div>
    `;
  });
  document.getElementById("tasksAdded").innerHTML = tasksAddedHTML;
}

function displayCompletedTask() {
  let tasksCompletedHTML = "";
  completedTask.forEach((task) => {
    tasksCompletedHTML += `
      <div class="task-name">
        <span>${task}</span>
      </div>
    `;
  });
  document.getElementById("tasksCompleted").innerHTML = tasksCompletedHTML;
}

function deleteTask(index) {
  addedTask.splice(index, 1);
  setTasks();
  displayAddedTask();
}

function finishTask(index) {
  let task = addedTask.splice(index, 1);
  completedTask.push(task);
  setTasks();
  displayAddedTask();
  displayCompletedTask();
}

function clearCompletedTask() {
  completedTask = [];
  setTasks();
  displayCompletedTask();
}
