import PomoInputs from './PomoInputs';
import PomoTimer from './PomoTimer';
import { useContext, useEffect, useRef } from 'react';
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
    const btnRef = useRef(null);
    useEffect(() => {
        if (isPaused === true) {
            btnRef.current.classList.add(
                'shadow-[0px_8px_0px_0px_rgba(110,0,0)]',
            );
            btnRef.current.classList.remove('translate-y-1');
        } else {
            btnRef.current.classList.remove(
                'shadow-[0px_8px_0px_0px_rgba(110,0,0)]',
            );
            btnRef.current.classList.add('translate-y-1');
        }
    });
    return (
        <div className="flex flex-col">
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
                />
            )}
            <button
                ref={btnRef}
                className="bg-[#7B0000] text-2xl font-bold rounded  self-center active:translate-y-1 py-2   active:shadow-none w-52"
                onClick={() => {
                    isPaused == true ? setIsPaused(false) : setIsPaused(true);
                    setIsTimerSet(true);
                }}
            >
                {isPaused === true ? 'start' : 'pause'}
            </button>
        </div>
    );
};

export default Pomo;
