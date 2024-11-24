import React, { useState } from "react";
import { add } from "../module.utils";
import { root } from "../module.resources/translations/stringAdditionComponentTranslations";

const { translations } = root;

export const StringAdditionComponent: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<number | string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value);
    };

    const handleCalculate = () => {
        try {
            const sum = add(input); // Call the utility function
            setResult(sum);
        } catch (error) {
            setResult(error instanceof Error ? error.message : "Unknown Error");
        }
    };

    return (
        <div className="string-calculator-component-class">
            <h1>String Calculator</h1>
            <textarea
                className="input-box"
                placeholder={root.translations.placeHolders.enterNumbersInput}
                value={input}
                onChange={handleInputChange}
            />
            <button className="button" onClick={handleCalculate}>
                {translations.buttons.calculate}
            </button>
            {result !== "" && <div className="result">Result: {result}</div>}
        </div>
    );
};