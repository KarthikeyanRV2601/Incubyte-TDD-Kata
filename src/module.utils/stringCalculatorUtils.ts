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

    console.log({ delimiterMatch, numbers, delimiter })
    return numbers
        .split(delimiter)
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
}