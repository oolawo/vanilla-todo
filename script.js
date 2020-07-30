Add.addEventListener("click",AddTask);

function AddTask() {
	var listitem = document.createElement("li");//create list element
	listitem.innerHTML = document.getElementById('inputTask').value; //set list test = to input value
	document.getElementById('inputTask').value = ""; 
	console.log(listitem);
	tasklist.appendChild(listitem);
}

document.body.onkeyup = function(e){
var	inputval = document.getElementById('inputTask').value;
if(e.keyCode==13&&inputval!=""){	
	AddTask()
	}
}

tasklist.addEventListener("click",RemoveTask);

function RemoveTask(){
	tasklist.removeChild(event.target); //remove whatever has been clicked within the list
}
