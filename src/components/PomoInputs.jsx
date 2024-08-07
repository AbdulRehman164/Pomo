const PomoInputs = ({
    hoursInput,
    setHoursInput,
    minsInput,
    setMinsInput,
    secsInput,
    setSecsInput,
}) => {
    return (
        <div
            id="TimerInput"
            className="flex items-center justify-center gap-5 py-20 "
        >
            <div className="flex gap-9 ">
                <div>
                    <input
                        className="text-8xl w-[2ch] bg-transparent font-bold focus-visible:outline-none "
                        type="text"
                        placeholder="00"
                        value={hoursInput}
                        maxLength={2}
                        onChange={(e) => {
                            if (/^\d*$/.test(e.target.value))
                                setHoursInput(e.target.value);
                        }}
                    />
                    <span className="font-bold text-3xl">h</span>
                </div>
                <div>
                    <input
                        className="text-8xl w-[2ch] bg-transparent font-bold focus-visible:outline-none"
                        type="text"
                        placeholder="00"
                        value={minsInput}
                        maxLength={2}
                        onChange={(e) => {
                            if (/^\d*$/.test(e.target.value))
                                setMinsInput(e.target.value);
                        }}
                    />
                    <span className="font-bold text-3xl">m</span>
                </div>
                <div>
                    <input
                        className="text-8xl w-[2ch] bg-transparent font-bold focus-visible:outline-none"
                        type="text"
                        placeholder="00"
                        value={secsInput}
                        maxLength={2}
                        onChange={(e) => {
                            if (/^\d*$/.test(e.target.value))
                                setSecsInput(e.target.value);
                        }}
                    />
                    <span className="font-bold text-3xl">s</span>
                </div>
            </div>
        </div>
    );
};

export default PomoInputs;
