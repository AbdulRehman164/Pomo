import { useState } from 'react';
import Main from './components/Main';
import Task from './components/Task';
import Header from './components/Header';
import pauseContext from './utils/pauseContext';

function App() {
    const [isPaused, setIsPaused] = useState(true);
    return (
        <div className="flex flex-col items-center justify-start  gap-9 h-[100vh] bg-[#800000] text-white">
            <pauseContext.Provider value={{ isPaused, setIsPaused }}>
                <Header />
                <Main />
                <Task />
            </pauseContext.Provider>
        </div>
    );
}

export default App;
