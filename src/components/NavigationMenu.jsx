const NavigationMenu = ({ setSection }) => {
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
                }}
            >
                Focus
            </button>
        </div>
    );
};

export default NavigationMenu;
