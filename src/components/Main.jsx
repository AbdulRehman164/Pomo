import NavigationMenu from './NavigationMenu';
import PomoTimer from './PomoTimer';
import FocusEval from './FocusEval';
import { useState } from 'react';

const Main = () => {
    const [section, setSection] = useState('pomo');
    return (
        <div>
            <NavigationMenu setSection={setSection} />
            {section === 'pomo' ? <PomoTimer /> : <FocusEval />}
            <button>Start</button>
        </div>
    );
};

export default Main;
