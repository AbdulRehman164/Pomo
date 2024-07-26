import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Timer = ({ h, m, s, isPaused, setIsTimerSet }) => {
    const [secs, setSecs] = useState(s);
    const [mins, setMins] = useState(m);
    const [hours, setHours] = useState(h);
    const interval = useRef(null);
    let seconds = hours * 3600 + mins * 60 + secs;

    useEffect(() => {
        setHours(h);
        setMins(m);
        setSecs(s);
    }, [h, m, s]);

    useEffect(() => {
        if (isPaused) {
            return;
        }
        interval.current = setInterval(() => {
            seconds -= 1;

            const newHours = Math.floor(seconds / 3600);
            const newMins = Math.floor((seconds % 3600) / 60);
            const newSecs = Math.floor((seconds % 3600) % 60);

            setHours(newHours);
            setMins(newMins);
            setSecs(newSecs);

            if (!seconds) clearInterval(interval.current);
        }, 1000);
        return () => {
            clearInterval(interval.current);
        };
    }, [isPaused]);
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

export default Timer;
