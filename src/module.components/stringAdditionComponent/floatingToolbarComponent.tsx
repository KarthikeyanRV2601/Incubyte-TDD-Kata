import React, { useEffect, useCallback, useState, useRef } from "react";
import { FloatingToolbarComponentProps } from "../../module.models"


export const FloatingToolbarComponent = (props: FloatingToolbarComponentProps) => {
    const { toolbarPosition, toolbarRef, handleToolBarInsertCharacter } = props;
    const [position, setPosition] = useState(toolbarPosition);
    const [isDragging, setIsDragging] = useState(false);
    const dragOffset = useRef({ x: 0, y: 0 });

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
            <button onClick={() => handleToolBarInsertCharacter("/")}>/</button>
            <button onClick={() => handleToolBarInsertCharacter("\n")}>New Line</button>
        </div>
    )
}