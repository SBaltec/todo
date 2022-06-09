import './styles.css';

import { Todo, TodoList} from './classes';
import { crearTodoHtml} from './js/componentes';

export const todoList = new TodoList();
// const tarea= new Todo('Aprender Javascript');
// todoList.nuevoTodo(tarea);
// tarea.completado=true;

// crearTodoHtml(tarea);

// localStorage.setItem('my-key','1234a');
// sessionStorage.setItem('my-key','1234a');
// setTimeout(()=> {
//     localStorage.removeItem('my-key');
// },1500);
todoList.todos.forEach(crearTodoHtml);

// todoList.todos[0].imprimirClase();
console.log('todos', todoList.todos);