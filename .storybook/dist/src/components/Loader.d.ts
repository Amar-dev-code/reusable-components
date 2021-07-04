/// <reference types="react" />
import "../styles/loader.css";
interface loaderProps {
    isLoading: boolean;
}
export declare function Loader(props: loaderProps): JSX.Element;
export declare namespace Loader {
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
