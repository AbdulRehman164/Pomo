import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Task from './components/Task';
import pauseContext from './utils/pauseContext';

function App() {
    const [isPaused, setIsPaused] = useState(true);
    return (
        <>
            <pauseContext.Provider value={{ isPaused, setIsPaused }}>
                <Main />
                <Task />
            </pauseContext.Provider>
        </>
    );
}

export default App;
