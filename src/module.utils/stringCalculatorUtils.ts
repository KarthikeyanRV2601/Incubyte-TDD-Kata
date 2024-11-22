export function add(numbers: string): number {
    // Now we are handling empty string
    if (numbers === "") return 0;

    //Now we are handling the comma , new lines or any custom delimiter seperated numbers
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    let delimiter = /,|\n/;

    if (delimiterMatch) {
        delimiter = new RegExp(delimiterMatch[1]);
        numbers = numbers.slice(delimiterMatch[0].length);
    }

    //Now we are handling negative numbers
    const numbersSplitted = numbers.split(delimiter).map(Number);
    const negatives = numbersSplitted.filter(num => num < 0);

    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numbersSplitted.reduce((sum, num) => sum + num, 0);
}