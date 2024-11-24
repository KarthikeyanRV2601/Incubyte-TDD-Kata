import React, { useCallback, useState } from "react";
import { add } from "../../module.utils";
import { root } from "../../module.resources/translations/stringAdditionComponentTranslations";
import { InputRulesComponent } from "./inputRules";

const { translations } = root;

export const StringAdditionComponent: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<number | string>("");
    const [isValid, setIsValid] = useState<boolean>(true);

    const validateInput = useCallback((value: string): boolean => {
        const regex = /^[\d,]*$/;
        return regex.test(value);
    }, []);

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const newValue = event.target.value;
        setInput(newValue);
        setIsValid(validateInput(newValue));
    }, [setInput, setIsValid, validateInput]);

    const handleCalculate = useCallback((): void => {
        try {
            // Calling our main utility function
            const sum = add(input);
            setResult(sum);
        } catch (error) {
            setResult(error instanceof Error ? error.message : "Unknown Error");
        }
    }, [setResult, input]);

    return (
        <div className="string-calculator-component-class">
            <h1 data-testid="headerComponentTestId">{translations.titles.StringCalculatorAddition}</h1>
            <textarea
                className={isValid ? "input-box" : 'invalid-input-box'}
                placeholder={translations.placeHolders.enterNumbersInput}
                value={input}
                onChange={handleInputChange}
                data-testid="textAreaComponentTestId"
            />
            <button className="button" onClick={handleCalculate} data-testid="calculateButtonComponentTestId" disabled={!isValid}>
                {translations.buttons.calculate}
            </button>
            {result !== "" && <div className="result" id="resultComponentId" data-testid="resultComponentTestId">{translations.labels.result}: {result}</div>}
            <InputRulesComponent translations={translations} />
        </div>
    );
};