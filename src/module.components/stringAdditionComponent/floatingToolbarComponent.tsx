import React, { useEffect, useCallback, useState, useRef } from "react";
import { FloatingToolbarComponentProps } from "../../module.models"


export const FloatingToolbarComponent = (props: FloatingToolbarComponentProps) => {
    const { toolbarPosition, toolbarRef, handleToolBarInsertCharacter, customToolbarButtons, setCustomToolbarButtons, translations } = props;
    const [position, setPosition] = useState(toolbarPosition);
    const [isDragging, setIsDragging] = useState(false);
    const dragOffset = useRef({ x: 0, y: 0 });
    const [editing, setEditing] = useState<boolean>(false);
    const [currentCustomCharacter, setCurrentCustomCharacter] = useState<string>("");


    const handleDragStart = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        dragOffset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    }, [position, setIsDragging]);

    const handleDrag = useCallback(
        (e: MouseEvent) => {
            if (!isDragging) return;
            const newX = e.clientX - dragOffset.current.x;
            const newY = e.clientY - dragOffset.current.y;
            setPosition({ x: newX, y: newY });
        },
        [isDragging, setPosition]
    );

    const handleDragEnd = useCallback(() => {
        setIsDragging(false);
    }, [setIsDragging]);

    const handleCustomButtonInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentCustomCharacter(event.target.value)
    }

    const handleCustomButtonEnter = () => {
        if (currentCustomCharacter.trim() !== "") {
            setCustomToolbarButtons((prevButtons: string[]) => [...prevButtons, currentCustomCharacter]);
            setCurrentCustomCharacter("");
            setEditing(false);
        }
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            handleCustomButtonEnter();
        }
    };

    const deleteCustomButton = (index: number) => {
        setCustomToolbarButtons((prevButtons) => prevButtons.filter((_, i) => i !== index));
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleDrag);
            window.addEventListener("mouseup", handleDragEnd);
        }
        return () => {
            window.removeEventListener("mousemove", handleDrag);
            window.removeEventListener("mouseup", handleDragEnd);
        };
    }, [isDragging, handleDrag, handleDragEnd]);

    return (
        <div
            className="floating-toolbar"
            id="floating-toolbar-id"
            ref={toolbarRef}
            style={{
                top: position.y,
                left: position.x,
                display: "block",
            }}
            onMouseDown={handleDragStart}
        >
            <button
                className='button-class'
                onClick={() => handleToolBarInsertCharacter("/")}>/</button>
            <button
                className='button-class'
                onClick={() => handleToolBarInsertCharacter("\n")}>New Line</button>

            {customToolbarButtons.map((char, index) => (
                <div key={index} className="custom-toolbar-buttons">
                    <button
                        className="button-class"
                        onClick={() => handleToolBarInsertCharacter(char)}
                    // style={{ marginRight: "5px" }}
                    >
                        {char}
                    </button>
                    <button
                        onClick={() => deleteCustomButton(index)}
                        className="delete-button-class"
                    >
                        ✖
                    </button>
                </div>
            ))}

            {editing ? (

                <div className="custom-character-input-container">
                    <input
                        autoFocus
                        type="text"
                        value={currentCustomCharacter}
                        onChange={handleCustomButtonInputChange}
                        onKeyDown={handleKeyDown}
                        onBlur={handleCustomButtonEnter}
                        placeholder={translations.placeHolders.enterCharactersToolbar}
                        className='custom-character-input'
                    />
                    <button
                        onClick={handleCustomButtonEnter}
                        className='button-class'
                    >
                        ↵
                    </button>
                </div>
            ) : (
                <button
                    className='button-class'
                    onClick={() => setEditing(true)}
                >
                    +
                </button>
            )}
        </div>
    )
}