let input = document.querySelector('#list-entry');
let addBtn = document.querySelector('#list-add');
let tasks = document.querySelector('.tasks');


input.addEventListener('keyup', () => {
    if (input.value.trim() !== 0){
    addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click', () =>{
  if (input.value.trim() === "") {
    alert("please enter a task To-Do!");
} else {
    let newitem = document.createElement('div');
    newitem.classList.add('task-items');
    newitem.innerHTML = `
    <p> ${input.value} </p>
        <div class="act-btn">
           <i class="fa-solid fa-square-check"></i>
           <i class="fa-solid fa-trash"></i>
        </div>
    `;
    tasks.appendChild(newitem);
    input.value = "";
}});
 //delete task from list
  
    tasks.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-trash')){
            e.target.parentElement.parentElement.remove();
        }
})
    tasks.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-square-check')){
            e.target.parentElement.parentElement.classList.
            toggle('completed');
        }
    });