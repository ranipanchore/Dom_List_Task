let progressData = JSON.parse(localStorage.getItem("priority-list"));
console.log(progressData);


    
doneData =  JSON.parse(localStorage.getItem("done-list"))  || []
doneObject = {}

for(let i=0; i<progressData.length; i++){
    
    let tbody = document.querySelector('tbody');
    let row = document.createElement('tr');

    let task_name = document.createElement('td');
    // console.log(progressData[i].task_name)
    task_name.innerText = progressData[i].task_name

    let description = document.createElement('td');
    description.innerText = progressData[i].des

    let start_date = document.createElement('td');
    start_date.innerText = progressData[i].start_date

    let End_date = document.createElement('td');
    End_date.innerText = progressData[i].End_date

    let priority = document.createElement('td');
    priority.innerText = progressData[i].priority

    let done = document.createElement('td');
    done.innerText = "Add to Done"
    // console.log(done);

    tbody.append(row)
    row.append(task_name,description , start_date, End_date, priority, done);
    
    doneObject = progressData[i];
    doneData.push(doneObject);
    // console.log(doneData);

    done.addEventListener("click", function(){
        row.remove() ;
        localStorage.setItem("done-list",JSON.stringify(doneData));
        // window.location.href = "Done.html";
        localStorage.removeItem("priority-list");
    });
    

}

