

let form = document.querySelector("form")
let task_name = document.getElementById("name");



let des = document.getElementById("des");
let start_date = document.getElementById("start_date");
let End_date = document.getElementById("End_date");
let priority = document.getElementById("priority");
let addToProgress = document.createElement('Button');


// console.log(addToProgress);
let form_Array = JSON.parse(localStorage.getItem("task-list")) || []

form.addEventListener("submit",form_value);

function form_value(){
event.preventDefault();
task_name =form.name.value;
des =form.des.value;
start_date =form.start_date.value;
End_date =form.End_date.value;
priority = form.priority.value;

// console.log(priority);



 addToProgress.value = "Add";

   // console.log(
   //  task_name,
   //  des,
   //  start_date,
   //  End_date,
   //  priority,
   //  addToProgress
   // )

   form_data = {
    task_name,
    des,
    start_date,
    End_date,
    priority,
    addButton:addToProgress.value
   }
   // console.log(form_data);
   form_Array.push(form_data)
   // console.log(form_Array);
   localStorage.setItem("task-list",JSON.stringify(form_Array));
//    window.location.href = "Dashboard.html";
   form_clear();
}

function form_clear()
{
    task_name.innerText="";
    des.innerText="";
    start_date.innerText="";
    End_date.innerText="";
    priority.innerText="";
}

