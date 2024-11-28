import React, { useCallback, useState, useRef } from "react";
import { root } from "../../module.resources/translations/stringAdditionComponentTranslations";
import { InputRulesComponent } from "./inputRules";
import { Point } from "../../module.models";
import { FloatingToolbarComponent } from "./floatingToolbarComponent";
import { GeomtericalUtils, StringCalculatorUtils } from "../../module.utils";

const { translations } = root;

export const StringAdditionComponent: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);
    const [additionResult, setAdditionResult] = useState<number>();
    const [showResult, setShowResult] = useState<boolean>();
    const [toolbarPosition, setToolbarPosition] = useState<Point>({ x: 0, y: 0 });
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const toolbarRef = useRef<HTMLDivElement | null>(null);
    const [toolbarVisible, setToolbarVisible] = useState<boolean>(false);
    const [customToolbarButtons, setCustomToolbarButtons] = useState<string[]>([]);

    const handleUtilFunctionCalling = useCallback((newValue: string) => {
        const { valid, result } = StringCalculatorUtils.add(newValue);
        setIsValid(valid);
        setAdditionResult(result);
        setShowResult(false);
        setInput(newValue);
    }, [setInput, setIsValid, setAdditionResult, setShowResult]);

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const newValue = event.target.value;
        // Calling our main utility function
        handleUtilFunctionCalling(newValue)
    }, [handleUtilFunctionCalling]);

    const handleCalculate = useCallback((): void => {
        if (isValid) {
            setShowResult(true);
        }
    }, [isValid, setShowResult]);


    // Toolbar interactions starts

    const handleTextAreaEnter = useCallback(() => {
        const textAreaRect = GeomtericalUtils.getBoundingClientRect('textArea');
        if (textAreaRect) {
            setToolbarPosition({
                x: textAreaRect.left + 100,
                y: textAreaRect.top - 40,
            });
            setToolbarVisible(true);
        }
    }, [setToolbarPosition]);

    const handleTextAreaLeave = useCallback((event: any): void => {
        if (GeomtericalUtils.isCursorWithinDiv(event as any, 'floating-toolbar-id')) {
            return;
        }
        setToolbarVisible(false);
    }, [setToolbarVisible]);

    const handleToolBarInsertCharacter = useCallback((char: string) => {
        handleUtilFunctionCalling(`${input}${char}`);
        textAreaRef.current?.focus();
    }, [handleUtilFunctionCalling, input]);


    return (
        <div className="string-calculator-component-class">
            <h1 data-testid="headerComponentTestId" className="header-component">{translations.titles.StringCalculatorAddition}</h1>
            <div className="input-result-rules-container">
                <div className="input-result-container">
                    <div className="input-box-container">
                        <textarea
                            className={isValid ? "input-box" : 'invalid-input-box'}
                            id={'textArea'}
                            placeholder={translations.placeHolders.enterNumbersInput}
                            value={input}
                            onChange={handleInputChange}
                            data-testid="textAreaComponentTestId"
                            onMouseEnter={handleTextAreaEnter}
                            onMouseLeave={handleTextAreaLeave}
                            ref={textAreaRef}
                        />
                        <button className="button" onClick={handleCalculate} data-testid="calculateButtonComponentTestId" disabled={!isValid}>
                            {translations.buttons.calculate}
                        </button>
                    </div>
                    {showResult && (
                        <div className="result-card" data-testid="resultComponentTestId">
                            <h3>{translations.labels.result}</h3>
                            <p>{additionResult}</p>
                        </div>
                    )}
                </div>
                {toolbarVisible && <FloatingToolbarComponent
                    toolbarRef={toolbarRef}
                    toolbarPosition={toolbarPosition}
                    handleToolBarInsertCharacter={handleToolBarInsertCharacter}
                    setCustomToolbarButtons={setCustomToolbarButtons}
                    customToolbarButtons={customToolbarButtons}
                    translations={translations}
                />}
                <InputRulesComponent translations={translations} />
            </div>
        </div>
    );
};