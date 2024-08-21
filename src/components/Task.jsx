function Task ({id, name, completed, onToggleHandle}) {

    const className = completed ? 'task-item-completed' : 'task-item';

    const onToggle = () => {
        onToggleHandle(id);
    }

    return (
    <li>
        <div className={className} onClick={onToggle}>
            <span>{name}</span>
        </div>
    </li>
)}
export default Task;