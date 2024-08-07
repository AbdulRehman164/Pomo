import { useRef, useState } from 'react';
import TaskInputs from './TaskInputs';
import TaskTimer from './TaskTimer';

const Task = () => {
    const [isTaskSet, setIsTaskSet] = useState(false);
    const [isTaskInputsVisisble, setIsTaskInputsVisible] = useState(false);
    const [task, setTask] = useState({});
    const [taskText, setTaskText] = useState('');
    const [hoursInput, setHoursInput] = useState('');
    const [minsInput, setMinsInput] = useState('');
    const addBtnRef = useRef(null);
    return (
        <div>
            {isTaskSet ? (
                <TaskTimer
                    {...task}
                    setIsTaskInputsVisible={setIsTaskInputsVisible}
                />
            ) : (
                <button
                    ref={addBtnRef}
                    className="bg-[#800000] text-3xl font-bold rounded px-10 py-3"
                    onClick={(e) => {
                        setIsTaskInputsVisible(true);
                        e.target.classList.add('hidden');
                    }}
                >
                    Add Task
                </button>
            )}

            {isTaskInputsVisisble ? (
                <TaskInputs
                    setIsTaskInputsVisible={setIsTaskInputsVisible}
                    isTaskInputsVisible={isTaskInputsVisisble}
                    setIsTaskSet={setIsTaskSet}
                    setTask={setTask}
                    {...task}
                    taskText={taskText}
                    setTaskText={setTaskText}
                    hoursInput={hoursInput}
                    setHoursInput={setHoursInput}
                    minsInput={minsInput}
                    setMinsInput={setMinsInput}
                    addBtnRef={addBtnRef}
                />
            ) : null}
        </div>
    );
};

export default Task;
