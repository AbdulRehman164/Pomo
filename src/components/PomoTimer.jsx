import TimerInput from './TimerInput';
import Timer from './Timer';
import { useState } from 'react';

const PomoTimer = ({
    isTimerSet,
    setIsTimerSet,
    hoursInput,
    setHoursInput,
    minsInput,
    setMinsInput,
    secsInput,
    setSecsInput,
}) => {
    const [isPaused, setIsPaused] = useState(true);
    return (
        <div>
            {isTimerSet ? (
                <Timer
                    h={Number(hoursInput)}
                    m={Number(minsInput)}
                    s={Number(secsInput)}
                    isPaused={isPaused}
                    setIsTimerSet={setIsTimerSet}
                />
            ) : (
                <TimerInput
                    hoursInput={hoursInput}
                    setHoursInput={setHoursInput}
                    minsInput={minsInput}
                    setMinsInput={setMinsInput}
                    secsInput={secsInput}
                    setSecsInput={setSecsInput}
                    setIsTimerSet={setIsTimerSet}
                />
            )}
            <button
                onClick={() => {
                    isPaused == true ? setIsPaused(false) : setIsPaused(true);
                }}
            >
                {isPaused === true ? 'start' : 'pause'}
            </button>
        </div>
    );
};

export default PomoTimer;
