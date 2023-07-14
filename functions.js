const inputBox = document.getElementById("input-box");
const TaskContainer=document.getElementById("task-container");

function addtasks(){
    if(inputBox.value===''){
        window.alert("You must write something in the list");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        TaskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

TaskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("List Checked");
        savedata();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", TaskContainer.innerHTML);
}

