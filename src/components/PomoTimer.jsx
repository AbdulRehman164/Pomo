import useTimer from '../utils/useTimer';

const PomoTimer = ({ h, m, s, setIsTimerSet }) => {
    const { hours, mins, secs } = useTimer(h, m, s);
    return (
        <div>
            <h1>
                {hours > 0 ? (
                    <>
                        {hours}
                        <span>h</span>
                    </>
                ) : null}{' '}
                {mins > 0 || hours > 0 ? (
                    <>
                        {mins < 10 ? '0' + mins : mins}
                        <span>m</span>
                    </>
                ) : null}{' '}
                {secs < 10 ? '0' + secs : secs}
                <span>s</span>
            </h1>
            <button
                onClick={() => {
                    setIsTimerSet(false);
                }}
            >
                edit
            </button>
        </div>
    );
};

export default PomoTimer;
