let doneData = JSON.parse(localStorage.getItem("done-list"));
console.log(doneData);


for(let i=0; i<doneData.length; i++){
    
    let tbody = document.querySelector('tbody');
    let row = document.createElement('tr');

    let task_name = document.createElement('td');
    // console.log(doneData[i].task_name)
    task_name.innerText = doneData[i].task_name

    let description = document.createElement('td');
    description.innerText = doneData[i].des

    let start_date = document.createElement('td');
    start_date.innerText = doneData[i].start_date

    let End_date = document.createElement('td');
    End_date.innerText = doneData[i].End_date

    let priority = document.createElement('td');
    priority.innerText = doneData[i].priority

    tbody.append(row)
    row.append(task_name,description , start_date, End_date, priority);
   
    }

