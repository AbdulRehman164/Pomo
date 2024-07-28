const PomoInputs = ({
    hoursInput,
    setHoursInput,
    minsInput,
    setMinsInput,
    secsInput,
    setSecsInput,
    setIsTimerSet,
}) => {
    return (
        <div id="TimerInput">
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
            <input
                type="text"
                placeholder="00"
                value={secsInput}
                onChange={(e) => {
                    setSecsInput(e.target.value);
                }}
            />
            <span>s</span>
            <button
                onClick={() => {
                    setIsTimerSet(true);
                }}
            >
                set
            </button>
        </div>
    );
};

export default PomoInputs;
