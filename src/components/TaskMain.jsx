import { useState } from 'react';
import TaskInputs from './TaskInputs';
import Tasks from './Tasks';

const TaskMain = () => {
    const [isTaskInputsVisible, setIsTaskInputsVisible] = useState(false);
    const [tasks, setTasks] = useState([]);
    return (
        <div>
            <Tasks tasks={tasks} />
            <button
                onClick={() => {
                    setIsTaskInputsVisible(true);
                }}
            >
                Add Task
            </button>
            {isTaskInputsVisible ? (
                <TaskInputs
                    setIsTaskInputsVisible={setIsTaskInputsVisible}
                    setTasks={setTasks}
                    tasks={tasks}
                />
            ) : null}
        </div>
    );
};

export default TaskMain;
