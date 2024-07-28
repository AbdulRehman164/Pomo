import PomoInputs from './PomoInputs';
import PomoTimer from './PomoTimer';
import { useContext } from 'react';
import pauseContext from '../utils/pauseContext';

const Pomo = ({
    isTimerSet,
    setIsTimerSet,
    hoursInput,
    setHoursInput,
    minsInput,
    setMinsInput,
    secsInput,
    setSecsInput,
}) => {
    const { isPaused, setIsPaused } = useContext(pauseContext);
    return (
        <div>
            {isTimerSet ? (
                <PomoTimer
                    h={Number(hoursInput)}
                    m={Number(minsInput)}
                    s={Number(secsInput)}
                    isPaused={isPaused}
                    setIsPaused={setIsPaused}
                    setIsTimerSet={setIsTimerSet}
                />
            ) : (
                <PomoInputs
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

export default Pomo;
