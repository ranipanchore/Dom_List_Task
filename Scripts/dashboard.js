let dashboard_data = JSON.parse(localStorage.getItem("task-list"));
// console.log(dashboard_data);

let tbody = document.querySelector('tbody');
display(dashboard_data);



let selectPriorityData = document.getElementById("priority");
selectPriorityData.addEventListener("change", filterPriority);

progressData = JSON.parse(localStorage.getItem("priority-list")) || []

progressObject = {};

function display(dashboard_data){
    tbody.innerHTML = "";
    for(let i=0; i<dashboard_data.length; i++){
        let taskCount = document.getElementById("total_task");
        let count = dashboard_data.length;
        
        taskCount.innerText = count;

        let row = document.createElement('tr');
        
        let task_name = document.createElement('td');
        task_name.innerText = dashboard_data[i].task_name
    
        let description = document.createElement('td');
        description.innerText = dashboard_data[i].des
    
        let start_date = document.createElement('td');
        start_date.innerText = dashboard_data[i].start_date
    
        let End_date = document.createElement('td');
        End_date.innerText = dashboard_data[i].End_date
    
        let priority = document.createElement('td');
        priority.innerText = dashboard_data[i].priority
    
        let progress = document.createElement('td');
        progress.innerText = dashboard_data[i].addButton
        // console.log(progress);
    
        tbody.append(row)
        row.append(task_name,description , start_date, End_date, priority, progress);
        
      
    
        progress.addEventListener("click", function(){
         
            progressObject = dashboard_data[i]
    
            progressData.push(progressObject);
            // console.log(progressData);
            row.remove() 
            localStorage.setItem("priority-list",JSON.stringify(progressData));
        });
    }
    
}

function filterPriority(){
    // console.log(selectPriorityData.value)
    let filterArray;
        filterArray = dashboard_data.filter(function(el){
            if(el.priority == "High" && selectPriorityData.value == "High")
            {
                return el
            }
            else if(el.priority == "Low" && selectPriorityData.value == "Low")
            {
                return el
            }
            else if(el.priority == "Medium" && selectPriorityData.value == "Medium")
            {
                return el
            }
        })
        // console.log(filterArray)
        display(filterArray);
}


