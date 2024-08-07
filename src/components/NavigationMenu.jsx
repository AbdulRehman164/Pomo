import { useContext, useEffect, useRef } from 'react';
import pauseContext from '../utils/pauseContext';

const NavigationMenu = ({ setSection, section }) => {
    const { setIsPaused } = useContext(pauseContext);
    const pomo = useRef(null);
    const focus = useRef(null);

    useEffect(() => {
        if (section === 'pomo') {
            pomo.current.classList.add('bg-[#7B0000]');
            focus.current.classList.remove('bg-[#7B0000]');
        } else {
            focus.current.classList.add('bg-[#7B0000]');
            pomo.current.classList.remove('bg-[#7B0000]');
        }
    });

    return (
        <div className="flex justify-around flex-1 self-stretch ">
            <button
                ref={pomo}
                className="font-bold w-1/3 rounded active:translate-y-1"
                onClick={() => {
                    setSection('pomo');
                }}
            >
                Pomo
            </button>
            <button
                ref={focus}
                className="font-bold w-1/3 active:translate-y-1"
                onClick={() => {
                    setSection('focus');
                    setIsPaused(true);
                }}
            >
                Focus
            </button>
        </div>
    );
};

export default NavigationMenu;
