import { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import pauseContext from './pauseContext';

const useTimer = (h, m, s) => {
    const [hours, setHours] = useState(h);
    const [mins, setMins] = useState(m);
    const [secs, setSecs] = useState(s);
    const interval = useRef(null);
    const { isPaused, setIsPaused } = useContext(pauseContext);
    let seconds = h * 3600 + m * 60 + s;

    useEffect(() => {
        if (isPaused) {
            return;
        }
        if (interval.current) clearTimeout(interval.current);
        interval.current = setInterval(() => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
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
    }, [isPaused, h, m, s]);

    return {
        hours,
        mins,
        secs,
    };
};

export default useTimer;
