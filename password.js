
let language = "abcdefghijklmnopqrstuvwxyz";
let language2 = language.toUpperCase();
let language3 = language.concat(language2);
function password(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        let rnd = language3[Math.floor(Math.random() * language3.length)];
        result += rnd

    } return result;
}
console.log(password(40));

