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
                        className="hidden [&:checked+label]:bg-[#a3cfa3] [&:checked+label]:text-[#800000] "
                        value={'Flow'}
                        onChange={(e) => {
                            setFocus(e.target.value);
                        }}
                    />
                    <label
                        htmlFor="flow"
                        className="inline-block font-bold px-8 py-2 rounded w-52 transition-all duration-500 hover:bg-[#a3cfa3] hover:text-[#800000] cursor-pointer"
                    >
                        Flow
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="focus"
                        id="highly-focused"
                        className="hidden [&:checked+label]:bg-[#00ffff] [&:checked+label]:text-[#800000]"
                        value={'Highly Focused'}
                        onChange={(e) => {
                            setFocus(e.target.value);
                        }}
                    />
                    <label
                        htmlFor="highly-focused"
                        className="inline-block font-bold px-8 py-2 rounded w-52 transition-all duration-500 hover:bg-[#00ffff] hover:text-[#800000] cursor-pointer"
                    >
                        Highly Focused
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="focus"
                        id="OK"
                        className="hidden [&:checked+label]:bg-[#ffff99] [&:checked+label]:text-[#800000]"
                        value={'ok'}
                        onChange={(e) => {
                            setFocus(e.target.value);
                        }}
                    />
                    <label
                        htmlFor="ok"
                        className="inline-block font-bold px-8 py-2 rounded w-52 transition-all duration-500 hover:bg-[#ffff99] hover:text-[#800000] cursor-pointer"
                    >
                        OK
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="focus"
                        id="distracted"
                        className="hidden [&:checked+label]:bg-[#ff8080] [&:checked+label]:text-[#800000]"
                        value={'Distracted'}
                        onChange={(e) => {
                            setFocus(e.target.value);
                        }}
                    />
                    <label
                        htmlFor="distracted"
                        className="inline-block font-bold px-8 py-2 rounded w-52 transition-all duration-500 hover:bg-[#ff8080] hover:text-[#800000] cursor-pointer"
                    >
                        Distracted
                    </label>
                </div>
            </div>
            <button className="bg-[#5B0000] text-2xl font-bold rounded  self-center active:translate-y-1 py-2   active:shadow-none w-52">
                Set
            </button>
        </div>
    );
};

export default FocusEval;
