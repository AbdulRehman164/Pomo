import { useState } from 'react';

const TaskInputs = ({
    setIsTaskInputsVisible,
    setIsTaskSet,
    setTask,
    task,
}) => {
    const [taskText, setTaskText] = useState('');
    const [hoursInput, setHoursInput] = useState('');
    const [minsInput, setMinsInput] = useState('');
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
            <input
                type="text"
                placeholder="00"
                value={hoursInput}
                onChange={(e) => {
                    setHoursInput(e.target.value);
                }}
            />
            <span>h</span>
            <input
                type="text"
                placeholder="00"
                value={minsInput}
                onChange={(e) => {
                    setMinsInput(e.target.value);
                }}
            />
            <span>m</span>
            <button
                onClick={() => {
                    setTask({
                        ...task,
                        taskText,
                        hours: hoursInput,
                        mins: minsInput,
                    });
                    setIsTaskInputsVisible(false);
                    setIsTaskSet(true);
                }}
            >
                set
            </button>
        </div>
    );
};

export default TaskInputs;
