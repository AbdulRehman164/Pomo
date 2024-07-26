const Task = ({
    taskText,
    hours,
    mins,
    setIsTaskInputsVisible,
    setIsTaskSet,
}) => {
    return (
        <div>
            <div>{taskText}</div>
            <div>
                {hours} {mins}
            </div>
            <button
                onClick={() => {
                    setIsTaskInputsVisible(true);
                }}
            >
                edit
            </button>
        </div>
    );
};

export default Task;
