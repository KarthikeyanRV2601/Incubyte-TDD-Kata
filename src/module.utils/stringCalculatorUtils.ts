export function add(numbers: string): number {
    // Now we are handling empty string
    if (numbers === "") return 0;
    else return parseInt(numbers);
}