import { useState } from 'react';

const TaskInputs = ({ setIsTaskInputsVisible, setTasks, tasks }) => {
    const [taskText, setTaskText] = useState('');
    return (
        <div>
            <input
                type="text"
                placeholder="Enter Task Name"
                value={taskText}
                onChange={(e) => {
                    setTaskText(e.target.value);
                }}
            />
            <input type="text" />
            <input type="text" />
            <button
                onClick={() => {
                    setTasks([...tasks, taskText]);
                    setIsTaskInputsVisible(false);
                }}
            >
                Add
            </button>
        </div>
    );
};

export default TaskInputs;
