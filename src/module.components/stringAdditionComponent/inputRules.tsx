import React, { useState, useCallback } from "react";
import { InputRulesComponentProps } from "../../module.models";

export const InputRulesComponent: React.FC<InputRulesComponentProps> = (props) => {
    const { translations } = props;
    const [rulesExpanded, setRulesExpanded] = useState<boolean>(true);

    const toggleRules = useCallback(() => {
        setRulesExpanded((prev) => !prev);
    }, []);

    return (
        <div className={"input-rules-container"}>
            <button className="toggle-rules-button" onClick={toggleRules}>
                {rulesExpanded ? "Hide Rules" : "Show Rules"}
            </button>
            <div className={`input-rules-content ${rulesExpanded ? "expanded" : "collapsed"}`}>
                <h3 data-testid="inputRulesHeaderComponentTestId">{translations.titles.inputRules}</h3>
                <ul data-testid="inputRulesUlComponentTestId">
                    {
                        translations.messages.inputRules.map((rule: string, index: number) => <li key={index + 1} data-testid={`inputRulesLi${index + 1}ComponentTestId`}>{rule}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};