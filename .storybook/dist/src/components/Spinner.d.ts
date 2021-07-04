/// <reference types="react" />
import "../styles/spinner.css";
interface spinnerProps {
    isLoading: boolean;
}
export declare function Spinner(props: spinnerProps): JSX.Element;
export declare namespace Spinner {
    var displayName: string;
    var __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "isLoading": {
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
