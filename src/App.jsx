import { useState } from 'react';
import Main from './components/Main';
import Task from './components/Task';
import pauseContext from './utils/pauseContext';

function App() {
    const [isPaused, setIsPaused] = useState(true);
    return (
        <div className="flex flex-col items-center justify-center gap-5 h-[100vh] bg-[#222222] text-white">
            <pauseContext.Provider value={{ isPaused, setIsPaused }}>
                <Main />
                <Task />
            </pauseContext.Provider>
        </div>
    );
}

export default App;
