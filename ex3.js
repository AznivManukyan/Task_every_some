function containsCharacter(strings, character) {
    return strings.some(function(str) {
        return str.includes(character);
    });
}

const stringArray = ["ananas", "apple", "cherry", "apelsin"];
const characterToFind = "a";
