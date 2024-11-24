import React from "react";
import { InputRulesComponentProps } from "../../module.models";

export const InputRulesComponent: React.FC<InputRulesComponentProps> = ({ translations }) => {
    return (
        <div className="input-rules">
            <h3>{translations.titles.inputRules}</h3>
            <ul>
                <li>{translations.messages.inputRule1}</li>
                <li>{translations.messages.inputRule2}</li>
                <li>{translations.messages.inputRule3}</li>
            </ul>
        </div>
    );
};