import React, { useCallback, useState } from "react";
import { add } from "../../module.utils";
import { root } from "../../module.resources/translations/stringAdditionComponentTranslations";
import { InputRulesComponent } from "./inputRules";

const { translations } = root;

export const StringAdditionComponent: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);
    const [additionResult, setAdditionResult] = useState<number>();
    const [showResult, setShowResult] = useState<boolean>();

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const newValue = event.target.value;
        // Calling our main utility function
        const { valid, result } = add(newValue);
        setIsValid(valid);
        setAdditionResult(result);
        setShowResult(false);
        setInput(newValue);
    }, [setInput, setIsValid, setAdditionResult, setShowResult]);

    const handleCalculate = useCallback((): void => {
        if (isValid) {
            setShowResult(true);
        }
    }, [isValid, setShowResult]);

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
            {showResult && <div className="result" id="resultComponentId" data-testid="resultComponentTestId">{translations.labels.result}: {additionResult}</div>}
            <InputRulesComponent translations={translations} />
        </div>
    );
};