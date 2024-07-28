import useTimer from '../utils/useTimer';

const TaskTimer = ({ taskText, h, m, setIsTaskInputsVisible }) => {
    const { hours, mins, secs } = useTimer(h, m, 0);

    return (
        <div>
            <div>{taskText}</div>
            <div>
                {hours} {mins} {secs}
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

export default TaskTimer;
