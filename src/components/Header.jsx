import clockPng from '../assets/clock.svg';
import logsPng from '../assets/logs.png';

const Header = () => {
    return (
        <div className="flex  w-1/2 justify-between border-b-2 p-2  mb-10 ">
            <div className="flex items-center gap-1">
                <img
                    src={clockPng}
                    alt="clock logo"
                    className="h-4 w-4 invert-[100%]"
                />
                <h1 className="font-extrabold text-xl">Pomo</h1>
            </div>

            <button className="flex items-center gap-1 bg-[rgb(148,0,0)] px-3 rounded font-semibold">
                <img
                    src={logsPng}
                    alt="logs image"
                    className="invert-[100%] h-4 w-4"
                />
                logs
            </button>
        </div>
    );
};

export default Header;
