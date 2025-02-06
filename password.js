
let element = ".,/\!@#$%^&*()_+=-{}[];:|<>";
let language = "abcdefghijklmnopqrstuvwxyz";
let language2 = language.toUpperCase();
let language3 = language.concat(language2);
let elements = element.concat(language3);
function password(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        let rnd = elements[Math.floor(Math.random() * elements.length)];
        result += rnd

    } return result;
}
console.log(password(10));

