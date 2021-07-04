/// <reference types="react" />
import "../styles/textBox.css";
interface textboxProps {
    isDisabled?: boolean;
    placeholder?: string;
    isAutoFocus?: boolean;
    isReadonly?: boolean;
    type: "Password" | "Text";
    value?: string | number | readonly string[];
}
export declare function TextBox(props: textboxProps): JSX.Element;
export declare namespace TextBox {
    var displayName: string;
    var __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "isDisabled": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "placeholder": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "isAutoFocus": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "isReadonly": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "type": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "value": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
        };
    };
}
export {};
