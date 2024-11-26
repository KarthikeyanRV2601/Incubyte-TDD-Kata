import React from "react";
import { FloatingToolbarComponentProps } from "../../module.models"


export const FloatingToolbarComponent = (props: FloatingToolbarComponentProps) => {
    const { toolbarPosition, toolbarRef, handleToolBarInsertCharacter } = props;
    return (
        <div
            className="floating-toolbar"
            ref={toolbarRef}
            style={{
                top: toolbarPosition.y,
                left: toolbarPosition.x,
                display: "block",
            }}
        >
            <button onClick={() => handleToolBarInsertCharacter("/")}>/</button>
            <button onClick={() => handleToolBarInsertCharacter("\n")}>New Line</button>
        </div>
    )
}