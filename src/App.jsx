import Container from './components/Container'
import Title from './components/Title';
import Form from './components/Form';
import { useState, useEffect } from 'react';

function App() {
  console.log("Componente App ejecutado");

  const [tasks, setTasks] = useState([]);

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    console.log(event);
    
    const taskName = event.target.elements.taskName.value
    saveTask(taskName);
  }

  const saveTask = (taskName)=>{
    const idValue = Math.floor(Math.random() * 1000000000000000);
    const newTask = {text: taskName, selected: false, id: idValue};

    if(!newTask) return;

    setTasks([...tasks, newTask]);
  }

  useEffect( ()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    console.log('useEffect1 ejecutado');  // Carga las tareas desde el localstorage al montar el componente
  }, [] );
  
  useEffect( ()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('useEffect2 ejecutado');  // Guarda tareas en el localstorage cada vez que cambian
  }, [tasks] );

  return (
    <>
      <Container>
        <Title valor="ToDo APP"></Title>
        <Form onSubmitHandler={onSubmitHandler}/>
        {JSON.stringify(tasks)}
      </Container>
    </>
  );
}

export default App;