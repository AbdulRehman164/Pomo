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
        <div>
            <NavigationMenu setSection={setSection} />
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
