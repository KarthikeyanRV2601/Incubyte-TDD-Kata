export interface Translations {
    [key: string]: any;
}

export interface InputRulesComponentProps {
    translations: Translations;
}

export interface StringCalculatorUtilsResponse {
    valid: boolean;
    result: number;
}