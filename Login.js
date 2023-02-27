//https://htmlcolorcodes.com/colors/shades-of-purple/
	//https://htmlcolorcodes.com/colors/shades-of-pink/


document.getElementById("push").addEventListener("click", function() {
  //All the Variables
  var task = document.getElementById("input").value;
  var dueDate = document.getElementById("date").value;
  var colorPick = document.getElementById("color").value;
  var toDoContainer = document.getElementById("toDoContainer");
  var newTask = document.createElement("p");
  var sound = new Audio("https://cdn.freesound.org/previews/403/403015_5121236-lq.mp3");
  var deleteBtn = document.createElement("button");
  
  //Error if no input
if (!task) {
alert("Please enter a task");
return;
}

  //Lets User choose color, write the task, and pick a due date
  newTask.style.fontSize = "18px";
  newTask.style.color = colorPick;
  newTask.innerHTML = task + " - Due Date: " + dueDate;

  //Plays music and allows user to cross and uncross out a task
  newTask.onclick = function() {
    if (newTask.style.textDecoration == "line-through") {
      newTask.style.textDecoration = "none";
      sound.pause();
    } else {
      newTask.style.textDecoration = "line-through";
      sound.play();
    }
  };

  //Deletes a task
  deleteBtn.innerHTML = "Delete";
  deleteBtn.style.color = "red";
  deleteBtn.style.fontSize = "12px";
  deleteBtn.className = "deleteBtn";
   deleteBtn.onclick = function() {
    if (newTask.style.textDecoration != "line-through") {
      sound.pause();
    }
    toDoContainer.removeChild(newTask);
  };

  newTask.appendChild(deleteBtn);
  toDoContainer.appendChild(newTask);
});
