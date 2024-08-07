import NavigationMenu from './NavigationMenu';
import Pomo from './Pomo';
import FocusEval from './FocusEval';
import { useState } from 'react';

const Main = () => {
    const [section, setSection] = useState('pomo');
    const [isTimerSet, setIsTimerSet] = useState(false);
    const [hoursInput, setHoursInput] = useState('');
    const [minsInput, setMinsInput] = useState('');
    const [secsInput, setSecsInput] = useState('');
    return (
        <div className="w-[43rem] flex flex-col items-center bg-[#800000]  rounded-xl p-4 shadow-xl">
            <NavigationMenu setSection={setSection} section={section} />
            {section === 'pomo' ? (
                <Pomo
                    isTimerSet={isTimerSet}
                    setIsTimerSet={setIsTimerSet}
                    hoursInput={hoursInput}
                    setHoursInput={setHoursInput}
                    minsInput={minsInput}
                    setMinsInput={setMinsInput}
                    secsInput={secsInput}
                    setSecsInput={setSecsInput}
                />
            ) : (
                <FocusEval />
            )}
        </div>
    );
};

export default Main;
