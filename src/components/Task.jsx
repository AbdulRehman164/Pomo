import { useState } from 'react';
import TaskInputs from './TaskInputs';
import TaskTimer from './TaskTimer';

const Task = () => {
    const [isTaskSet, setIsTaskSet] = useState(false);
    const [isTaskInputsVisisble, setIsTaskInputsVisible] = useState(false);
    const [task, setTask] = useState({});
    const [taskText, setTaskText] = useState('');
    const [hoursInput, setHoursInput] = useState('');
    const [minsInput, setMinsInput] = useState('');
    return (
        <div>
            {isTaskInputsVisisble ? (
                <TaskInputs
                    setIsTaskInputsVisible={setIsTaskInputsVisible}
                    setIsTaskSet={setIsTaskSet}
                    setTask={setTask}
                    {...task}
                    taskText={taskText}
                    setTaskText={setTaskText}
                    hoursInput={hoursInput}
                    setHoursInput={setHoursInput}
                    minsInput={minsInput}
                    setMinsInput={setMinsInput}
                />
            ) : null}

            {isTaskSet ? (
                <TaskTimer
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

export default Task;
