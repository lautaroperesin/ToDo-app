function Form({onSubmitHandler}) {
    return(
        <form onSubmit={onSubmitHandler} className="formulario">
            <input name="taskName" type="text" placeholder="Write your tasks"/>
            <button>CREATE</button>
        </form>
    );
}

export default Form;