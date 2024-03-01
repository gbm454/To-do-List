const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");;

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // creating a span element to add cross icon to each list item.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // now to clear the input field after clicking add button.
    inputBox.value = '';
    saveData();//saving data after creating new list item.
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); // it is called everytime we check or uncheck item.
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); // it is called everytime an element is removed to update storage.
    }
},false);

// to save data in local storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}

showTask();