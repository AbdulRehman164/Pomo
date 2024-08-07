import { useState } from 'react';

const FocusEval = () => {
    const [focus, setFocus] = useState();
    return (
        <div className="flex flex-col">
            <div className="py-10 flex flex-col gap-3">
                <div>
                    <input
                        type="radio"
                        name="focus"
                        id="flow"
                        className="hidden [&:checked+label]:bg-[#a3cfa3] [&:checked+label]:text-[rgb(148,0,0)] "
                        value={'Flow'}
                        onChange={(e) => {
                            setFocus(e.target.value);
                        }}
                    />
                    <label
                        htmlFor="flow"
                        className="inline-block font-bold px-8 py-2 rounded w-52 transition-all duration-500 hover:bg-[#a3cfa3] hover:text-[rgb(148,0,0)] cursor-pointer"
                    >
                        Flow
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="focus"
                        id="highly-focused"
                        className="hidden [&:checked+label]:bg-[skyblue] [&:checked+label]:text-[rgb(148,0,0)]"
                        value={'Highly Focused'}
                        onChange={(e) => {
                            setFocus(e.target.value);
                        }}
                    />
                    <label
                        htmlFor="highly-focused"
                        className="inline-block font-bold px-8 py-2 rounded w-52 transition-all duration-500 hover:bg-[skyblue] hover:text-[rgb(148,0,0)] cursor-pointer"
                    >
                        Highly Focused
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="focus"
                        id="ok"
                        className="hidden [&:checked+label]:bg-[#ffff99] [&:checked+label]:text-[rgb(148,0,0)]"
                        value={'OK'}
                        onChange={(e) => {
                            setFocus(e.target.value);
                        }}
                    />
                    <label
                        htmlFor="ok"
                        className="inline-block font-bold px-8 py-2 rounded w-52 transition-all duration-500 hover:bg-[#ffff99] hover:text-[rgb(148,0,0)] cursor-pointer"
                    >
                        OK
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="focus"
                        id="distracted"
                        className="hidden [&:checked+label]:bg-[#ff8080] [&:checked+label]:text-[rgb(148,0,0)]"
                        value={'Distracted'}
                        onChange={(e) => {
                            setFocus(e.target.value);
                        }}
                    />
                    <label
                        htmlFor="distracted"
                        className="inline-block font-bold px-8 py-2 rounded w-52 transition-all duration-500 hover:bg-[#ff8080] hover:text-[rgb(148,0,0)] cursor-pointer"
                    >
                        Distracted
                    </label>
                </div>
            </div>
            <button className="bg-[#7B0000] text-2xl font-bold rounded  self-center active:translate-y-1 py-2   active:shadow-none w-52">
                Set
            </button>
        </div>
    );
};

export default FocusEval;
