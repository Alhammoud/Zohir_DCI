

export const alphabet = 'abcdefghijklmnopqrstvwxyz';

export const randomstring = (n) => {
    let res = '';
    for (let index = 0; index < n; index++) {
        res += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return res;
}

// CommenJS Äquivalent
//
// module.exports = {
//     alphabet: alphabet,
//     randomstring: randomstring
// };