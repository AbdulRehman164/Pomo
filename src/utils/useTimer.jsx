import { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import pauseContext from './pauseContext';

const useTimer = (h, m, s) => {
    const { isPaused, setIsPaused } = useContext(pauseContext);
    const [seconds, setSeconds] = useState(h * 3600 + m * 60 + s);
    const interval = useRef(null);

    useEffect(() => {
        setSeconds(h * 3600 + m * 60 + s);
    }, [h, m, s]);

    useEffect(() => {
        if (isPaused) {
            return;
        }
        if (interval.current) clearTimeout(interval.current);

        interval.current = setInterval(() => {
            setSeconds((seconds) => {
                if (!seconds) {
                    clearInterval(interval.current);
                    setIsPaused(true);
                    return 0;
                }
                return seconds - 1;
            });
        }, 1000);
        return () => {
            clearInterval(interval.current);
        };
    }, [isPaused]);

    return {
        hours: Math.floor(seconds / 3600),
        mins: Math.floor((seconds % 3600) / 60),
        secs: Math.floor((seconds % 3600) % 60),
    };
};

export default useTimer;
