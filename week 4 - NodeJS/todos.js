const fs = require('fs');
const { Command } = require('commander');
const path = require('path');
const program = new Command();

const TODO_FILE = path.join(__dirname, 'todos.json');

function readTodos() {
  try {
    if (!fs.existsSync(TODO_FILE)) {
      return [];
    }
    const data = fs.readFileSync(TODO_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading todos:', error);
    return [];
  }
}

function writeTodos(todos) {
  try {
    fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error('Error writing todos:', error);
  }
}

function addTodo(task) {
  const todos = readTodos();

  // Determine the next ID (1-based and sequential)
  const nextId = todos.length > 0 
    ? Math.max(...todos.map(todo => todo.id)) + 1 
    : 1;

  const newTodo = {
    id: nextId,
    task,
    completed: false
  };
  todos.push(newTodo);
  writeTodos(todos);
  console.log(`Todo added: ${task}`);
}

function listTodos() {
  const todos = readTodos();
  if (todos.length === 0) {
    console.log('No todos found.');
    return;
  }
  
  console.log('Todos:');
  todos.forEach(todo => {
    const status = todo.completed ? '[✓]' : '[ ]';
    console.log(`${status} ID: ${todo.id} - ${todo.task}`);
  });
}

function deleteTodo(id) {
  let todos = readTodos();
  const initialLength = todos.length;
  todos = todos.filter(todo => todo.id !== Number(id));
  
  if (todos.length < initialLength) {
    writeTodos(todos);
    console.log(`Todo with ID ${id} deleted.`);
  } else {
    console.log(`No todo found with ID ${id}.`);
  }
}

function markTodoDone(id) {
  let todos = readTodos();
  const todo = todos.find(todo => todo.id === Number(id));
  
  if (todo) {
    todo.completed = true;
    writeTodos(todos);
    console.log(`Todo "${todo.task}" marked as done.`);
  } else {
    console.log(`No todo found with ID ${id}.`);
  }
}

// Configure the program with version and description
program
  .name('todo')
  .description('A simple CLI todo management application')
  .version('1.0.0');

// Add commands
program
  .command('add <task...>')
  .description('Add a new todo (supports multiple words)')
  .action((task) => {
    // Join the task array into a single string
    addTodo(task.join(' '));
  });

program
  .command('list')
  .description('List all todos')
  .action(listTodos);

program
  .command('delete <id>')
  .description('Delete a todo by ID')
  .action(deleteTodo);

program
  .command('done <id>')
  .description('Mark a todo as done')
  .action(markTodoDone);

// Parse the arguments
program.parse();