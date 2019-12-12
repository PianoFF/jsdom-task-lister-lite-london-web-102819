document.addEventListener("DOMContentLoaded", function(){
  // your code here
  const submitTask = document.querySelector("#create-task-form input[type='submit']");
  submitTask.addEventListener("click", handleSubmit);
});


function handleSubmit(e){
  e.preventDefault();

  let toDoList = document.querySelector("#tasks"); 
  const taskDescription = document.getElementById("new-task-description").value;
  
  addTaskToTasksList(toDoList, taskDescription)
};


function addTaskToTasksList(toDoList, taskDescription){
  let li = document.createElement("li");
  li.className = priorityDropDown.value; 
  li.innerText = taskDescription;
  if (li.className === "High"){
    li.style.color="red";
  }
  else if (li.className === "Medium"){
    li.style.color="blue";
  }
  else {
    li.style.color="green";
  }
  toDoList.appendChild(li);

  const button = document.createElement("button");
  button.innerText = 'Delete';
  li.append(button);


  button.addEventListener('click', deleteTask);

  toDoList.append(li);
  // alert(li.innerText);

}; 

function deleteTask(event) {
  const button=event.target;
  button.parentElement.remove();
};



const priorityDropDown=document.querySelector('select[name=priority]');

function createAnOption(name){
  let prioritySelection=document.createElement('option');
  prioritySelection.className=name;
  prioritySelection.innerText=name;

  priorityDropDown.appendChild(prioritySelection);
}
createAnOption("High");
createAnOption("Medium");
createAnOption("Low");


const sortButton=document.querySelector("#sort");
sortButton.style.border = "thick solid #FFA49C"; 
sortButton.style.fontSize = "large"; 


sortButton.addEventListener("click",function(e){
    e.preventDefault();
    sortList(document.querySelector("#tasks"));
});

function sortList(ul){   
  //   debugger       
  let allLi=ul.querySelectorAll("li");
  let allLiArray=[...allLi];

  let sortedAA = allLiArray.sort(function(a,b){
    let contentA=a.className;
    let contentB=b.className;
    if (contentA == contentB){
      return 0;
    } else if (contentA === "High" || (contentA === "Medium" && contentB === "Low")) {
      return -1; 
    } else {
    return 1;
    }
});

  sortedAA.forEach(liEl => {ul.appendChild(liEl)} )
}