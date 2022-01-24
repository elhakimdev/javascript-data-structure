/**
 * Factorize the given parameters
 * 
 * 
 * @param {Number} number 
 * @returns Number
 */
const factorize = (number) => {
    return number < 0 ? -1 : number == 0 ? 1 : number * factorize(number - 1);
}

export {factorize}

console.log(factorize(0));

