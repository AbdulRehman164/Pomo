import useTimer from '../utils/useTimer';
import editIcon from '../assets/editIcon.png';
import { useContext } from 'react';
import pauseContext from '../utils/pauseContext';

const PomoTimer = ({ h, m, s, setIsTimerSet }) => {
    const { hours, mins, secs } = useTimer(h, m, s);
    const { setIsPaused } = useContext(pauseContext);
    return (
        <div className="flex py-20 align-bottom items-end">
            <div className="flex items-center justify-center gap-5 ">
                <div className="text-8xl font-bold">
                    {hours > 0 ? (
                        <>
                            {hours}
                            <span className="font-bold text-3xl">h</span>
                        </>
                    ) : null}{' '}
                </div>
                <div className="text-8xl font-bold">
                    {mins > 0 || hours > 0 ? (
                        <>
                            {mins < 10 ? '0' + mins : mins}
                            <span className="font-bold text-3xl">m</span>
                        </>
                    ) : null}{' '}
                </div>
                <div className="text-8xl font-bold">
                    {secs < 10 ? '0' + secs : secs}
                    <span className="font-bold text-3xl">s</span>
                </div>
            </div>
            <button
                onClick={() => {
                    setIsTimerSet(false);
                    setIsPaused(true);
                }}
            >
                <img
                    src={editIcon}
                    alt="edit icon"
                    className="h-4 invert-[.75] "
                />
            </button>
        </div>
    );
};

export default PomoTimer;
