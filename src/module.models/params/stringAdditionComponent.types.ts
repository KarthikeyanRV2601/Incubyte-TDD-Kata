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

export interface Point {
    x: number;
    y: number;
}

export interface FloatingToolbarComponentProps {
    toolbarRef: any;
    toolbarPosition: Point;
    handleToolBarInsertCharacter: (char: string) => void;
    customToolbarButtons: string[];
    setCustomToolbarButtons: React.Dispatch<React.SetStateAction<string[]>>;
}
