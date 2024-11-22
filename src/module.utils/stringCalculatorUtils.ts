export function add(numbers: string): number {
    // Now we are handling empty string
    if (numbers === "") return 0;

    // Now we are handling single number
    if (!numbers.includes(',')) return parseInt(numbers);

    //Now we are handling the comma seperated numbers
    return numbers
        .split(/,|\n/)
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
}