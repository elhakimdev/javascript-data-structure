/**
 * Factorize the given parameters
 * 
 * @param {Number} number The number that need to be factorialize.
 * @returns {Number} result.
 */
const factorize = (number) => {
    return number < 0 ? -1 : number == 0 ? 1 : number * factorize(number - 1);
}

export {factorize}

console.log(factorize(0));

