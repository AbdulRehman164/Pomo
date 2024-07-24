import { useState } from 'react';
import TaskInputs from './TaskInputs';
const Task = () => {
    const [isTaskInputsVisible, setIsTaskInputsVisible] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setIsTaskInputsVisible(true);
                }}
            >
                Add Task
            </button>
            {isTaskInputsVisible ? <TaskInputs /> : null}
        </div>
    );
};

export default Task;
