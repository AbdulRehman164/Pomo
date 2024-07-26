import { useState } from 'react';
import TaskInputs from './TaskInputs';
import Task from './Task';

const TaskMain = () => {
    const [isTaskSet, setIsTaskSet] = useState(false);
    const [isTaskInputsVisisble, setIsTaskInputsVisible] = useState(false);
    const [task, setTask] = useState({});
    return (
        <div>
            {isTaskInputsVisisble ? (
                <TaskInputs
                    setIsTaskInputsVisible={setIsTaskInputsVisible}
                    setIsTaskSet={setIsTaskSet}
                    setTask={setTask}
                    {...task}
                />
            ) : null}

            {isTaskSet ? (
                <Task
                    {...task}
                    setIsTaskInputsVisible={setIsTaskInputsVisible}
                />
            ) : (
                <button
                    onClick={() => {
                        setIsTaskInputsVisible(true);
                    }}
                >
                    Add Task
                </button>
            )}
        </div>
    );
};

export default TaskMain;
