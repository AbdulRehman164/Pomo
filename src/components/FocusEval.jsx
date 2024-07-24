const FocusEval = () => {
    return (
        <div>
            <h2>Evalute your foucs</h2>
            <label htmlFor="flow">Flow</label>
            <input type="radio" name="focus" id="flow" />

            <label htmlFor="highly-focused">Highly Focused</label>
            <input type="radio" name="focus" id="highly-focused" />

            <label htmlFor="ok">OK</label>
            <input type="radio" name="focus" id="ok" />

            <label htmlFor="distracted">Distracted</label>
            <input type="radio" name="focus" id="distracted" />
        </div>
    );
};

export default FocusEval;
