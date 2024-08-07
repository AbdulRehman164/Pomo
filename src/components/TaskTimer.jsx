import useTimer from '../utils/useTimer';
import editIcon from '../assets/editIcon.png';

const TaskTimer = ({ taskText, h, m, setIsTaskInputsVisible }) => {
    const { hours, mins } = useTimer(h, m, 0);

    return (
        <div className="flex font-bold w-96 justify-between p-2 rounded bg-[#800000] shadow-xl">
            <div>{taskText}</div>
            <div className="flex gap-3">
                <div className="flex gap-1">
                    <div>
                        {hours}
                        <span className="text-xs">h</span>
                    </div>
                    <div>
                        {mins}
                        <span className="text-xs">m</span>
                    </div>
                </div>
                <button
                    onClick={() => {
                        setIsTaskInputsVisible(true);
                    }}
                >
                    <img
                        src={editIcon}
                        alt="edit icon"
                        className="h-4 invert-[.75] "
                    />
                </button>
            </div>
        </div>
    );
};

export default TaskTimer;
