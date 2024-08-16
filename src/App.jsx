import Container from './components/Container'
import Title from './components/Title';
import Form from './components/Form';
import Task from './components/Task';
import { useState, useEffect } from 'react';

function App() {
  // Se inicializa el estado de las tareas desde el Local Storage.
  // Si no existe se inicializa como un arreglo (array) vacío.
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  
  const onSubmitHandler = (event) => {
    // Prevenimos el comportamiento por defecto
    event.preventDefault();
    // Si no escribió nada el usuairo, retornamos y no seguimos ejecutando.
    if(!event.target.elements.taskName.value) return;

    // Creamos un nuevo objeto con la tarea
    const newTask = {
      id: Math.floor(Math.random() * 1000000000000),
      name: event.target.elements.taskName.value,
      completed: false
    }
    
    // Agregamos la nueva tarea al estado
    setTasks([ ...tasks, newTask ]);
  }
  
  useEffect( () => {
    // Guardamos las tareas en el Local Storage
    localStorage.setItem('tasks', JSON.stringify([ ...tasks ]));
  }, [tasks] ); // Se ejecuta cada vez que el estado de las tareas cambia.

  const onTaskChange = (id) => {
    const modifiedTask = tasks.map( (task) => {
      if(task.id === id){
        task.completed = !task.completed;
      }
      return task;
      });
      
      setTasks([...modifiedTask]);
  }
  
  // Renderizamos el componente
  return (
    <>
      <Container>
        <Title valor="ToDo - App" />
        <Form onSubmitHandler={onSubmitHandler} />
        <ul className='tasks-list'>
          {
            tasks.map( (taskItem) => <Task key={taskItem.id}{...taskItem} onToggleHandle={onTaskChange}/>)
          }
        </ul>
      </Container>
    </>
  );
}

export default App;