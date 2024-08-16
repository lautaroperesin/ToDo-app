import React from 'react';

function Form({onSubmitHandler}) {
    const taskInput = useRef();

    const onSubmitHandlerEvent = (event) => {
        onSubmitHandler(event);
        taskInput.current.value = '';
    }

    return(
        <form onSubmit={onSubmitHandler} className="formulario">
            <input ref={taskInput} name="taskName" type="text" placeholder="Write your tasks"/>
            <button>CREATE</button>
        </form>
    );
}

export default Form;