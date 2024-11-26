export class GeomtericalUtils {
    public static getBoundingClientRect(id: string): DOMRect | null {
        const divElement = document.getElementById(id);
        if (divElement) {
            return divElement.getBoundingClientRect();
        }
        return null;
    }

    public static isCursorWithinDiv(event: MouseEvent, divId: string): boolean {
        const rect = this.getBoundingClientRect(divId);
        if (rect) {
            const { clientX, clientY } = event;

            // Check if the cursor is within the div's bounds
            return (
                clientX >= rect.left &&
                clientX <= rect.right &&
                clientY >= rect.top &&
                clientY <= rect.bottom
            );
        }
        return false;
    }
}