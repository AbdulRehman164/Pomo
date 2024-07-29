import { useContext } from 'react';
import pauseContext from '../utils/pauseContext';

const NavigationMenu = ({ setSection }) => {
    const { setIsPaused } = useContext(pauseContext);

    return (
        <div>
            <button
                onClick={() => {
                    setSection('pomo');
                }}
            >
                Pomo
            </button>
            <button
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
