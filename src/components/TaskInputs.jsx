const TaskInputs = ({
    setIsTaskInputsVisible,
    setIsTaskSet,
    setTask,
    taskText,
    setTaskText,
    hoursInput,
    setHoursInput,
    minsInput,
    setMinsInput,
}) => {
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
                        taskText,
                        h: Number(hoursInput),
                        m: Number(minsInput),
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
