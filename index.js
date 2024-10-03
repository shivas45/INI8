
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filter-btn');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskValue = taskInput.value.trim();

  if (taskValue) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text" contenteditable="true">${taskValue}</span>
      <div>
        <button class="complete-task">✔️</button>
        <button class="delete-task">❌</button>
      </div>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
  }
}


taskList.addEventListener('click', function(e) {
  if (e.target.classList.contains('complete-task')) {
    e.target.parentElement.parentElement.classList.toggle('completed');
  }

  if (e.target.classList.contains('delete-task')) {
    e.target.parentElement.parentElement.remove();
  }
});


filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    const filter = this.getAttribute('data-filter');
    const tasks = document.querySelectorAll('#task-list li');

    tasks.forEach(task => {
      switch (filter) {
        case 'all':
          task.style.display = 'flex';
          break;
        case 'completed':
          task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
          break;
        case 'incomplete':
          task.style.display = !task.classList.contains('completed') ? 'flex' : 'none';
          break;
      }
    });
  });
});
