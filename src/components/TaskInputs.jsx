import { useRef } from 'react';

const TaskInputs = ({
    setIsTaskInputsVisible,
    isTaskInputsVisible,
    setIsTaskSet,
    isTaskSet,
    setTask,
    taskText,
    setTaskText,
    hoursInput,
    setHoursInput,
    minsInput,
    setMinsInput,
    addBtnRef,
}) => {
    const taskInputsDiv = useRef(null);
    return (
        <div
            ref={taskInputsDiv}
            className="flex flex-col gap-5 items-center p-2 bg-[rgb(148,0,0)] rounded  left-[37%] shadow-xl mt-2 transition-all duration-1000"
        >
            <input
                className="text-xl px-2 font-bold bg-transparent text-white rounded focus-visible:outline-none"
                type="text"
                placeholder="Enter Task Name"
                value={taskText}
                onChange={(e) => {
                    setTaskText(e.target.value);
                }}
            />
            <div className="flex gap-2">
                <div>
                    <input
                        className="text-5xl w-[2ch] bg-transparent font-bold focus-visible:outline-none "
                        type="text"
                        placeholder="00"
                        value={hoursInput}
                        onChange={(e) => {
                            setHoursInput(e.target.value);
                        }}
                    />
                    <span className="font-bold text-xl">h</span>
                </div>
                <div>
                    <input
                        className="text-5xl w-[2ch] bg-transparent font-bold focus-visible:outline-none "
                        type="text"
                        placeholder="00"
                        value={minsInput}
                        onChange={(e) => {
                            setMinsInput(e.target.value);
                        }}
                    />
                    <span className="font-bold text-xl">m</span>
                </div>
            </div>
            <div className="self-end flex gap-2">
                <button
                    className="bg-gray-600 font-bold px-2 w-24  text-xl rounded"
                    onClick={() => {
                        setIsTaskInputsVisible(false);
                        if (!isTaskSet) {
                            addBtnRef.current.classList.remove('hidden');
                        }
                    }}
                >
                    Cancel
                </button>
                <button
                    className="bg-[#7B0000] font-bold px-2 text-xl w-24 rounded"
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
        </div>
    );
};

export default TaskInputs;
