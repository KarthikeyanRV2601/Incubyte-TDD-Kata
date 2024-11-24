import React from "react";
import { InputRulesComponentProps } from "../../module.models";

export const InputRulesComponent: React.FC<InputRulesComponentProps> = ({ translations }) => {
    return (
        <div className="input-rules" data-testid="inputRulesComponentTestId">
            <h3 data-testid="inputRulesHeaderComponentTestId">{translations.titles.inputRules}</h3>
            <ul data-testid="inputRulesUlComponentTestId">
                {
                    translations.messages.inputRules.map((rule: string, index: number) => <li key={index + 1} data-testid={`inputRulesLi${index + 1}ComponentTestId`}>{rule}</li>)
                }
            </ul>
        </div>
    );
};