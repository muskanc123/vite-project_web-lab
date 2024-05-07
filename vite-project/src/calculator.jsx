import React, { useState } from "react";
import "./calculator.css"

function Calculator() {
    const [value, setValue] = useState("")
    const calculateResult = () => {
        try {
            const result = eval(value);
            setValue(result.toString());
        } catch (error) {
            // Handle errors, e.g., invalid expressions
            console.error("Error:", error);
            setValue("");
        }
    };
    return (
        <>
            <h1>Calculator Using React</h1>
            <div className="container">
                <div className="calculator">
                    <form action="">
                        <div className="display">
                            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="AC" onClick={e => setValue("")} />
                            <input type="button" value="DE" onClick={e => value && setValue(value.slice(0, -1))} />
                            <input type="button" value="." onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="/" onClick={e => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="*" onClick={e => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="-" onClick={e => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="00" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="0" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="=" className="equal" onClick={calculateResult} />

                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Calculator